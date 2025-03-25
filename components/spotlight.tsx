"use client"
import { cn } from "@/lib/utils"
import { useRef, useState, useEffect } from "react"

interface SpotlightProps {
  className?: string
  fill?: string
}

export const Spotlight = ({ className, fill = "white" }: SpotlightProps) => {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)
  const [size, setSize] = useState(0)

  const updatePosition = (event: MouseEvent) => {
    if (!divRef.current) return

    const rect = divRef.current.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    setPosition({ x, y })
  }

  const updateSize = () => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    setSize(size * 1.5)
  }

  useEffect(() => {
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => {
      window.removeEventListener("resize", updateSize)
    }
  }, [])

  useEffect(() => {
    if (!divRef.current) return

    const handleMouseMove = (event: MouseEvent) => {
      updatePosition(event)
      setOpacity(1)
    }

    const handleMouseLeave = () => {
      setOpacity(0)
    }

    const element = divRef.current
    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div ref={divRef} className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(circle ${size}px at ${position.x}px ${position.y}px, ${fill}10 0%, transparent 70%)`,
        }}
      />
    </div>
  )
}

