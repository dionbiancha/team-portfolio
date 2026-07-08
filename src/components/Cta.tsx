// src/components/Cta.tsx
export default function Cta() {
  return (
    <section id="contato" className="px-12 py-[120px] text-center relative overflow-hidden">
      {/* Glow central */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent_60%)]" />

      <div className="relative z-10">
        <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-4">
          Pronto para começar?
        </p>
        <h2 className="text-[48px] font-black tracking-[-2.5px] leading-[1.0] text-[#f0f0f0] mb-3">
          A gente cuida do seu{' '}
          <em
            className="not-italic"
            style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(240,240,240,0.2)' }}
          >
            digital.
          </em>
          <br />
          Você foca no negócio.
        </h2>
        <p className="text-[15px] text-[#444] mb-12">
          Sem compromisso. A gente responde em até 24h.
        </p>

        {/* Contatos */}
        <div className="flex items-center justify-center">
          <div className="px-14 text-center">
            <p className="text-[10px] text-[#444] uppercase tracking-[2px] font-semibold mb-2.5">
              Email
            </p>
            <a
              href="mailto:oi@labub.com.br"
              className="text-[20px] font-extrabold tracking-tight text-[#e0e0e0] hover:text-white transition-colors"
            >
              oi@labub.com.br
            </a>
            <p className="text-[11px] text-[#333] mt-2">Resposta em até 24h</p>
          </div>

          <div className="w-px h-16 bg-white/[0.08]" aria-hidden="true" />

          <div className="px-14 text-center">
            <p className="text-[10px] text-[#444] uppercase tracking-[2px] font-semibold mb-2.5">
              WhatsApp
            </p>
            <a
              href="https://wa.me/5551999990000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[20px] font-extrabold tracking-tight text-[#25d366] hover:text-[#34d399] transition-colors"
            >
              +55 (51) 99999-0000
            </a>
            <p className="text-[11px] text-[#333] mt-2">Resposta imediata</p>
          </div>
        </div>
      </div>
    </section>
  )
}
