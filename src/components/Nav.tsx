// src/components/Nav.tsx
const links = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Time',     href: '#time' },
  { label: 'Cases',    href: '#cases' },
  { label: 'Contato',  href: '#contato' },
]

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 py-5 border-b border-white/[0.06] bg-[rgba(8,8,8,0.85)] backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#3b82f6] flex items-center justify-center text-white font-black text-sm tracking-tighter">
          lb
        </div>
        <span className="text-[17px] font-extrabold tracking-tight text-white">
          labub
        </span>
      </div>

      {/* Links */}
      <ul className="flex items-center gap-7">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-[13px] text-[#888] hover:text-white transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contato"
        className="text-[13px] font-bold text-bg bg-white px-[18px] py-2.5 rounded-lg hover:bg-white/90 transition-colors"
      >
        Fale conosco →
      </a>
    </nav>
  )
}
