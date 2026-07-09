// src/components/ServicesBrowser.tsx
"use client";

import { useState } from "react";
import { serviceAreas } from "@/data/services";

export default function ServicesBrowser() {
  const [activeKey, setActiveKey] = useState(serviceAreas[0].key);
  const active =
    serviceAreas.find((area) => area.key === activeKey) ?? serviceAreas[0];

  return (
    <section className="px-4 md:px-12 py-16 md:py-[120px]">
      <p className="text-[11px] text-accent uppercase tracking-[2px] font-semibold mb-3">
        O que fazemos
      </p>
      <h2 className="text-[24px] md:text-[36px] font-extrabold tracking-[-1px] md:tracking-[-1.5px] text-[#f0f0f0] mb-8 md:mb-12">
        Serviços <span className="text-[#444]">prestados.</span>
      </h2>

      <div className="bg-card border border-white/[0.07] rounded-2xl overflow-hidden">
        {/* Browser chrome */}
        <div className="bg-white/[0.03] border-b border-white/[0.05]">
          <div className="flex items-center gap-3.5 px-4 py-2.5">
            <div className="flex items-center gap-[5px] flex-shrink-0">
              <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-md px-3 py-1.5 font-mono text-[11px] overflow-hidden">
              <span className="text-[10px]" aria-hidden="true">
                🔒
              </span>
              <span className="text-[#555] whitespace-nowrap">
                labub.dev/servicos/
              </span>
              <span className="text-[#ccc] whitespace-nowrap">
                {active.slug}
              </span>
            </div>
          </div>

          {/* Area tabs */}
          <div className="flex gap-1 px-3 overflow-x-auto">
            {serviceAreas.map((area) => (
              <button
                key={area.key}
                type="button"
                onClick={() => setActiveKey(area.key)}
                aria-pressed={area.key === activeKey}
                className={`flex items-center gap-1.5 px-3.5 py-2.5 text-[12px] font-semibold border-b-2 whitespace-nowrap transition-colors ${
                  area.key === activeKey
                    ? "text-[#f0f0f0] border-accent"
                    : "text-[#666] border-transparent hover:text-[#aaa]"
                }`}
              >
                <span aria-hidden="true">{area.icon}</span>
                {area.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading bar (remounts on tab change to replay the animation) */}
        <div
          key={`loadbar-${activeKey}`}
          className="h-[2px] bg-accent shadow-[0_0_8px_rgba(99,102,241,0.7)] animate-load-bar motion-reduce:animate-none"
        />

        {/* Page content */}
        <div
          key={`page-${activeKey}`}
          className="px-6 md:px-10 py-8 md:py-11 animate-fade-in-up motion-reduce:animate-none"
        >
          <p className="flex items-center gap-2 text-[11px] text-accent uppercase tracking-[1.8px] font-bold mb-2.5">
            <span aria-hidden="true">{active.icon}</span>
            Serviços / {active.label}
          </p>
          <h3 className="text-[24px] md:text-[30px] font-extrabold tracking-[-1px] text-[#f0f0f0] mb-3">
            {active.label}
          </h3>
          <p className="text-[14px] leading-[1.75] text-[#888] max-w-[60ch] mb-8">
            {active.summary}
          </p>

          <div className="flex flex-col">
            {active.items.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-[24px_1fr] gap-4 py-4 border-t border-white/[0.06] last:border-b last:border-white/[0.06]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent/70 mt-[7px]" />
                <div>
                  <h4 className="text-[14.5px] font-bold text-[#e0e0e0] tracking-tight mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-[13px] leading-[1.7] text-[#888] max-w-[62ch]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
