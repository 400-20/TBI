'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { BackgroundBeams } from '@/components/background-beams';
import { SparklesCore } from '@/components/sparkles';
// import { TextReveal } from '@/components/text-reveal';
import { HoverEffect } from '@/components/card-hover-effect';
import { AnimatedTooltip } from '@/components/animated-tooltip';
import { Spotlight } from '@/components/spotlight';
import { TracingBeam } from '@/components/tracing-beam';
import { TypewriterEffect } from '@/components/typewriter-effect';
import { GlowingStarsBackgroundCard } from '@/components/glowing-stars';
import { InfiniteMovingCards } from '@/components/infinite-moving-cards';


export default function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Sample data for components
  const features = [
    {
      title: "Easy Text Behind Image Creation",
      description: "Create stunning text-behind-image designs in seconds with our intuitive interface.",
      icon: "💫"
    },
    {
      title: "200,000+ Designs Created",
      description: "Join thousands of creators who have already made amazing designs with our tool.",
      icon: "🚀"
    },
    {
      title: "Multiple Export Options",
      description: "Export your designs in various formats suitable for social media, print, or web.",
      icon: "📤"
    },
    {
      title: "Custom Typography",
      description: "Choose from hundreds of fonts or upload your own to create the perfect look.",
      icon: "🔤"
    },
    {
      title: "Advanced Layering",
      description: "Create complex designs with multiple text and image layers for unique effects.",
      icon: "📚"
    },
    {
      title: "Real-time Preview",
      description: "See your changes instantly as you design for a seamless creative process.",
      icon: "👁️"
    }
  ];

  const testimonials = [
    {
      quote: "This tool completely transformed how I create social media graphics. So intuitive!",
      name: "Alex Johnson",
      title: "Social Media Manager"
    },
    {
      quote: "I've tried many design tools, but this one stands out for its simplicity and powerful features.",
      name: "Maria Garcia",
      title: "Graphic Designer"
    },
    {
      quote: "The text-behind-image effect gives my brand a unique look that stands out from competitors.",
      name: "David Chen",
      title: "Marketing Director"
    },
    {
      quote: "I use this tool daily for my client work. It's become an essential part of my workflow.",
      name: "Sarah Williams",
      title: "Freelance Designer"
    }
  ];

  const people = [
    {
      id: 1,
      name: "John Smith",
      designation: "Designer",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      designation: "Developer",
      image: "/placeholder.svg?height=100&width=100"
    },
    {
      id: 3,
      name: "Michael Brown",
      designation: "Marketer",
      image: "/placeholder.svg?height=100&width=100"
    }
  ];

  const words = [
    {
      text: "Create",
    },
    {
      text: "stunning",
    },
    {
      text: "text-behind-image",
      className: "text-[#E2CBFF]"
    },
    {
      text: "designs",
    },
    {
      text: "in",
    },
    {
      text: "seconds.",
      className: "text-[#E2CBFF]"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden bg-black text-white">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="relative z-10 text-center px-6 md:px-10 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-sm md:text-base font-medium text-primary"
          >
            200,000+ TEXT BEHIND IMAGE DESIGNS CREATED
          </motion.div>
          
          <div className="h-20 md:h-28">
            <TypewriterEffect words={words} className="text-3xl md:text-5xl lg:text-6xl font-bold" />
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-4 max-w-2xl mx-auto text-base md:text-xl text-gray-300"
          >
            Create professional text-behind-image designs for social media, websites, and print materials in seconds. No design skills required.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-10"
          >
            <a href="/app">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Open the App
                </span>
              </button>
            </a>
          </motion.div>
        </div>
        
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Everything you need to create stunning text-behind-image designs that capture attention
            </p>
          </motion.div>
          
          <HoverEffect items={features.map(feature => ({
            title: feature.title,
            description: feature.description,
            icon: feature.icon,
          }))} />
        </div>
      </section>


      {/* How It Works Section */}
      <section className="relative w-full py-20 md:py-32">
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-300">
                Create your design in three simple steps
              </p>
            </motion.div>
            
            <div className="space-y-16">
              <div>
                <h3 className="text-xl font-bold mb-4">1. Upload Your Image</h3>
                <p className="text-gray-300 mb-4">
                  Start by uploading the image you want to use as your background. Our tool supports JPG, PNG, and SVG formats.
                </p>
                <div className="rounded-lg overflow-hidden border border-gray-800">
                  <Image 
                    src="/placeholder.svg?height=300&width=600" 
                    alt="Upload image" 
                    width={600} 
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">2. Add Your Text</h3>
                <p className="text-gray-300 mb-4">
                  Type your text and customize the font, size, and position. Our intuitive editor makes it easy to get the perfect look.
                </p>
                <div className="rounded-lg overflow-hidden border border-gray-800">
                  <Image 
                    src="/placeholder.svg?height=300&width=600" 
                    alt="Add text" 
                    width={600} 
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">3. Export Your Design</h3>
                <p className="text-gray-300 mb-4">
                  Once you're happy with your design, export it in your preferred format. Share directly to social media or download for later use.
                </p>
                <div className="rounded-lg overflow-hidden border border-gray-800">
                  <Image 
                    src="/placeholder.svg?height=300&width=600" 
                    alt="Export design" 
                    width={600} 
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </TracingBeam>
      </section>

      {/* Testimonials Section */}
      <section className="relative w-full py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied creators who use our tool every day
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
              pauseOnHover={true}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The creative minds behind the text-behind-image tool
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-10">
            <AnimatedTooltip items={people} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <GlowingStarsBackgroundCard>
            <div className="text-center py-16 md:py-24 px-4 md:px-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Ready to Create Your Design?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg"
              >
                Join over 200,000 creators who have already made amazing text-behind-image designs
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a href="/app">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                      Start Creating Now
                    </span>
                  </button>
                </a>
              </motion.div>
            </div>
          </GlowingStarsBackgroundCard>
        </div>
      </section>

      
      <BackgroundBeams />
    </div>
  );
}
