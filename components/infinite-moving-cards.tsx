"use client"
import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string
    name: string
    title: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  const [start, setStart] = useState(false)

  useEffect(() => {
    setStart(true)
  }, [])

  const getSpeed = () => {
    switch (speed) {
      case "fast":
        return "30s"
      case "normal":
        return "45s"
      case "slow":
        return "60s"
      default:
        return "45s"
    }
  }

  const getClassName = () => {
    if (direction === "left") {
      return "animate-scroll"
    } else {
      return "animate-scroll-reverse"
    }
  }

  return (
    <div ref={containerRef} className={cn("scroller relative z-20 max-w-7xl overflow-hidden", className)}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4",
          start && getClassName(),
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={{
          animationDuration: getSpeed(),
        }}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-white/10 flex-shrink-0 px-8 py-6 md:w-[450px]"
            key={idx}
          >
            <blockquote className="relative h-full flex flex-col justify-between">
              <div className="relative z-20">
                <p className="text-sm leading-relaxed text-white">"{item.quote}"</p>
                <div className="mt-6 flex items-center">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">{item.name}</span>
                    <span className="text-sm text-white/70">{item.title}</span>
                  </div>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}

