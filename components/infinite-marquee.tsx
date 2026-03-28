'use client'

import { cn } from '@/lib/utils'

interface InfiniteMarqueeProps {
  children: React.ReactNode
  speed?: number
  pauseOnHover?: boolean
  direction?: 'left' | 'right'
  className?: string
  isPaused?: boolean
}

export function InfiniteMarquee({
  children,
  speed = 50,
  pauseOnHover = true,
  direction = 'left',
  className = '',
  isPaused = false,
}: InfiniteMarqueeProps) {
  const duration = 100 / speed

  return (
    <div className={cn('overflow-hidden relative', className)}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}} />
      <div
        className={cn(
          'flex w-max flex-nowrap',
          direction === 'left' ? 'animate-[marquee-left_linear_infinite]' : 'animate-[marquee-right_linear_infinite]',
          pauseOnHover && 'hover:[animation-play-state:paused]',
          isPaused && '[animation-play-state:paused]'
        )}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {/* Duplicate children for seamless loop */}
        <div className="flex flex-shrink-0 min-w-max">{children}</div>
        <div className="flex flex-shrink-0 min-w-max">{children}</div>
      </div>
    </div>
  )
}
