// src/components/Services.tsx
const pills = ['Frontend', 'Backend', 'UX Design', 'DevOps']

export default function Services() {
  return (
    <section id="servicos" className="px-4 md:px-12 py-16 md:py-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Texto */}
        <div>
          <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-4">
            O que entregamos
          </p>
          <h2 className="text-[28px] md:text-[44px] font-black tracking-[-1.5px] md:tracking-[-2.5px] leading-[1.05] text-[#f0f0f0] mb-5">
            Da ideia ao{' '}
            <em className="text-outline not-italic">deploy,</em>
            <br />
            a Labub cuida
            <br />
            de tudo.
          </h2>
          <p className="text-[15px] text-[#555] leading-[1.8] mb-7">
            Sem precisar contratar quatro fornecedores diferentes.{' '}
            <strong className="text-[#888] font-medium">
              Frontend, backend, UX e DevOps
            </strong>{' '}
            em um único time integrado que fala a mesma língua.
          </p>
          <div className="flex flex-wrap gap-2">
            {pills.map((pill) => (
              <span
                key={pill}
                className="text-[12px] text-[#555] font-medium border border-[#1e1e1e] px-3.5 py-1.5 rounded-full hover:border-accent hover:text-[#a5b4fc] hover:bg-[rgba(99,102,241,0.08)] transition-all cursor-default"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Mockup UI */}
        <div className="relative bg-card border border-white/[0.07] rounded-2xl overflow-hidden h-[240px] md:h-[340px] flex flex-col">
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_85%_30%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(ellipse_at_15%_70%,rgba(99,102,241,0.1),transparent_50%)]" />

          {/* Browser bar */}
          <div className="flex items-center gap-[5px] px-3.5 py-2.5 bg-white/[0.03] border-b border-white/[0.05] flex-shrink-0">
            <span className="w-[7px] h-[7px] rounded-full bg-[#ff5f57]" />
            <span className="w-[7px] h-[7px] rounded-full bg-[#febc2e]" />
            <span className="w-[7px] h-[7px] rounded-full bg-[#28c840]" />
          </div>

          {/* Content placeholders */}
          <div className="flex-1 p-[18px] flex flex-col gap-[9px] relative z-10">
            <div className="h-2 rounded bg-[rgba(99,102,241,0.35)] w-[35%]" />
            <div className="h-2 rounded bg-white/[0.05] w-full" />
            <div className="h-2 rounded bg-white/[0.05] w-[70%]" />
            <div className="h-2 rounded bg-white/[0.05] w-[48%]" />
            <div className="flex gap-[7px] mt-1">
              {[
                { icon: '🖥️', label: 'Frontend' },
                { icon: '⚙️', label: 'Backend' },
                { icon: '🚀', label: 'DevOps' },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  aria-hidden="true"
                  className="flex-1 bg-white/[0.03] border border-white/[0.05] rounded-lg p-[9px] flex flex-col gap-[5px]"
                >
                  <span className="text-xs">{icon}</span>
                  <div className="h-1.5 rounded bg-white/[0.05] w-full" />
                  <div className="h-1.5 rounded bg-white/[0.05] w-[55%]" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
