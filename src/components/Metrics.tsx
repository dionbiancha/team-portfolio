// src/components/Metrics.tsx
import { metrics } from '@/data/metrics'

export default function Metrics() {
  // Duplicate for seamless infinite loop
  const doubled = [...metrics, ...metrics]

  return (
    <div className="relative overflow-hidden marquee-fade mt-16">
      <div className="flex w-max animate-marquee">
        {doubled.map((m, i) => (
          <div
            key={i}
            className="flex flex-col items-center px-8 md:px-14 py-4 md:py-7 opacity-30 blur-[1.2px] scale-95 transition-all duration-300 ease-out hover:opacity-100 hover:blur-0 hover:scale-105 cursor-default"
          >
            <span className="text-[32px] md:text-[48px] font-black tracking-[-2.5px] text-[#f0f0f0] leading-none whitespace-nowrap">
              {m.value}
            </span>
            <span className="text-[11px] text-[#555] uppercase tracking-[1.5px] font-medium mt-1.5 whitespace-nowrap">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
