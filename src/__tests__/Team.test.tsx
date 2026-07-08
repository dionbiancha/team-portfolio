import { render, screen } from '@testing-library/react'
import Team from '@/components/Team'

// Mock Next.js Image to avoid external requests in tests
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}))

describe('Team', () => {
  it('renders all team leads and area labels', () => {
    render(<Team />)
    expect(screen.getByText('Ana Souza')).toBeInTheDocument()
    expect(screen.getByText('Carlos Lima')).toBeInTheDocument()
    expect(screen.getByText('Mariana Costa')).toBeInTheDocument()
    expect(screen.getByText('Pedro Alves')).toBeInTheDocument()
    expect(screen.getByText('FRONTEND')).toBeInTheDocument()
    expect(screen.getByText('BACKEND')).toBeInTheDocument()
    expect(screen.getByText('UX DESIGN')).toBeInTheDocument()
    expect(screen.getByText('DEVOPS')).toBeInTheDocument()
  })

  it('renders sub-members', () => {
    render(<Team />)
    expect(screen.getByText('+ Rafael Mendes')).toBeInTheDocument()
    expect(screen.getByText('+ Renata Silva')).toBeInTheDocument()
  })
})
