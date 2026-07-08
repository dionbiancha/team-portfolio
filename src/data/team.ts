// src/data/team.ts
export type TeamMember = {
  area: string
  lead: string
  role: string
  photo: string        // path suffix for randomuser.me, e.g. 'women/44'
  members: string[]
  linkedinUrl: string
  portfolioUrl: string
  tagline: string
  tags: string[]
}

export const team: TeamMember[] = [
  {
    area: 'Frontend',
    lead: 'Ana Souza',
    role: 'Frontend Lead',
    photo: 'women/44',
    members: ['Rafael Mendes', 'Camila Torres'],
    linkedinUrl: '#',
    portfolioUrl: '#',
    tagline: 'Deixa qualquer interface rápida mesmo em conexão fraca.',
    tags: ['React', 'Next.js'],
  },
  {
    area: 'Backend',
    lead: 'Carlos Lima',
    role: 'Backend Lead',
    photo: 'men/32',
    members: ['Thiago Ramos', 'Julia Neves'],
    linkedinUrl: '#',
    portfolioUrl: '#',
    tagline: 'Projeta APIs que aguentam picos de tráfego sem cair.',
    tags: ['Node.js', 'PostgreSQL'],
  },
  {
    area: 'UX Design',
    lead: 'Mariana Costa',
    role: 'UX Lead',
    photo: 'women/68',
    members: ['Diego Farias', 'Letícia Braga'],
    linkedinUrl: '#',
    portfolioUrl: '#',
    tagline: 'Testa cada fluxo com usuários antes de aprovar.',
    tags: ['Figma', 'Design System'],
  },
  {
    area: 'DevOps',
    lead: 'Pedro Alves',
    role: 'DevOps Lead',
    photo: 'men/75',
    members: ['Renata Silva', 'Bruno Carvalho'],
    linkedinUrl: '#',
    portfolioUrl: '#',
    tagline: 'Automatiza deploys pra ninguém dormir com medo de subir errado.',
    tags: ['Kubernetes', 'Docker'],
  },
]
