// src/data/metrics.ts
export type Metric = {
  value: string
  label: string
}

export const metrics: Metric[] = [
  { value: '40+',   label: 'Projetos entregues' },
  { value: '4',     label: 'Frentes especializadas' },
  { value: '98%',   label: 'Taxa de satisfação' },
  { value: '3+',    label: 'Anos de mercado' },
  { value: '12',    label: 'Especialistas no time' },
  { value: '<24h',  label: 'Tempo de resposta' },
  { value: '15+',   label: 'Clientes ativos' },
  { value: '100%',  label: 'Projetos no prazo' },
]
