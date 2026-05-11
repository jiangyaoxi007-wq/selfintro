import { BotanicalIllustration } from "./BotanicalIllustration"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Swiss grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full swiss-grid" />
      </div>

      {/* Top navigation bar */}
      <header className="relative z-10 flex items-center justify-between px-grid-2 py-grid">
        <span className="swiss-label">Portfolio 2026</span>
        <span className="swiss-label">Wechat-jyxjoyce1997</span>
      </header>

      {/* Main content grid */}
      <div className="relative z-10 grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center px-grid-2 lg:grid-cols-12 lg:gap-grid">

        {/* Left column - Typography dominant */}
        <div className="flex flex-col justify-center lg:col-span-7">
          {/* Accent line */}
          <div className="swiss-divider mb-grid w-16 animate-line-grow" />

          {/* Name - Display */}
          <h1 className="mb-grid opacity-0 animate-fade-up">
            <span className="block font-display text-display-xl font-bold tracking-tighter text-foreground">
              蒋瑶希
            </span>
          </h1>

          {/* Alias section */}
          <div className="mb-grid-2 flex items-baseline gap-grid opacity-0 animate-fade-up-delay">
            <span className="swiss-label">Alias</span>
            <span className="font-display text-display-sm font-light text-foreground">
              半枫荷
            </span>
          </div>

          {/* Description */}
          <div className="max-w-md opacity-0 animate-fade-up-delay-2">
            <p className="mb-grid text-body-lg text-muted-foreground">
              一种珍贵的中草药，叶形不对称，
              <br />
              如同设计——在不对称中寻找平衡。
            </p>
            <div className="flex items-center gap-grid">
              <div className="h-2 w-2 swiss-accent-block" />
              <span className="swiss-label">Designer</span>
              <span className="swiss-label text-muted-foreground/60">
                /
              </span>
              <span className="swiss-label">Visual Thinker</span>
            </div>
          </div>

          {/* Bottom info row */}
          <div className="mt-grid-4 flex gap-grid-3 opacity-0 animate-fade-up-delay-3">
            <div>
              <span className="swiss-label block mb-1">Based in</span>
              <span className="text-body font-medium text-foreground">Shanghai</span>
            </div>
            <div>
              <span className="swiss-label block mb-1">Discipline</span>
              <span className="text-body font-medium text-foreground">Product UX Design</span>
            </div>
            <div>
              <span className="swiss-label block mb-1">Available</span>
              <span className="text-body font-medium text-foreground">For Projects</span>
            </div>
          </div>
        </div>

        {/* Right column - Botanical illustration */}
        <div className="hidden items-center justify-center lg:col-span-5 lg:flex">
          <div className="relative opacity-0 animate-fade-in-delay">
            <BotanicalIllustration className="h-[65vh] max-h-[700px] w-auto text-foreground" />
            {/* Red accent dot - Swiss style */}
            <div className="absolute right-8 top-12 h-4 w-4 rounded-full swiss-accent-block opacity-80" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between border-t border-border px-grid-2 py-grid">
        <span className="swiss-label">Scroll to explore</span>
        <div className="flex items-center gap-2">
          <div className="h-6 w-px bg-foreground/20" />
          <span className="swiss-label">2026</span>
        </div>
      </footer>
    </section>
  )
}
