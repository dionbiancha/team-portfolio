// src/components/Team.tsx
import Image from 'next/image'
import { team } from '@/data/team'

export default function Team() {
  return (
    <section id="time" className="px-4 md:px-12 py-16 md:py-[120px]">
      <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-3">
        Quem faz acontecer
      </p>
      <h2 className="text-[24px] md:text-[36px] font-extrabold tracking-[-1px] md:tracking-[-1.5px] text-[#f0f0f0] mb-8 md:mb-12">
        O time da Labub.{' '}
        <span className="text-[#444]">Especialistas de verdade.</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
        {team.map((member) => (
          <div key={member.area} className="group relative bg-card p-5 md:p-7 overflow-hidden">
            {/* Accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(99,102,241,0.5)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Photo */}
            <div className="w-16 h-16 rounded-full overflow-hidden border border-[rgba(99,102,241,0.3)] mb-4 flex-shrink-0">
              <Image
                src={`https://randomuser.me/api/portraits/${member.photo}.jpg`}
                alt={member.lead}
                width={64}
                height={64}
                className="w-full h-full object-cover grayscale contrast-[1.05]"
              />
            </div>

            <p className="text-[10px] text-accent font-semibold uppercase tracking-[1.5px] mb-1.5">
              {member.area.toUpperCase()}
            </p>
            <p className="text-[16px] font-bold text-[#e0e0e0] tracking-tight">
              {member.lead}
            </p>

            <div className="flex gap-2 mt-3">
              <a
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${member.lead}`}
                className="w-7 h-7 flex items-center justify-center rounded-full border border-white/[0.1] text-[#666] hover:text-accent hover:border-accent transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
              <a
                href={member.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Portfólio de ${member.lead}`}
                className="w-7 h-7 flex items-center justify-center rounded-full border border-white/[0.1] text-[#666] hover:text-accent hover:border-accent transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
