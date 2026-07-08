// src/components/Team.tsx
import Image from 'next/image'
import { team } from '@/data/team'

export default function Team() {
  return (
    <section id="time" className="px-12 py-[120px]">
      <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-3">
        Quem faz acontecer
      </p>
      <h2 className="text-[36px] font-extrabold tracking-[-1.5px] text-[#f0f0f0] mb-12">
        O time da Labub.{' '}
        <span className="text-[#444]">Especialistas de verdade.</span>
      </h2>

      <div className="grid grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
        {team.map((member) => (
          <div key={member.area} className="group relative bg-card p-7 overflow-hidden">
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
            <p className="text-[12px] text-[#555] mt-1">{member.role}</p>

            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              {member.members.map((m) => (
                <p key={m} className="text-[11px] text-[#444] mt-1">
                  + {m}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
