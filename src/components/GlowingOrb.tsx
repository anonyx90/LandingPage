"use client";

import { motion } from "framer-motion";

export function GlowingOrb() {
  return (
    <motion.div 
      className="relative w-56 h-56 mx-auto"
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {/* Main Orb Container with Breathing Motion */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: [1, 1.06, 1.1, 1.06, 1],
          x: [0, 12, 25, 12, 0],
          y: [0, -8, -15, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Massive Screen-Filling Blue Illumination - Outermost Layer */}
        <div className="absolute -inset-96 rounded-full bg-gradient-radial from-[#015ce6]/40 via-[#015ce6]/20 via-[#87ceeb]/15 to-transparent blur-3xl screen-illuminate" />
        <motion.div 
          className="absolute -inset-80 rounded-full bg-gradient-radial from-[#87ceeb]/50 via-[#015ce6]/30 via-[#3198ff]/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute -inset-64 rounded-full bg-gradient-radial from-[#3198ff]/60 via-[#015ce6]/40 via-[#87ceeb]/25 to-transparent blur-2xl"
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Intense Blue Light Halo - Multiple Pulsing Layers */}
        <div className="absolute -inset-32 rounded-full bg-gradient-radial from-[#015ce6]/60 via-[#87ceeb]/40 to-transparent blur-3xl glow-screen-fill" />
        <motion.div 
          className="absolute -inset-24 rounded-full bg-gradient-radial from-[#3198ff]/70 via-[#015ce6]/50 to-transparent blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute -inset-16 rounded-full bg-gradient-radial from-[#87ceeb]/80 via-[#015ce6]/60 to-transparent blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.4, 0.8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Bright Central Glow */}
        <motion.div 
          className="absolute -inset-12 rounded-full bg-gradient-radial from-[#ffffff]/30 via-[#87ceeb]/70 via-[#015ce6]/50 to-transparent blur-lg glow-blue-strong"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Luminous Glass Sphere Container */}
        <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/40 backdrop-blur-sm glow-blue-strong"
             style={{
               background: `
                 radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.25) 0%, transparent 50%),
                 radial-gradient(circle at 70% 80%, rgba(135, 206, 235, 0.2) 0%, transparent 60%),
                 linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(1, 92, 230, 0.1))
               `,
             }}>
          
          {/* Soft Noise Cloud 1 - Primary Energy */}
          <motion.div
            className="absolute -inset-4 opacity-90"
            animate={{
              x: [-25, 25, -25],
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0 rounded-full blur-md"
              style={{
                background: `
                  radial-gradient(ellipse 60% 80% at 30% 40%, rgba(1, 92, 230, 0.9) 0%, transparent 70%),
                  radial-gradient(ellipse 80% 60% at 70% 60%, rgba(135, 206, 235, 0.8) 0%, transparent 60%),
                  radial-gradient(ellipse 40% 90% at 50% 20%, rgba(49, 152, 255, 0.7) 0%, transparent 80%),
                  radial-gradient(ellipse 90% 40% at 20% 80%, rgba(0, 112, 243, 0.6) 0%, transparent 70%)
                `,
              }}
            />
          </motion.div>

          {/* Soft Noise Cloud 2 - Secondary Layer */}
          <motion.div
            className="absolute -inset-2 opacity-80"
            animate={{
              x: [20, -20, 20],
              y: [25, -25, 25],
              rotate: [360, 180, 0],
              scale: [1.1, 0.9, 1.1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0 rounded-full blur-lg"
              style={{
                background: `
                  radial-gradient(ellipse 70% 50% at 60% 30%, rgba(135, 206, 235, 0.9) 0%, transparent 65%),
                  radial-gradient(ellipse 50% 70% at 40% 70%, rgba(1, 92, 230, 0.8) 0%, transparent 55%),
                  radial-gradient(ellipse 80% 30% at 80% 50%, rgba(0, 123, 167, 0.9) 0%, transparent 75%)
                `,
              }}
            />
          </motion.div>

          {/* Soft Noise Cloud 3 - Tertiary Wispy Layer */}
          <motion.div
            className="absolute inset-2 opacity-70"
            animate={{
              x: [-15, 15, -15],
              y: [-30, 30, -30],
              rotate: [0, 360],
              scale: [0.9, 1.3, 0.9],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0 rounded-full blur-xl"
              style={{
                background: `
                  radial-gradient(ellipse 40% 60% at 70% 40%, rgba(49, 152, 255, 1) 0%, transparent 60%),
                  radial-gradient(ellipse 60% 40% at 30% 60%, rgba(135, 206, 235, 0.9) 0%, transparent 50%),
                  radial-gradient(ellipse 30% 80% at 90% 20%, rgba(1, 92, 230, 0.8) 0%, transparent 70%)
                `,
              }}
            />
          </motion.div>

          {/* Brilliant Central Luminous Core */}
          <motion.div
            className="absolute inset-8 opacity-95"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.8, 1, 0.8],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="absolute inset-0 rounded-full blur-sm glow-blue-strong"
              style={{
                background: `
                  radial-gradient(circle, 
                    rgba(255, 255, 255, 0.8) 0%, 
                    rgba(135, 206, 235, 1) 30%, 
                    rgba(1, 92, 230, 0.9) 60%, 
                    transparent 100%
                  )
                `,
              }}
            />
          </motion.div>

          {/* Organic Flowing Tendrils */}
          <motion.div
            className="absolute inset-4 opacity-60"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className="absolute inset-0 rounded-full blur-md"
              style={{
                background: `
                  conic-gradient(from 0deg,
                    transparent 0deg,
                    rgba(135, 206, 235, 0.8) 30deg,
                    transparent 60deg,
                    rgba(1, 92, 230, 0.9) 120deg,
                    transparent 150deg,
                    rgba(49, 152, 255, 0.7) 210deg,
                    transparent 240deg,
                    rgba(135, 206, 235, 0.8) 300deg,
                    transparent 360deg
                  )
                `,
              }}
            />
          </motion.div>

          {/* Enhanced Pulsating Energy Wisps - Contained within orb */}
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={`wisp-${i}`}
              className="absolute rounded-full blur-lg glow-blue"
              style={{
                width: `${25 + i * 4}px`,
                height: `${20 + i * 3}px`,
                left: `${25 + Math.sin((i / 8) * Math.PI * 2) * 20}%`,
                top: `${50 + Math.cos((i / 8) * Math.PI * 2) * 20}%`,
                background: `radial-gradient(ellipse, rgba(135, 206, 235, ${1 - i * 0.1}) 0%, transparent 70%)`,
              }}
              animate={{
                scale: [0.5, 2, 0.5],
                opacity: [0.4, 1, 0.4],
                x: [0, Math.sin(i) * 10, 0],
                y: [0, Math.cos(i) * 10, 0],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Enhanced Glass Surface Reflections */}
        <div className="absolute inset-0 rounded-full pointer-events-none">
          {/* Primary highlight */}
          <div className="absolute top-3 left-5 w-20 h-24 rounded-full bg-gradient-to-br from-white/60 to-transparent blur-sm transform rotate-12" />
          {/* Secondary highlight */}
          <div className="absolute top-6 right-6 w-10 h-12 rounded-full bg-white/45 blur-sm" />
          {/* Tertiary highlight */}
          <div className="absolute bottom-10 left-10 w-8 h-10 rounded-full bg-[#87ceeb]/50 blur-sm" />
          {/* Brilliant luminous edge */}
          <div className="absolute inset-0 rounded-full border-2 border-[#87ceeb]/50 glow-blue-strong" />
        </div>
      </motion.div>
    </motion.div>
  );
}