import { useState, useEffect } from "react"
import { useInView } from "../hooks/useInView"

export function JourneySection() {
  const { ref, inView } = useInView()
  const v = inView ? " in-view" : ""
  const milestones = [
    { year: "2015前", city: "成都", desc: "生活" },
    { year: "2015", city: "沈阳", desc: "念本科 · 工业设计" },
    { year: "2020", city: "徐州", desc: "读研究生 · 工业设计工程" },
    { year: "2023", city: "北京", desc: "工作 · 快手 产品体验设计师" },
    { year: "2026", city: "上海", desc: "工作 · 淘宝闪购 设计师" },
  ]

  // Coordinates on SVG map
  const coords: Record<string, { x: number; y: number }> = {
    "成都": { x: 285, y: 385 },
    "沈阳": { x: 535, y: 155 },
    "徐州": { x: 515, y: 310 },
    "北京": { x: 495, y: 218 },
    "上海": { x: 555, y: 335 },
  }

  const cities = milestones.map((m) => m.city)

  // Animation timing
  const segmentDuration = 0.5
  const dotDuration = 0.25
  const initialDelay = 0.15

  // Sequential: line draws, then city appears, then next line draws...
  // Line i starts at: initialDelay + i * (segmentDuration + dotDuration)
  // City i (i>0) appears when line i-1 finishes: initialDelay + (i-1) * (segmentDuration + dotDuration) + segmentDuration
  const lineDelays = milestones.slice(0, -1).map((_, i) =>
    initialDelay + i * (segmentDuration + dotDuration)
  )
  const cityDelays = milestones.map((_, i) =>
    i === 0 ? 0 : initialDelay + (i - 1) * (segmentDuration + dotDuration) + segmentDuration
  )

  // Loop: reset animation key every cycle to replay (only when in view)
  const lastCityDelay = cityDelays[cityDelays.length - 1]
  const cycleDuration = lastCityDelay + dotDuration + 1.5
  const [animKey, setAnimKey] = useState(0)
  useEffect(() => {
    if (!inView) return
    // Reset to trigger first play immediately on scroll-in
    setAnimKey((k) => k + 1)
    const timer = setInterval(() => {
      setAnimKey((k) => k + 1)
    }, cycleDuration * 1000)
    return () => clearInterval(timer)
  }, [inView, cycleDuration])

  return (
    <section ref={ref} className="snap-section relative w-full min-h-screen bg-background flex flex-col justify-center overflow-hidden">
      {/* Top divider */}
      <div className={`swiss-divider mx-grid-2 mb-grid-4 enter-line-grow${v}`} />

      {/* Section header */}
      <div className={`px-grid-2 mb-grid-3 enter-fade-up${v}`}>
        <span className="swiss-label block mb-grid">Life Journey</span>
        <h2 className="font-display text-display-md font-bold text-foreground">
          {"「乐天派」"}
        </h2>
        <p className="mt-grid text-body-lg text-muted-foreground max-w-lg">
          {"很多时候跟随命运的安排去不同的城市生活"}
        </p>
      </div>

      {/* Map container */}
      <div className={`px-grid-2 enter-fade-up enter-delay-1${v}`}>
        <div className="relative w-full max-w-2xl mx-auto">
          <svg
            viewBox="0 0 800 600"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* China outline - detailed */}
            <path
              d="M 180 80 L 195 72 L 210 65 L 225 60 L 245 57 L 265 55 L 285 56 L 305 60 L 320 65 L 335 68 L 350 66 L 365 63 L 380 62 L 395 58 L 410 54 L 425 51 L 440 50 L 455 52 L 470 54 L 485 52 L 500 48 L 515 46 L 530 48 L 545 50 L 558 54 L 570 58 L 582 56 L 595 54 L 608 56 L 620 60 L 632 64 L 642 68 L 652 74 L 658 82 L 660 90 L 658 100 L 655 110 L 650 120 L 644 128 L 638 134 L 630 140 L 622 136 L 614 132 L 606 130 L 598 132 L 590 136 L 582 140 L 575 135 L 568 128 L 562 122 L 556 125 L 550 130 L 554 138 L 558 148 L 562 155 L 568 162 L 575 170 L 582 176 L 590 180 L 596 186 L 598 194 L 595 200 L 590 206 L 584 210 L 578 214 L 580 222 L 584 228 L 590 234 L 596 238 L 600 244 L 598 252 L 594 258 L 588 264 L 582 268 L 576 272 L 570 278 L 566 284 L 562 290 L 564 298 L 568 306 L 574 312 L 580 318 L 586 322 L 584 330 L 580 336 L 574 342 L 568 348 L 562 352 L 556 358 L 552 364 L 554 372 L 558 380 L 560 388 L 556 394 L 550 400 L 544 406 L 538 412 L 530 416 L 522 420 L 514 426 L 506 432 L 498 438 L 490 434 L 482 430 L 474 434 L 466 440 L 458 446 L 450 452 L 442 456 L 434 460 L 426 464 L 418 468 L 410 472 L 402 476 L 394 478 L 386 474 L 378 470 L 370 472 L 362 476 L 354 478 L 346 474 L 338 470 L 330 466 L 322 462 L 314 464 L 306 468 L 298 472 L 290 476 L 282 478 L 274 474 L 266 470 L 258 466 L 250 462 L 242 458 L 236 462 L 228 466 L 220 470 L 212 474 L 204 478 L 196 476 L 188 472 L 180 468 L 172 462 L 166 456 L 160 448 L 156 440 L 152 432 L 148 422 L 144 412 L 140 402 L 137 392 L 134 382 L 131 372 L 128 362 L 125 352 L 122 342 L 118 332 L 115 322 L 112 312 L 110 302 L 112 292 L 115 282 L 118 272 L 116 262 L 113 252 L 110 242 L 108 232 L 110 222 L 113 212 L 116 204 L 118 194 L 116 184 L 114 174 L 116 165 L 120 158 L 126 152 L 132 148 L 138 144 L 143 138 L 148 132 L 152 125 L 156 118 L 160 112 L 164 105 L 168 98 L 172 92 L 176 86 Z"
              fill="none"
              stroke="hsl(var(--foreground))"
              strokeWidth="1"
              opacity="0.15"
            />

            {/* Provincial boundaries - more line detail */}
            <path d="M 280 55 L 290 120 L 310 180 L 340 250 L 360 320 L 380 400 L 400 476" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" opacity="0.08" />
            <path d="M 450 50 L 440 130 L 450 200 L 470 280 L 480 360 L 490 434" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" opacity="0.08" />
            <path d="M 110 240 L 200 245 L 300 250 L 400 260 L 500 255 L 590 258" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" opacity="0.08" />
            <path d="M 120 170 L 220 175 L 330 168 L 440 160 L 540 152 L 630 140" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" opacity="0.08" />
            <path d="M 125 350 L 230 345 L 340 350 L 440 360 L 530 365 L 580 348" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.5" opacity="0.08" />

            {/* River systems - Yangtze */}
            <path
              d="M 140 380 Q 200 375 250 360 Q 300 345 340 340 Q 380 335 420 330 Q 460 325 500 315 Q 530 308 560 300 Q 580 292 598 280"
              fill="none"
              stroke="hsl(var(--foreground))"
              strokeWidth="0.8"
              opacity="0.1"
              strokeDasharray="2 3"
            />

            {/* River systems - Yellow River */}
            <path
              d="M 180 260 Q 220 250 260 240 Q 300 232 340 225 Q 380 218 420 215 Q 460 210 500 205 Q 530 200 560 192"
              fill="none"
              stroke="hsl(var(--foreground))"
              strokeWidth="0.8"
              opacity="0.1"
              strokeDasharray="2 3"
            />

            {/* Coastline detail lines */}
            <path d="M 560 120 L 565 125 L 558 130 L 562 135 L 556 140 L 560 148" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.6" opacity="0.12" />
            <path d="M 590 180 L 596 185 L 592 192 L 598 198 L 594 204" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.6" opacity="0.12" />
            <path d="M 580 230 L 586 235 L 582 242 L 588 248 L 584 254" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.6" opacity="0.12" />
            <path d="M 566 284 L 572 290 L 568 296 L 574 302 L 570 308" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.6" opacity="0.12" />
            <path d="M 556 358 L 562 364 L 558 370 L 564 376 L 560 382" fill="none" stroke="hsl(var(--foreground))" strokeWidth="0.6" opacity="0.12" />

            {/* Latitude/longitude grid lines */}
            <line x1="100" y1="150" x2="670" y2="150" stroke="hsl(var(--foreground))" strokeWidth="0.3" opacity="0.06" />
            <line x1="100" y1="250" x2="670" y2="250" stroke="hsl(var(--foreground))" strokeWidth="0.3" opacity="0.06" />
            <line x1="100" y1="350" x2="670" y2="350" stroke="hsl(var(--foreground))" strokeWidth="0.3" opacity="0.06" />
            <line x1="100" y1="450" x2="670" y2="450" stroke="hsl(var(--foreground))" strokeWidth="0.3" opacity="0.06" />
            <line x1="200" y1="40" x2="200" y2="490" stroke="hsl(var(--foreground))" strokeWidth="0.3" opacity="0.06" />
            <line x1="300" y1="40" x2="300" y2="490" stroke="hsl(var(--foreground))" strokeWidth="0.3" opacity="0.06" />
            <line x1="400" y1="40" x2="400" y2="490" stroke="hsl(var(--foreground))" strokeWidth="0.3" opacity="0.06" />
            <line x1="500" y1="40" x2="500" y2="490" stroke="hsl(var(--foreground))" strokeWidth="0.3" opacity="0.06" />
            <line x1="600" y1="40" x2="600" y2="490" stroke="hsl(var(--foreground))" strokeWidth="0.3" opacity="0.06" />

            {/* Terrain texture - mountain ranges (subtle dots/hatching) */}
            {[...Array(40)].map((_, i) => (
              <circle
                key={`terrain-${i}`}
                cx={150 + (i % 8) * 35 + Math.sin(i) * 20}
                cy={280 + Math.floor(i / 8) * 40 + Math.cos(i) * 15}
                r="1"
                fill="hsl(var(--foreground))"
                opacity="0.06"
              />
            ))}

            {/* Western terrain marks */}
            {[...Array(20)].map((_, i) => (
              <line
                key={`hatch-${i}`}
                x1={130 + (i % 5) * 25}
                y1={200 + Math.floor(i / 5) * 50}
                x2={135 + (i % 5) * 25}
                y2={195 + Math.floor(i / 5) * 50}
                stroke="hsl(var(--foreground))"
                strokeWidth="0.5"
                opacity="0.06"
              />
            ))}

            {/* Connection lines - base (faded) */}
            {cities.slice(0, -1).map((city, i) => {
              const from = coords[city]
              const to = coords[cities[i + 1]]
              const midX = (from.x + to.x) / 2
              const midY = (from.y + to.y) / 2 - 25
              return (
                <path
                  key={`line-base-${i}`}
                  d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                  opacity="0.15"
                />
              )
            })}

            {/* Animated group - only renders when scrolled into view */}
            {inView && <g key={animKey}>
            {/* Connection lines - animated flow overlay */}
            {cities.slice(0, -1).map((city, i) => {
              const from = coords[city]
              const to = coords[cities[i + 1]]
              const midX = (from.x + to.x) / 2
              const midY = (from.y + to.y) / 2 - 25
              return (
                <path
                  key={`line-flow-${i}`}
                  d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`}
                  fill="none"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="journey-line-flow"
                  style={{ animationDelay: `${lineDelays[i]}s` }}
                />
              )
            })}

            {/* City markers and labels */}
            {milestones.map((m, i) => {
              const pos = coords[m.city]
              const delay = cityDelays[i]
              const isFirst = i === 0
              const labelOffset = m.city === "北京" ? { x: 18, y: -8 } :
                                  m.city === "徐州" ? { x: 18, y: 5 } :
                                  m.city === "沈阳" ? { x: 18, y: -8 } :
                                  m.city === "上海" ? { x: 18, y: 5 } :
                                  { x: -70, y: -12 }
              return (
                <g key={i}>
                  {/* Ripple ring - expands outward on arrival (skip for first city) */}
                  {!isFirst && (
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="5"
                      fill="none"
                      stroke="hsl(var(--accent))"
                      strokeWidth="1.5"
                      className="journey-ripple"
                      style={{ animationDelay: `${delay}s` }}
                    />
                  )}
                  {/* Outer ring */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="14"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="1"
                    opacity={isFirst ? "0.3" : "0"}
                    style={isFirst ? undefined : { animation: `dot-arrive 0.4s ${delay + 0.3}s forwards` }}
                  />
                  {/* Inner dot */}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r="5"
                    fill="hsl(var(--accent))"
                    opacity={isFirst ? "1" : "0.4"}
                    className={isFirst ? undefined : "journey-dot"}
                    style={isFirst ? undefined : { animationDelay: `${delay}s` }}
                  />
                  {/* City name + year */}
                  <text
                    x={pos.x + labelOffset.x}
                    y={pos.y + labelOffset.y}
                    fontSize="14"
                    fontWeight="700"
                    fill="hsl(var(--foreground))"
                    opacity={isFirst ? "1" : "0"}
                    style={isFirst ? undefined : { animation: `dot-arrive 0.4s ${delay + 0.2}s forwards` }}
                  >
                    {m.city}
                  </text>
                  <text
                    x={pos.x + labelOffset.x}
                    y={pos.y + labelOffset.y + 16}
                    fontSize="11"
                    fill="hsl(var(--muted-foreground))"
                    letterSpacing="0.05em"
                    opacity={isFirst ? "1" : "0"}
                    style={isFirst ? undefined : { animation: `dot-arrive 0.4s ${delay + 0.2}s forwards` }}
                  >
                    {m.year}
                  </text>
                </g>
              )
            })}
            </g>}
          </svg>
        </div>

        {/* Timeline below map */}
        <div className="mt-grid grid grid-cols-2 gap-grid lg:grid-cols-5 max-w-4xl mx-auto">
          {milestones.map((m, i) => (
            <div key={i} className="border-t border-border pt-grid">
              <span className="swiss-label block mb-1">{m.year}</span>
              <span className="font-display text-body-lg font-bold text-foreground block">
                {m.city}
              </span>
              <span className="text-caption text-muted-foreground">
                {m.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
