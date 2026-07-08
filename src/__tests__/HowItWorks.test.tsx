import { render, screen } from '@testing-library/react'
import HowItWorks from '@/components/HowItWorks'

describe('HowItWorks', () => {
  it('renders all 3 steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Conta pra gente')).toBeInTheDocument()
    expect(screen.getByText('A gente monta o time')).toBeInTheDocument()
    expect(screen.getByText('Entregamos juntos')).toBeInTheDocument()
  })
})
