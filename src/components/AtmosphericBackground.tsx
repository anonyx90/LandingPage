

import { motion } from "framer-motion";

export function AtmosphericBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep space gradient background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(1, 92, 230, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 20% 70%, rgba(236, 72, 153, 0.08) 0%, transparent 50%),
            linear-gradient(180deg, rgba(10, 10, 10, 0.9) 0%, rgba(17, 17, 17, 0.95) 50%, rgba(10, 10, 10, 1) 100%)
          `
        }}
      />

      {/* Nebula-like atmospheric layers */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 6, delay: 1 }}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 40% 30%, rgba(135, 206, 235, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 60% 70%, rgba(0, 112, 243, 0.06) 0%, transparent 70%),
            radial-gradient(ellipse at 80% 20%, rgba(49, 152, 255, 0.05) 0%, transparent 80%)
          `
        }}
      />

      {/* Animated cosmic dust clouds */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 8, delay: 2 }}
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, 
              transparent 0%, 
              rgba(135, 206, 235, 0.03) 20%,
              rgba(1, 92, 230, 0.04) 40%,
              rgba(99, 102, 241, 0.03) 60%,
              rgba(135, 206, 235, 0.02) 80%,
              transparent 100%
            )
          `
        }}
      />

      {/* Reduced starfield with multiple layers */}
      <div className="absolute inset-0">
        {/* Layer 1: Bright stars - reduced from 80 to 25 */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={`bright-star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.4 + Math.random() * 0.6
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.02 }}
          />
        ))}

        {/* Layer 2: Medium stars - reduced from 120 to 40 */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={`medium-star-${i}`}
            className="absolute w-0.5 h-0.5 bg-blue-200 rounded-full star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.5
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.015 }}
          />
        ))}

        {/* Layer 3: Dim background stars - reduced from 200 to 55 */}
        {Array.from({ length: 55 }).map((_, i) => (
          <motion.div
            key={`dim-star-${i}`}
            className="absolute w-px h-px bg-gray-400 rounded-full star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.2 + Math.random() * 0.3
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: i * 0.01 }}
          />
        ))}
      </div>

      {/* Cosmic energy waves */}
      <motion.div
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 10, delay: 3 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg,
              rgba(1, 92, 230, 0.02) 60deg,
              transparent 120deg,
              rgba(49, 152, 255, 0.015) 180deg,
              transparent 240deg,
              rgba(135, 206, 235, 0.01) 300deg,
              transparent 360deg
            )
          `
        }}
      />

      {/* Reduced floating light particles - reduced from 20 to 8 */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(135, 206, 235, 0.6) 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ 
            opacity: 0,
            scale: 0,
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100
          }}
          animate={{ 
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Atmospheric depth layers */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 6, delay: 4 }}
        className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
        style={{
          background: `
            linear-gradient(to top, 
              rgba(0, 10, 20, 0.8) 0%, 
              rgba(0, 20, 40, 0.4) 25%,
              rgba(1, 30, 60, 0.2) 50%,
              transparent 100%
            )
          `
        }}
      />



      {/* Subtle geometric patterns */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 8, delay: 6 }}
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(1, 92, 230, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(49, 152, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 150px 150px'
        }}
      />

      {/* Animated aurora-like effects */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 12, delay: 7 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(45deg, 
              transparent 0%,
              rgba(1, 92, 230, 0.05) 20%,
              rgba(99, 102, 241, 0.03) 40%,
              rgba(236, 72, 153, 0.02) 60%,
              rgba(49, 152, 255, 0.04) 80%,
              transparent 100%
            )
          `,
          transform: 'skewY(-2deg)',
          animation: 'gradientSwirl 20s ease-in-out infinite'
        }}
      />
    </div>
  );
}