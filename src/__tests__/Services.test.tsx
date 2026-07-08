import { render, screen } from '@testing-library/react'
import Services from '@/components/Services'

describe('Services', () => {
  it('renders section title and all service pills', () => {
    render(<Services />)
    expect(screen.getByText(/Da ideia ao/)).toBeInTheDocument()
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('UX Design')).toBeInTheDocument()
    expect(screen.getByText('DevOps')).toBeInTheDocument()
  })

  it('does not render a "Ver proposta" button', () => {
    render(<Services />)
    expect(screen.queryByText(/Ver proposta/i)).not.toBeInTheDocument()
  })
})
