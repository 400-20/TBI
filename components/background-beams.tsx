'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ 
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`h-full w-full overflow-hidden bg-black ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100,100,255,.25), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};
