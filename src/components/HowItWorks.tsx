// src/components/HowItWorks.tsx
const steps = [
  {
    num: '01',
    title: 'Conta pra gente',
    desc: 'Você descreve o que precisa — sem precisar saber de tecnologia. A gente entende e faz as perguntas certas.',
  },
  {
    num: '02',
    title: 'A gente monta o time',
    desc: 'Selecionamos os especialistas ideais para o seu projeto e apresentamos uma proposta clara e sem enrolação.',
  },
  {
    num: '03',
    title: 'Entregamos juntos',
    desc: 'Desenvolvimento com atualizações constantes. Você acompanha cada etapa e o produto vai ao ar no prazo.',
  },
]

export default function HowItWorks() {
  return (
    <section className="px-12 py-[120px] bg-[rgba(99,102,241,0.03)]">
      <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-3">
        Simples assim
      </p>
      <h2 className="text-[36px] font-extrabold tracking-[-1.5px] text-[#f0f0f0] mb-12">
        Três passos{' '}
        <span className="text-[#444]">para começar.</span>
      </h2>

      <div className="grid grid-cols-3 gap-0.5">
        {steps.map((step) => (
          <div
            key={step.num}
            className="bg-card border border-white/[0.06] rounded-xl p-9"
          >
            <div
              className="text-[72px] font-black leading-none tracking-[-4px] mb-4"
              aria-hidden="true"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(99,102,241,0.2)',
              }}
            >
              {step.num}
            </div>
            <h3 className="text-[18px] font-bold text-[#e0e0e0] tracking-tight mb-2">
              {step.title}
            </h3>
            <p className="text-[13px] text-[#555] leading-[1.6]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
