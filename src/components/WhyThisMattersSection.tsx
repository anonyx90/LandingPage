"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Clock } from "lucide-react";

export function WhyThisMattersSection() {
  const features = [
    {
      icon: Brain,
      text: "Harness the power of generative AI to analyze vendor risks in real-time"
    },
    {
      icon: Clock,
      text: "Reduce vendor assessment time from weeks to minutes"
    },
    {
      icon: Shield,
      text: "Stay compliant and ahead of evolving threats"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: AI Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Neural network visualization */}
            <div className="relative w-full h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-[#015ce6]/20 via-[#6366f1]/10 to-[#ec4899]/20 glass">
              {/* Network nodes */}
              {Array.from({ length: 12 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-[#015ce6] rounded-full"
                  style={{
                    left: `${15 + (i % 4) * 25}%`,
                    top: `${20 + Math.floor(i / 4) * 25}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full">
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.line
                    key={i}
                    x1={`${20 + (i % 3) * 30}%`}
                    y1={`${30 + Math.floor(i / 3) * 20}%`}
                    x2={`${35 + (i % 3) * 25}%`}
                    y2={`${50 + Math.floor(i / 3) * 15}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    opacity="0.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: i * 0.3 }}
                  />
                ))}
                <defs>
                  <linearGradient id="lineGradient">
                    <stop offset="0%" stopColor="#015ce6" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Central AI brain */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#015ce6] to-[#6366f1] rounded-full glow-blue-strong"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Brain className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-white to-[#015ce6] bg-clip-text text-transparent">
              A Giant Leap in Risk Intelligence
            </h2>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#015ce6]/20 to-[#6366f1]/20 rounded-lg flex items-center justify-center border border-[#015ce6]/30 group-hover:border-[#015ce6]/60 transition-colors">
                    <feature.icon className="w-6 h-6 text-[#015ce6]" />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}