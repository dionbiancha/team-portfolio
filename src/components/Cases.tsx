// src/components/Cases.tsx
import { cases, type Case, type CaseLogo } from '@/data/cases'

const themeClasses: Record<Case['theme'], string> = {
  blue:  'bg-gradient-to-br from-[#0f172a] to-[#1e3a8a]',
  dark:  'bg-gradient-to-br from-[#0a0a0a] to-[#1f2937]',
  green: 'bg-gradient-to-br from-[#022c22] to-[#064e3b]',
}

function CaseLogoSvg({ logo }: { logo: CaseLogo }) {
  return (
    <svg
      width={logo.width}
      height={logo.height}
      viewBox={`0 0 ${logo.width} ${logo.height}`}
      fill="none"
      aria-label={logo.ariaLabel}
    >
      {logo.shapes.map((shape, i) => {
        switch (shape.type) {
          case 'rect':
            return (
              <rect
                key={i}
                x={shape.x}
                y={shape.y}
                width={shape.width}
                height={shape.height}
                rx={shape.rx}
                fill={shape.fill}
                opacity={shape.opacity}
                transform={shape.transform}
              />
            )
          case 'text':
            return (
              <text
                key={i}
                x={shape.x}
                y={shape.y}
                fontFamily={shape.fontFamily}
                fontSize={shape.fontSize}
                fontWeight={shape.fontWeight}
                fill={shape.fill}
                opacity={shape.opacity}
                letterSpacing={shape.letterSpacing}
              >
                {shape.content}
              </text>
            )
          case 'polygon':
            return (
              <polygon
                key={i}
                points={shape.points}
                fill={shape.fill}
                stroke={shape.stroke}
                strokeWidth={shape.strokeWidth}
                opacity={shape.opacity}
              />
            )
        }
      })}
    </svg>
  )
}

export default function Cases() {
  return (
    <section id="cases" className="px-4 md:px-12 py-16 md:py-[120px]">
      <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-3">
        O que já entregamos
      </p>
      <h2 className="text-[24px] md:text-[36px] font-extrabold tracking-[-1px] md:tracking-[-1.5px] text-[#f0f0f0] mb-8 md:mb-12">
        Projetos que{' '}
        <span className="text-[#444]">fazem a diferença.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {cases.map((c) => (
          <div key={c.name} className="bg-card border border-white/[0.06] rounded-xl overflow-hidden">
            {/* Logo area */}
            <div className={`h-[140px] flex items-center justify-center ${themeClasses[c.theme]}`}>
              <CaseLogoSvg logo={c.logo} />
            </div>

            {/* Body */}
            <div className="p-5">
              <p className="text-[10px] text-accent font-semibold uppercase tracking-[1px] mb-2">
                {c.tag}
              </p>
              <h3 className="text-[15px] font-bold text-[#e0e0e0] tracking-tight">
                {c.name}
              </h3>
              <p className="text-[12px] text-[#555] mt-1.5 leading-[1.5]">
                {c.description}
              </p>
              <div className="flex gap-1.5 flex-wrap mt-3.5">
                {c.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] text-[#444] border border-[#1e1e1e] px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
