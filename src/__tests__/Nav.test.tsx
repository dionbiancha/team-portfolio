import { render, screen } from '@testing-library/react'
import Nav from '@/components/Nav'

describe('Nav', () => {
  it('renders logo and navigation links', () => {
    render(<Nav />)
    // Logo text is split: 'la' + 'bub' in accent color
    expect(screen.getByText('la')).toBeInTheDocument()
    expect(screen.getByText('bub')).toBeInTheDocument()
    expect(screen.getByText('Serviços')).toBeInTheDocument()
    expect(screen.getByText('Time')).toBeInTheDocument()
    expect(screen.getByText('Cases')).toBeInTheDocument()
    expect(screen.getByText('Contato')).toBeInTheDocument()
    expect(screen.getByText('Fale conosco →')).toBeInTheDocument()
  })
})
