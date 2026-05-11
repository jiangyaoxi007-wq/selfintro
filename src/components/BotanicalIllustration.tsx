export function BotanicalIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 半枫荷 - Pterospermum heterophyllum leaf illustration */}
      {/* Asymmetric leaf shape characteristic of the species */}
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        {/* Main stem */}
        <path d="M 200 540 Q 198 400 195 280 Q 192 180 200 60" strokeWidth="2" />

        {/* Left side - maple-like lobed shape */}
        <path d="M 200 120 Q 160 100 120 70 Q 100 55 90 40" />
        <path d="M 200 160 Q 150 140 100 120 Q 70 110 50 100" />
        <path d="M 200 200 Q 140 185 90 170 Q 60 160 40 150" />
        <path d="M 200 240 Q 150 235 100 230 Q 65 225 45 215" />
        <path d="M 200 280 Q 155 280 110 275 Q 75 270 55 260" />
        <path d="M 200 320 Q 160 322 115 315 Q 80 310 60 300" />
        <path d="M 200 360 Q 165 358 125 345 Q 95 335 75 320" />
        <path d="M 200 400 Q 170 392 140 375 Q 115 360 100 345" />
        <path d="M 200 440 Q 178 425 155 405 Q 135 385 125 370" />

        {/* Right side - rounder, less lobed (asymmetric characteristic) */}
        <path d="M 200 120 Q 240 105 275 85 Q 300 70 310 55" />
        <path d="M 200 160 Q 245 148 285 130 Q 315 115 330 100" />
        <path d="M 200 200 Q 250 192 300 178 Q 335 165 350 150" />
        <path d="M 200 240 Q 255 237 310 228 Q 345 220 360 208" />
        <path d="M 200 280 Q 260 278 320 270 Q 350 262 365 250" />
        <path d="M 200 320 Q 258 318 315 305 Q 345 295 355 280" />
        <path d="M 200 360 Q 252 352 300 335 Q 330 320 340 305" />
        <path d="M 200 400 Q 245 388 280 365 Q 305 348 315 330" />
        <path d="M 200 440 Q 235 422 265 395 Q 285 375 290 360" />

        {/* Leaf outline - left (lobed) */}
        <path
          d="M 200 60 Q 170 50 130 45 Q 90 42 70 55 Q 50 70 42 100 Q 35 130 38 155 Q 40 185 50 215 Q 55 240 60 260 Q 65 285 70 305 Q 80 330 100 350 Q 120 370 145 395 Q 170 420 195 445 Q 198 450 200 455"
          strokeWidth="1.8"
        />

        {/* Leaf outline - right (rounder) */}
        <path
          d="M 200 60 Q 240 48 280 50 Q 320 52 340 70 Q 358 90 362 120 Q 365 155 363 190 Q 360 225 355 255 Q 348 285 338 305 Q 325 330 305 350 Q 280 375 255 400 Q 230 425 210 445 Q 205 450 200 455"
          strokeWidth="1.8"
        />

        {/* Fine vein details - secondary veins */}
        <path d="M 150 115 Q 145 108 138 100" strokeWidth="0.6" opacity="0.6" />
        <path d="M 130 155 Q 120 148 110 142" strokeWidth="0.6" opacity="0.6" />
        <path d="M 115 200 Q 105 195 95 188" strokeWidth="0.6" opacity="0.6" />
        <path d="M 270 110 Q 278 102 285 95" strokeWidth="0.6" opacity="0.6" />
        <path d="M 290 155 Q 300 148 308 140" strokeWidth="0.6" opacity="0.6" />
        <path d="M 310 200 Q 320 192 328 185" strokeWidth="0.6" opacity="0.6" />
        <path d="M 320 245 Q 330 238 338 230" strokeWidth="0.6" opacity="0.6" />
      </g>

      {/* Geometric accent - Swiss style circle */}
      <circle cx="200" cy="280" r="180" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />

      {/* Grid reference lines - subtle Swiss design element */}
      <line x1="200" y1="0" x2="200" y2="560" stroke="currentColor" strokeWidth="0.3" opacity="0.08" />
      <line x1="0" y1="280" x2="400" y2="280" stroke="currentColor" strokeWidth="0.3" opacity="0.08" />
    </svg>
  )
}
