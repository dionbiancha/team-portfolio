// src/data/cases.ts
export type Case = {
  name: string
  tag: string
  description: string
  stack: string[]
  theme: 'blue' | 'dark' | 'green'
  logo: string
}

export const cases: Case[] = [
  {
    name: 'Moda Sul',
    tag: 'E-commerce · Frontend + Backend',
    description: 'Plataforma completa de vendas online com integração de pagamento e logística em tempo real.',
    stack: ['React', 'Node.js', 'AWS'],
    theme: 'blue',
    logo: '/cases/moda-sul.svg',
  },
  {
    name: 'Saúde+',
    tag: 'Saúde · Time completo',
    description: 'App de agendamento de consultas e prontuário eletrônico para rede de 12 clínicas.',
    stack: ['Next.js', 'Python', 'UX'],
    theme: 'dark',
    logo: '/cases/saude-mais.svg',
  },
  {
    name: 'Pago',
    tag: 'Fintech · Backend + DevOps',
    description: 'Dashboard de gestão financeira em tempo real para PMEs com relatórios automáticos e alertas.',
    stack: ['GraphQL', 'K8s', 'CI/CD'],
    theme: 'green',
    logo: '/cases/pago.svg',
  },
]
