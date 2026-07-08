import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders badge, headline lines, and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Aceitando novos projetos/)).toBeInTheDocument()
    expect(screen.getByText('Construímos')).toBeInTheDocument()
    expect(screen.getByText('o digital que')).toBeInTheDocument()
    expect(screen.getByText('move negócios.')).toBeInTheDocument()
    expect(screen.getByText(/Do zero ao deploy/)).toBeInTheDocument()
  })
})
