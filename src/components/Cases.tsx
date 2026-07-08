// src/components/Cases.tsx
import { cases, type Case } from '@/data/cases'

const themeClasses: Record<Case['theme'], string> = {
  blue:  'bg-gradient-to-br from-[#0f172a] to-[#1e3a8a]',
  dark:  'bg-gradient-to-br from-[#0a0a0a] to-[#1f2937]',
  green: 'bg-gradient-to-br from-[#022c22] to-[#064e3b]',
}

function CaseLogo({ name }: { name: string }) {
  if (name === 'Moda Sul') {
    return (
      <svg width="120" height="40" viewBox="0 0 120 40" fill="none" aria-label="Moda Sul">
        <rect x="0" y="8" width="6" height="24" rx="3" fill="white" opacity="0.9" />
        <rect x="6" y="8" width="6" height="14" rx="2" fill="white" opacity="0.9" transform="skewX(-8)" />
        <rect x="12" y="8" width="6" height="24" rx="3" fill="white" opacity="0.9" />
        <text x="26" y="27" fontFamily="system-ui" fontSize="15" fontWeight="800" fill="white" letterSpacing="-0.5" opacity="0.95">MODA SUL</text>
      </svg>
    )
  }
  if (name === 'Saúde+') {
    return (
      <svg width="140" height="40" viewBox="0 0 140 40" fill="none" aria-label="Saúde+">
        <rect x="0" y="12" width="24" height="6" rx="3" fill="white" opacity="0.9" />
        <rect x="9" y="3" width="6" height="24" rx="3" fill="white" opacity="0.9" />
        <text x="32" y="27" fontFamily="system-ui" fontSize="14" fontWeight="700" fill="white" opacity="0.95" letterSpacing="-0.3">SAÚDE</text>
        <text x="84" y="27" fontFamily="system-ui" fontSize="14" fontWeight="900" fill="#34d399">+</text>
      </svg>
    )
  }
  return (
    <svg width="130" height="44" viewBox="0 0 130 44" fill="none" aria-label="Pago">
      <polygon points="14,2 26,9 26,23 14,30 2,23 2,9" fill="none" stroke="white" strokeWidth="2" opacity="0.9" />
      <text x="9" y="21" fontFamily="system-ui" fontSize="13" fontWeight="900" fill="white" opacity="0.95">P</text>
      <text x="36" y="24" fontFamily="system-ui" fontSize="15" fontWeight="800" fill="white" opacity="0.95" letterSpacing="-0.5">pago</text>
      <text x="36" y="38" fontFamily="system-ui" fontSize="8" fontWeight="500" fill="white" opacity="0.45" letterSpacing="1.5">FINTECH</text>
    </svg>
  )
}

export default function Cases() {
  return (
    <section id="cases" className="px-12 py-[120px]">
      <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-3">
        O que já entregamos
      </p>
      <h2 className="text-[36px] font-extrabold tracking-[-1.5px] text-[#f0f0f0] mb-12">
        Projetos que{' '}
        <span className="text-[#444]">fazem a diferença.</span>
      </h2>

      <div className="grid grid-cols-3 gap-3">
        {cases.map((c) => (
          <div key={c.name} className="bg-card border border-white/[0.06] rounded-xl overflow-hidden">
            {/* Logo area */}
            <div className={`h-[140px] flex items-center justify-center ${themeClasses[c.theme]}`}>
              <CaseLogo name={c.name} />
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
