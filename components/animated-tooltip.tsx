"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number
    name: string
    designation: string
    image: string
  }[]
}) => {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      {items.map((item) => (
        <AnimatedTooltipItem key={item.id} item={item} />
      ))}
    </div>
  )
}

const AnimatedTooltipItem = ({
  item,
}: {
  item: {
    id: number
    name: string
    designation: string
    image: string
  }
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative mx-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-black border border-white/10 p-1 cursor-pointer"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src={item.image || "/placeholder.svg"}
          width={100}
          height={100}
          alt={item.name}
          className="rounded-full h-24 w-24 object-cover"
        />
      </motion.div>
      {isHovered && (
        <motion.div
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-50 min-w-max"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="bg-black border border-white/10 rounded-xl px-4 py-2">
            <div className="flex flex-col items-center">
              <p className="font-bold text-white">{item.name}</p>
              <p className="text-sm text-white/80">{item.designation}</p>
            </div>
          </div>
          <div className="w-4 h-4 bg-black border-r border-b border-white/10 transform rotate-45 absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
        </motion.div>
      )}
    </div>
  )
}

