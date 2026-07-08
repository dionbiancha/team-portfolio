// src/data/testimonials.ts
export type Testimonial = {
  name: string
  role: string
  photo: string   // path suffix for randomuser.me
  text: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Fernanda Rocha',
    role: 'CEO, Moda Sul',
    photo: 'women/21',
    text: 'A Labub entendeu o que a gente precisava sem reuniões intermináveis. O resultado chegou antes do prazo e superou o que imaginávamos.',
  },
  {
    name: 'Rafael Menezes',
    role: 'CTO, Fintech Pago',
    photo: 'men/54',
    text: 'Ter frontend, backend e UX no mesmo time foi o diferencial. Comunicação sempre clara, produto de altíssima qualidade e zero dor de cabeça.',
  },
]
