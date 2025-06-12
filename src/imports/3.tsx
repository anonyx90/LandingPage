import svgPaths from "./svg-rb89gusq63";

export default function Component3() {
  return (
    <div className="relative size-full" data-name="3">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 595 842"
      >
        <g clipPath="url(#clip0_3_322)" id="3">
          <rect fill="black" height="842" width="595" />
          <g filter="url(#filter0_f_3_322)" id="Vector 19">
            <path d={svgPaths.p2fb1fb00} fill="url(#paint0_radial_3_322)" />
          </g>
          <g filter="url(#filter1_i_3_322)" id="Mountain">
            <path d={svgPaths.p3d40ad00} fill="var(--fill-0, black)" />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="766.5"
            id="filter0_f_3_322"
            width="1105.73"
            x="-196.5"
            y="-127"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              mode="normal"
              result="shape"
            />
            <feGaussianBlur
              result="effect1_foregroundBlur_3_322"
              stdDeviation="100"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="1078"
            id="filter1_i_3_322"
            width="737"
            x="-78"
            y="162"
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
              result="effect1_innerShadow_3_322"
            />
          </filter>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(298.25 256.25) rotate(90) scale(152.25 244.888)"
            gradientUnits="userSpaceOnUse"
            id="paint0_radial_3_322"
            r="1"
          >
            <stop stopColor="#95CFFB" />
            <stop offset="1" stopColor="#015CE6" />
          </radialGradient>
          <clipPath id="clip0_3_322">
            <rect fill="white" height="842" width="595" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}