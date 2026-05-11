import { useInView } from "../hooks/useInView"

export function PersonalitySection() {
  const { ref, inView } = useInView()
  const v = inView ? " in-view" : ""
  const traits = [
    { label: "INTJ", text: "但经常被误会成E人..." },
    { label: "喜欢CityWalk", text: "但体力总是跟不上..." },
    { label: "成都土著", text: "但在外时间太长吃辣已退化..." },
    { label: "热爱美食", text: "每一斤肉肉都有缘由..." },
  ]

  return (
    <section ref={ref} className="snap-section relative w-full min-h-screen bg-background flex flex-col justify-center overflow-hidden">
      {/* Top divider */}
      <div className={`swiss-divider mx-grid-2 mb-grid-4 enter-line-grow${v}`} />

      {/* Section header */}
      <div className={`px-grid-2 mb-grid-4 enter-fade-up${v}`}>
        <span className="swiss-label block mb-grid">About Me</span>
        <h2 className="font-display text-display-md font-bold text-foreground">
          关于我
        </h2>
      </div>

      {/* Content grid: text + images */}
      <div className="px-grid-2 grid grid-cols-1 gap-grid-3 lg:grid-cols-12">

        {/* Left: personality traits */}
        <div className={`lg:col-span-5 flex flex-col justify-center enter-fade-up enter-delay-1${v}`}>
          <ul className="space-y-grid-2">
            {traits.map((trait, i) => (
              <li key={i} className="group">
                <div className="flex items-baseline gap-3">
                  <span className="inline-block h-2 w-2 shrink-0 swiss-accent-block translate-y-[-2px]" />
                  <div>
                    <span className="font-display text-display-sm font-bold text-foreground">
                      {trait.label}
                    </span>
                    <span className="ml-2 text-body-lg text-muted-foreground">
                      {trait.text}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: asymmetric image grid */}
        <div className={`lg:col-span-7 enter-fade-up enter-delay-2${v}`}>
          <div className="grid grid-cols-6 grid-rows-[200px_200px_200px] gap-3 lg:grid-rows-[220px_220px_220px]">
            {/* Image 1 - selfie, tall left */}
            <div className="col-span-2 row-span-2 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/selfie.png`}
                alt="个人照片"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Image 2 - village walk, wide top right */}
            <div className="col-span-4 row-span-1 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/village-walk.png`}
                alt="CityWalk 古村漫步"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Image 3 - chengdu sign */}
            <div className="col-span-2 row-span-1 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/chengdu-sign.png`}
                alt="成都 三分地礼物"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>

            {/* Image 4 - brunch spread */}
            <div className="col-span-2 row-span-1 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/brunch.png`}
                alt="美食 Brunch"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Image 5 - spicy food, bottom spanning */}
            <div className="col-span-3 row-span-1 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/spicy-food.png`}
                alt="辣子鸡 成都味道"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Image 6 - cafe drink */}
            <div className="col-span-3 row-span-1 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}images/cafe-drink.png`}
                alt="咖啡与画"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
