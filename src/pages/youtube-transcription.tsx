import { useState } from 'react';

const CORS_PROXY = 'https://red-bread-ad95.arunkundu45837.workers.dev/?url=';

function extractVideoId(url: string): string | null {
  const match = url.match(/(?:v=|\/shorts\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16)),
    )
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");
}

function parseTranscriptXml(xml: string): string[] {
  const segments: string[] = [];

  // SRV3 format: <p t="..." d="..."><s>TEXT</s></p>
  const srv3Regex = /<p\s[^>]*>([\s\S]*?)<\/p>/g;
  const sTagRegex = /<s[^>]*>([\s\S]*?)<\/s>/g;
  let srv3Match;
  while ((srv3Match = srv3Regex.exec(xml)) !== null) {
    const inner = srv3Match[1];
    let sMatch;
    const words: string[] = [];
    while ((sMatch = sTagRegex.exec(inner)) !== null) {
      words.push(decodeHtmlEntities(sMatch[1]));
    }
    if (words.length) segments.push(words.join(' '));
    else {
      const stripped = decodeHtmlEntities(inner.replace(/<[^>]+>/g, '').trim());
      if (stripped) segments.push(stripped);
    }
  }

  if (segments.length > 0) return segments;

  // Classic format: <text start="..." dur="...">TEXT</text>
  const classicRegex = /<text[^>]*>([^<]*)<\/text>/g;
  let classicMatch;
  while ((classicMatch = classicRegex.exec(xml)) !== null) {
    const text = decodeHtmlEntities(classicMatch[1].trim());
    if (text) segments.push(text);
  }

  return segments;
}

async function getCaptionTracks(
  videoId: string,
): Promise<{ baseUrl: string; languageCode?: string }[]> {
  // Try InnerTube API first
  try {
    const res = await fetch(
      `${CORS_PROXY}${encodeURIComponent('https://www.youtube.com/youtubei/v1/player?prettyPrint=false')}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          context: {
            client: { clientName: 'ANDROID', clientVersion: '20.10.38' },
          },
          videoId,
        }),
      },
    );
    const data = await res.json();
    const tracks =
      data?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
    if (tracks?.length) return tracks;
  } catch {
    // fall through to HTML scrape
  }

  // Fallback: scrape HTML page
  const pageRes = await fetch(
    `${CORS_PROXY}${encodeURIComponent(`https://www.youtube.com/watch?v=${videoId}`)}`,
  );
  const html = await pageRes.text();
  const match = html.match(/ytInitialPlayerResponse\s*=\s*(\{[\s\S]+?\});/);
  if (!match)
    throw new Error(
      'Could not parse YouTube page. The video may be unavailable.',
    );
  const playerData = JSON.parse(match[1]);
  const tracks =
    playerData?.captions?.playerCaptionsTracklistRenderer?.captionTracks;
  if (!tracks?.length) throw new Error('No captions available for this video.');
  return tracks;
}

async function fetchTranscript(url: string): Promise<string> {
  const videoId = extractVideoId(url);
  if (!videoId) throw new Error('Invalid YouTube URL.');

  const tracks = await getCaptionTracks(videoId);

  // Prefer English, fall back to first available
  const track = tracks.find((t) => t.languageCode === 'en') ?? tracks[0];

  const xmlRes = await fetch(
    `${CORS_PROXY}${encodeURIComponent(track.baseUrl)}`,
  );
  const xml = await xmlRes.text();
  const segments = parseTranscriptXml(xml);
  if (!segments.length) throw new Error('Transcript is empty.');
  return segments.join(' ');
}

export default function YoutubeTranscription() {
  const [url, setUrl] = useState('');
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setTranscript('');
    setLoading(true);
    try {
      const text = await fetchTranscript(url);
      setTranscript(text);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        maxWidth: 800,
        margin: '40px auto',
        padding: '0 20px',
        fontFamily: 'sans-serif',
      }}
    >
      <h1>YouTube Transcription</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', gap: 8, marginBottom: 24 }}
      >
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=..."
          required
          style={{
            flex: 1,
            padding: '8px 12px',
            fontSize: 14,
            border: '1px solid #ccc',
            borderRadius: 4,
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '8px 16px',
            fontSize: 14,
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Fetching...' : 'Get Transcript'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {transcript && (
        <div>
          <h2 style={{ fontSize: 16 }}>Transcript</h2>
          <p
            style={{
              lineHeight: 1.7,
              whiteSpace: 'pre-wrap',
              border: '1px solid #eee',
              padding: 16,
              borderRadius: 4,
            }}
          >
            {transcript}
          </p>
        </div>
      )}
    </div>
  );
}
