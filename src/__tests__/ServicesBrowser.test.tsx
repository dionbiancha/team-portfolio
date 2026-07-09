// src/__tests__/ServicesBrowser.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import ServicesBrowser from '@/components/ServicesBrowser'

describe('ServicesBrowser', () => {
  it('renders the section eyebrow and all area tabs', () => {
    render(<ServicesBrowser />)
    expect(screen.getByText('O que fazemos')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Frontend/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /FullStack/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /UX Design/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /DevOps/ })).toBeInTheDocument()
  })

  it('shows Frontend services by default', () => {
    render(<ServicesBrowser />)
    expect(screen.getByText('frontend')).toBeInTheDocument()
    expect(screen.getByText('Interfaces de Alta Performance')).toBeInTheDocument()
    expect(screen.getByText('Acessibilidade e Qualidade de Código')).toBeInTheDocument()
  })

  it('switches to DevOps services when the DevOps tab is clicked', () => {
    render(<ServicesBrowser />)
    fireEvent.click(screen.getByRole('button', { name: /DevOps/ }))
    expect(screen.getByText('devops')).toBeInTheDocument()
    expect(screen.getByText('Infraestrutura Cloud')).toBeInTheDocument()
    expect(screen.getByText('FinOps')).toBeInTheDocument()
    expect(screen.queryByText('Interfaces de Alta Performance')).not.toBeInTheDocument()
  })
})
