// src/data/cases.ts
export type CaseLogoRect = {
  type: 'rect'
  x: number
  y: number
  width: number
  height: number
  rx?: number
  fill?: string
  opacity?: number
  transform?: string
}

export type CaseLogoText = {
  type: 'text'
  x: number
  y: number
  content: string
  fontFamily?: string
  fontSize: number
  fontWeight: number
  fill: string
  opacity?: number
  letterSpacing?: number
}

export type CaseLogoPolygon = {
  type: 'polygon'
  points: string
  fill?: string
  stroke?: string
  strokeWidth?: number
  opacity?: number
}

export type CaseLogoShape = CaseLogoRect | CaseLogoText | CaseLogoPolygon

export type CaseLogo = {
  width: number
  height: number
  ariaLabel: string
  shapes: CaseLogoShape[]
}

export type Case = {
  name: string
  tag: string
  description: string
  stack: string[]
  theme: 'blue' | 'dark' | 'green'
  logo: CaseLogo
}

export const cases: Case[] = [
  {
    name: 'Moda Sul',
    tag: 'E-commerce · Frontend + Backend',
    description: 'Plataforma completa de vendas online com integração de pagamento e logística em tempo real.',
    stack: ['React', 'Node.js', 'AWS'],
    theme: 'blue',
    logo: {
      width: 120,
      height: 40,
      ariaLabel: 'Moda Sul',
      shapes: [
        { type: 'rect', x: 0, y: 8, width: 6, height: 24, rx: 3, fill: 'white', opacity: 0.9 },
        { type: 'rect', x: 6, y: 8, width: 6, height: 14, rx: 2, fill: 'white', opacity: 0.9, transform: 'skewX(-8)' },
        { type: 'rect', x: 12, y: 8, width: 6, height: 24, rx: 3, fill: 'white', opacity: 0.9 },
        { type: 'text', x: 26, y: 27, content: 'MODA SUL', fontFamily: 'system-ui', fontSize: 15, fontWeight: 800, fill: 'white', letterSpacing: -0.5, opacity: 0.95 },
      ],
    },
  },
  {
    name: 'Saúde+',
    tag: 'Saúde · Time completo',
    description: 'App de agendamento de consultas e prontuário eletrônico para rede de 12 clínicas.',
    stack: ['Next.js', 'Python', 'UX'],
    theme: 'dark',
    logo: {
      width: 140,
      height: 40,
      ariaLabel: 'Saúde+',
      shapes: [
        { type: 'rect', x: 0, y: 12, width: 24, height: 6, rx: 3, fill: 'white', opacity: 0.9 },
        { type: 'rect', x: 9, y: 3, width: 6, height: 24, rx: 3, fill: 'white', opacity: 0.9 },
        { type: 'text', x: 32, y: 27, content: 'SAÚDE', fontFamily: 'system-ui', fontSize: 14, fontWeight: 700, fill: 'white', opacity: 0.95, letterSpacing: -0.3 },
        { type: 'text', x: 84, y: 27, content: '+', fontFamily: 'system-ui', fontSize: 14, fontWeight: 900, fill: '#34d399' },
      ],
    },
  },
  {
    name: 'Pago',
    tag: 'Fintech · Backend + DevOps',
    description: 'Dashboard de gestão financeira em tempo real para PMEs com relatórios automáticos e alertas.',
    stack: ['GraphQL', 'K8s', 'CI/CD'],
    theme: 'green',
    logo: {
      width: 130,
      height: 44,
      ariaLabel: 'Pago',
      shapes: [
        { type: 'polygon', points: '14,2 26,9 26,23 14,30 2,23 2,9', fill: 'none', stroke: 'white', strokeWidth: 2, opacity: 0.9 },
        { type: 'text', x: 9, y: 21, content: 'P', fontFamily: 'system-ui', fontSize: 13, fontWeight: 900, fill: 'white', opacity: 0.95 },
        { type: 'text', x: 36, y: 24, content: 'pago', fontFamily: 'system-ui', fontSize: 15, fontWeight: 800, fill: 'white', opacity: 0.95, letterSpacing: -0.5 },
        { type: 'text', x: 36, y: 38, content: 'FINTECH', fontFamily: 'system-ui', fontSize: 8, fontWeight: 500, fill: 'white', opacity: 0.45, letterSpacing: 1.5 },
      ],
    },
  },
]
