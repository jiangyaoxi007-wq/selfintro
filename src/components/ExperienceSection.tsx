export function ExperienceSection() {
  const experiences = [
    {
      year: "2023",
      title: "吭哧吭哧整资产",
      desc: "手搓组件库+设计规范，业务团队内宣讲",
      image: "/images/exp-design-system.png",
    },
    {
      year: "2023",
      title: "体验优化gogogo",
      desc: "用户访谈收集问题，推动成熟B端产品页面改版",
      image: "/images/exp-user-research.png",
    },
    {
      year: "2024",
      title: "智能可观测设计",
      desc: "运维场景智能可观测设计，探索CUI+GUI无缝衔接方式",
      image: "/images/exp-observability.png",
    },
    {
      year: "2025",
      title: "智能视频混剪",
      desc: "智能视频混剪产品体验设计，页面设计+AI素材设计",
      image: "/images/exp-video-editor.png",
    },
  ]

  return (
    <section className="relative w-full bg-background py-grid-8 overflow-hidden">
      {/* Top divider */}
      <div className="swiss-divider mx-grid-2 mb-grid-4" />

      {/* Section header */}
      <div className="px-grid-2 mb-grid-3">
        <span className="swiss-label block mb-grid">Work Experience</span>
        <h2 className="font-display text-display-md font-bold text-foreground">
          {"过往经历"}
        </h2>
      </div>

      {/* Experience cards grid */}
      <div className="px-grid-2">
        <div className="grid grid-cols-1 gap-grid-2 md:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, i) => (
            <div key={i} className="group">
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-grid">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Year tag */}
              <span className="swiss-label block mb-1">{exp.year}</span>
              {/* Title */}
              <h3 className="font-display text-body-lg font-bold text-foreground mb-1">
                {exp.title}
              </h3>
              {/* Description */}
              <p className="text-caption text-muted-foreground leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
