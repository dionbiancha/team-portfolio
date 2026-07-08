// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative px-4 md:px-12 pt-12 md:pt-24 pb-0 overflow-hidden">
      {/* Grid decorativo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow radial */}
      <div className="absolute pointer-events-none -top-32 -left-24 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.12)_0%,transparent_65%)]" />

      <div className="relative z-10 w-full max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.25)] px-3.5 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#6366f1]" />
          <span className="text-[11px] text-[#a5b4fc] font-medium tracking-wide">
            Aceitando novos projetos em 2026
          </span>
        </div>

        {/* Headline 3 linhas */}
        <h1 className="text-[36px] md:text-[64px] font-black tracking-[-2px] md:tracking-[-3px] leading-none mb-4 md:mb-6">
          <span className="block text-[#f0f0f0]">Construímos</span>
          <span className="block text-outline">o digital que</span>
          <span className="block text-gradient">move negócios.</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-[14px] md:text-[16px] text-[#666] leading-[1.7] max-w-full md:max-w-[460px]">
          A Labub é um time completo de{' '}
          <strong className="text-[#aaa] font-medium">frontend, backend, UX e DevOps</strong>.
          Do zero ao deploy, a gente cuida do que você não quer se preocupar.
        </p>
      </div>
    </section>
  )
}
