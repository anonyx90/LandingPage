"use client";

import { motion } from "framer-motion";
import svgPaths from "../imports/svg-21ql82g5bk";

export function MountainSilhouetteBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4, delay: 1 }}
        className="absolute inset-0 w-full h-full"
      >
        <svg
          className="absolute inset-0 w-full h-full object-cover"
          fill="none"
          preserveAspectRatio="xMidYMax slice"
          viewBox="0 0 595 667"
        >
          {/* Clip path for the background */}
          <defs>
            <clipPath id="clip0_mountain_hero">
              <rect fill="white" height="667" width="595" />
            </clipPath>

            {/* Radial gradient for the atmospheric glow */}
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(277.75 375.25) rotate(90) scale(152.25 244.888)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_mountain_hero"
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
              id="filter0_f_mountain_hero"
              width="1105.73"
              x="-217"
              y="-8"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                mode="normal"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_mountain_hero"
                stdDeviation="100"
              />
            </filter>

            {/* Inner shadow filter for the mountain */}
            <filter
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
              height="490"
              id="filter1_i_mountain_hero"
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
                result="effect1_innerShadow_mountain_hero"
              />
            </filter>
          </defs>

          <g clipPath="url(#clip0_mountain_hero)">
            {/* Atmospheric glow background */}
            <motion.g 
              filter="url(#filter0_f_mountain_hero)"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 6, delay: 1.5 }}
            >
              <path 
                d={svgPaths.p25ead80} 
                fill="url(#paint0_radial_mountain_hero)" 
              />
            </motion.g>

            {/* Mountain silhouette with inner shadow */}
            <motion.g 
              filter="url(#filter1_i_mountain_hero)"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay: 2.5 }}
            >
              <path 
                d={svgPaths.p9432f0} 
                fill="rgba(0, 0, 0, 0.98)" 
              />
            </motion.g>
          </g>
        </svg>

        {/* Additional atmospheric overlay to blend with existing background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4, delay: 3 }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 40% 60%, rgba(1, 92, 230, 0.15) 0%, transparent 70%),
              radial-gradient(ellipse at 60% 40%, rgba(149, 207, 251, 0.1) 0%, transparent 80%),
              linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.2) 60%, rgba(10, 10, 10, 0.6) 100%)
            `
          }}
        />

        {/* Subtle mist effects at mountain base */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5, delay: 4 }}
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: `
              linear-gradient(to top, 
                rgba(1, 92, 230, 0.08) 0%, 
                rgba(49, 152, 255, 0.05) 40%,
                rgba(135, 206, 235, 0.03) 70%,
                transparent 100%
              )
            `
          }}
        />
      </motion.div>
    </div>
  );
}