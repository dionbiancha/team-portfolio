// src/data/team.ts
export type TeamMember = {
  area: string
  lead: string
  role: string
  photo: string        // path suffix for randomuser.me, e.g. 'women/44'
  members: string[]
  linkedinUrl: string
  portfolioUrl: string
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
  },
  {
    area: 'Backend',
    lead: 'Carlos Lima',
    role: 'Backend Lead',
    photo: 'men/32',
    members: ['Thiago Ramos', 'Julia Neves'],
    linkedinUrl: '#',
    portfolioUrl: '#',
  },
  {
    area: 'UX Design',
    lead: 'Mariana Costa',
    role: 'UX Lead',
    photo: 'women/68',
    members: ['Diego Farias', 'Letícia Braga'],
    linkedinUrl: '#',
    portfolioUrl: '#',
  },
  {
    area: 'DevOps',
    lead: 'Pedro Alves',
    role: 'DevOps Lead',
    photo: 'men/75',
    members: ['Renata Silva', 'Bruno Carvalho'],
    linkedinUrl: '#',
    portfolioUrl: '#',
  },
]
