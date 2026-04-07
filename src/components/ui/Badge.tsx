import { cn } from '@/lib/utils';

interface BadgeProps {
  children: string;
  variant?: 'default' | 'outline' | 'accent';
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium tracking-wide',
        variant === 'default' &&
          'bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300',
        variant === 'outline' &&
          'border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400',
        variant === 'accent' &&
          'bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900',
      )}
    >
      {children}
    </span>
  );
}
