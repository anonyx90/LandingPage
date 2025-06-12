"use client";

import { motion } from "framer-motion";
import svgPaths from "../imports/svg-7mvaqn49in";

export function MountainSilhouette() {
  return (
    <motion.div 
      className="absolute bottom-0 left-0 right-0 h-[85vh] overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.5, ease: "easeOut" }}
    >
      <div className="relative w-full h-full">
        <svg
          className="absolute bottom-0 w-full h-full object-cover"
          fill="none"
          preserveAspectRatio="xMidYMax slice"
          viewBox="0 0 595 597"
        >
          <defs>
            {/* Blue radial gradient for the atmospheric glow */}
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(276.75 308.25) rotate(90) scale(152.25 244.888)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_mountain"
              r="1"
            >
              <stop stopColor="#95CFFB" />
              <stop offset="1" stopColor="#015CE6" />
            </radialGradient>

            {/* Blur filter for the atmospheric glow */}
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="766.5"
              id="filter0_f_mountain"
              width="1105.73"
              x="-218"
              y="-75"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_mountain"
                stdDeviation="100"
              />
            </filter>

            {/* Inner shadow filter for the mountain */}
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="429"
              id="filter1_i_mountain"
              width="863"
              x="-141"
              y="242"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="50" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.00392157 0 0 0 0 0.360784 0 0 0 0 0.901961 0 0 0 1 0"
              />
              <feBlend
                in2="shape"
                mode="normal"
                result="effect1_innerShadow_mountain"
              />
            </filter>
          </defs>

          {/* Atmospheric blue glow background */}
          <motion.g 
            filter="url(#filter0_f_mountain)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
          >
            <path 
              d={svgPaths.p345c9a00} 
              fill="url(#paint0_radial_mountain)" 
            />
          </motion.g>

          {/* Main mountain silhouette with inner shadow */}
          <motion.g 
            filter="url(#filter1_i_mountain)"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <path 
              d={svgPaths.p2615f900} 
              fill="rgba(0, 0, 0, 0.95)" 
            />
          </motion.g>

          {/* Additional atmospheric layers for depth */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4, delay: 1.5 }}
          >
            {/* Subtle gradient overlay on the mountain */}
            <path 
              d={svgPaths.p2615f900} 
              fill="url(#paint0_radial_mountain)"
              opacity="0.1"
            />
          </motion.g>
        </svg>

        {/* Additional atmospheric haze overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, delay: 2 }}
          className="absolute bottom-0 left-0 right-0 h-full pointer-events-none"
          style={{
            background: `
              linear-gradient(to top, 
                transparent 0%, 
                rgba(135, 206, 235, 0.02) 20%,
                rgba(1, 92, 230, 0.03) 40%,
                rgba(149, 207, 251, 0.04) 60%,
                rgba(180, 190, 220, 0.03) 80%,
                transparent 100%
              )
            `
          }}
        />

        {/* Enhanced blue glow at mountain base */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, delay: 2.5 }}
          className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at center bottom, 
                rgba(1, 92, 230, 0.15) 0%, 
                rgba(149, 207, 251, 0.08) 30%,
                rgba(135, 206, 235, 0.04) 50%,
                transparent 80%
              )
            `
          }}
        />

        {/* Subtle mist effects */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 8, delay: 3, ease: "easeOut" }}
          className="absolute bottom-48 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: `
              linear-gradient(90deg, 
                transparent 0%, 
                rgba(149, 207, 251, 0.03) 20%,
                rgba(1, 92, 230, 0.04) 40%,
                rgba(135, 206, 235, 0.03) 60%,
                rgba(149, 207, 251, 0.02) 80%,
                transparent 100%
              )
            `
          }}
        />
      </div>
    </motion.div>
  );
}