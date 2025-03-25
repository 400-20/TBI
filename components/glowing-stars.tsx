"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function GlowingStarsBackgroundCard({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  const [mouseEnter, setMouseEnter] = useState(false)

  return (
    <div
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={cn(
        "bg-black p-4 max-w-md md:max-w-4xl mx-auto rounded-[--radius] relative overflow-hidden",
        className,
      )}
    >
      <div className="relative z-10">
        <div className="p-4">{children}</div>
      </div>
      <GlowingStarsBackground mouseEnter={mouseEnter} />
    </div>
  )
}

export function GlowingStarsBackground({
  mouseEnter,
}: {
  mouseEnter: boolean
}) {
  const [stars, setStars] = useState<Array<{ x: number; y: number; size: number; color: string }>>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect()
      const newStars = Array.from({ length: 100 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`,
      }))
      setStars(newStars)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
          }}
          animate={
            mouseEnter
              ? {
                  opacity: [0.1, 0.5, 0.1],
                  scale: [1, 1.5, 1],
                }
              : {
                  opacity: 0.3,
                  scale: 1,
                }
          }
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        style={{
          translateX: "-100%",
        }}
        animate={
          mouseEnter
            ? {
                translateX: ["100%", "-100%"],
              }
            : {
                translateX: "100%",
              }
        }
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      />
    </div>
  )
}

