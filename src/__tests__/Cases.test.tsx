import { render, screen } from '@testing-library/react'
import Cases from '@/components/Cases'

describe('Cases', () => {
  it('renders all 3 case names', () => {
    render(<Cases />)
    expect(screen.getByText('Moda Sul')).toBeInTheDocument()
    expect(screen.getByText('Saúde+')).toBeInTheDocument()
    expect(screen.getByText('Pago')).toBeInTheDocument()
  })

  it('renders stack tech pills', () => {
    render(<Cases />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('GraphQL')).toBeInTheDocument()
    expect(screen.getByText('K8s')).toBeInTheDocument()
  })
})
