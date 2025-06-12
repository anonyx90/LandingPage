import svgPaths from "./svg-21ql82g5bk";

export default function Component3() {
  return (
    <div className="relative size-full" data-name="3">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 595 667"
      >
        <g clipPath="url(#clip0_3_405)" id="3">
          <g filter="url(#filter0_f_3_405)" id="Vector 19">
            <path d={svgPaths.p25ead80} fill="url(#paint0_radial_3_405)" />
          </g>
          <g filter="url(#filter1_i_3_405)" id="Mountain">
            <path d={svgPaths.p9432f0} fill="var(--fill-0, black)" />
          </g>
        </g>
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="766.5"
            id="filter0_f_3_405"
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
              result="effect1_foregroundBlur_3_405"
              stdDeviation="100"
            />
          </filter>
          <filter
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
            height="490"
            id="filter1_i_3_405"
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
              result="effect1_innerShadow_3_405"
            />
          </filter>
          <radialGradient
            cx="0"
            cy="0"
            gradientTransform="translate(277.75 375.25) rotate(90) scale(152.25 244.888)"
            gradientUnits="userSpaceOnUse"
            id="paint0_radial_3_405"
            r="1"
          >
            <stop stopColor="#95CFFB" />
            <stop offset="1" stopColor="#015CE6" />
          </radialGradient>
          <clipPath id="clip0_3_405">
            <rect fill="white" height="667" width="595" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}