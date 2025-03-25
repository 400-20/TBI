'use client';
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleColor = "#FFF",
  particleDensity = 100,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [particles, setParticles] = useState<any[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      setContext(ctx);

      const handleResize = () => {
        if (canvas && ctx) {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
          initParticles(canvas.width, canvas.height);
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        if (animationRef.current !== null) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, []);

  const initParticles = (width: number, height: number) => {
    const particleCount = Math.min(Math.floor((width * height) / 10000) * particleDensity, 1000);
    const newParticles:any = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const size = Math.random() * (maxSize - minSize) + minSize;
      const opacity = Math.random();
      const direction = Math.random() * Math.PI * 2;
      const velocity = (Math.random() * 0.5 + 0.1) * speed;

      newParticles.push({
        x,
        y,
        size,
        opacity,
        direction,
        velocity,
        lastUpdate: Date.now(),
      });
    }

    setParticles(newParticles);
  };

  useEffect(() => {
    if (!context || particles.length === 0) return;

    const animate = () => {
      if (!canvasRef.current || !context) return;

      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      context.fillStyle = background;
      context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      const now = Date.now();
      const updatedParticles = particles.map((particle) => {
        const delta = (now - particle.lastUpdate) / 1000;
        const x = particle.x + Math.cos(particle.direction) * particle.velocity * delta * 50;
        const y = particle.y + Math.sin(particle.direction) * particle.velocity * delta * 50;

        // Wrap around edges
        const wrappedX = (x + canvasRef.current!.width) % canvasRef.current!.width;
        const wrappedY = (y + canvasRef.current!.height) % canvasRef.current!.height;

        // Draw particle
        context.beginPath();
        context.arc(wrappedX, wrappedY, particle.size, 0, Math.PI * 2);
        context.fillStyle = `${particleColor}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        context.fill();

        return {
          ...particle,
          x: wrappedX,
          y: wrappedY,
          lastUpdate: now,
        };
      });

      setParticles(updatedParticles);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [context, particles, background, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("h-full w-full", className)}
    />
  );
};
