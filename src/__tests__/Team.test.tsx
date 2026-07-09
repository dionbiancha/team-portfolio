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
    expect(screen.getByText('Dionei Bianchati')).toBeInTheDocument()
    expect(screen.getByText('Laercio Bubiak')).toBeInTheDocument()
    expect(screen.getByText('FRONTEND')).toBeInTheDocument()
    expect(screen.getByText('DEVOPS')).toBeInTheDocument()
  })

  it('renders linkedin and portfolio links for each lead', () => {
    render(<Team />)
    expect(screen.getByLabelText('LinkedIn de Dionei Bianchati')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/dionbiancha'
    )
    expect(screen.getByLabelText('Portfólio de Dionei Bianchati')).toHaveAttribute(
      'href',
      'https://dionei.com/'
    )
    expect(screen.getByLabelText('LinkedIn de Laercio Bubiak')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/laercio-bubiak/'
    )
    expect(screen.getByLabelText('Portfólio de Laercio Bubiak')).toHaveAttribute(
      'href',
      'https://www.laercio.me/'
    )
  })

  it('renders specialty tagline and skill tags for each lead', () => {
    render(<Team />)
    expect(
      screen.getByText('Deixa qualquer interface rápida mesmo em conexão fraca.')
    ).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('Kubernetes')).toBeInTheDocument()
    expect(screen.getByText('Docker')).toBeInTheDocument()
  })
})
