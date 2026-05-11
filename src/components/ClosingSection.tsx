import { BotanicalIllustration } from "./BotanicalIllustration"
import { useInView } from "../hooks/useInView"

export function ClosingSection() {
  const { ref, inView } = useInView(0.15)
  const v = inView ? " in-view" : ""

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="snap-section relative flex min-h-screen w-full flex-col bg-background overflow-hidden"
    >
      {/* Zone A — Top divider */}
      <div className="px-grid-2 pt-grid-8">
        <div className={`swiss-divider enter-line-grow${v}`} />
      </div>

      {/* Zone B — Central message */}
      <div className="flex flex-1 flex-col items-center justify-center px-grid-2">
        {/* Red accent bar */}
        <div className={`mb-grid-2 h-[3px] w-12 origin-center swiss-accent-block enter-line-grow${v}`} />

        {/* Primary text */}
        <h2 className={`mb-grid text-center font-display text-display-lg font-bold tracking-tight enter-fade-up enter-delay-1${v}`}>
          <span className="text-swiss-red">「</span>
          <span className="text-foreground">初来乍到</span>
          <span className="text-swiss-red">」</span>
        </h2>

        {/* Secondary text */}
        <p className={`text-center font-display text-display-sm font-light tracking-[0.15em] text-muted-foreground enter-fade-up enter-delay-2${v} md:tracking-[0.15em]`}>
          请各位多多指教
        </p>

        {/* Botanical ghost watermark */}
        <div className={`mt-grid-3 hidden enter-fade-up enter-delay-3${v} md:block`}>
          <BotanicalIllustration className="mx-auto h-24 w-auto opacity-[0.06]" />
        </div>
      </div>

      {/* Zone C — Footer */}
      <div className={`px-grid-2 pb-grid enter-fade-up enter-delay-3${v}`}>
        {/* Contact row */}
        <div className="grid grid-cols-1 gap-grid border-t border-border pt-grid md:grid-cols-3">
          <div>
            <span className="swiss-label block mb-1">Wechat</span>
            <span className="text-body font-medium text-foreground">jyxjoyce1997</span>
          </div>
          <div>
            <span className="swiss-label block mb-1">Ding</span>
            <span className="text-body font-medium text-foreground">owk_4yqrhci51</span>
          </div>
          <div>
            <span className="swiss-label block mb-1">Motto</span>
            <span className="text-body font-medium text-foreground">DayDayUp</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="swiss-divider mt-grid" />
        <div className="flex items-center justify-between pt-grid">
          <span className="swiss-label">半枫荷 · 蒋瑶希</span>
          <span className="swiss-label">Introduce 2026</span>
        </div>
      </div>
    </section>
  )
}
