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
    expect(screen.getByText('Vinicios Engelage')).toBeInTheDocument()
    expect(screen.getByText('Riad Younes')).toBeInTheDocument()
    expect(screen.getByText('Gregory Xavier Fleury Torres')).toBeInTheDocument()
    expect(screen.getByText('FRONTEND ENGINEER')).toBeInTheDocument()
    expect(screen.getByText('DEVOPS | CLOUD INFRASTRUCTURE')).toBeInTheDocument()
    expect(screen.getByText('FULLSTACK ENGINEER')).toBeInTheDocument()
    expect(screen.getByText('SOFTWARE ENGINEER')).toBeInTheDocument()
    expect(screen.getByText('BACKEND ENGINEER')).toBeInTheDocument()
  })

  it('renders linkedin and portfolio links for leads that have them', () => {
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
    expect(screen.getByLabelText('LinkedIn de Vinicios Engelage')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/viniengelage/'
    )
  })

  it('renders specialty tagline and skill tags for each lead', () => {
    render(<Team />)
    expect(
      screen.getByText('Deixa qualquer interface rápida mesmo em conexão fraca.')
    ).toBeInTheDocument()
    // Tags that appear on more than one card ("React", "Docker") are intentionally
    // not asserted here with getByText, since it throws on multiple matches —
    // each tag below is unique to a single lead's tag list.
    expect(screen.getByText('Next.js')).toBeInTheDocument()
    expect(screen.getByText('Kubernetes')).toBeInTheDocument()
    expect(screen.getByText('Terraform')).toBeInTheDocument()
    expect(screen.getByText('NextJS')).toBeInTheDocument()
    expect(screen.getByText('MySQL')).toBeInTheDocument()
    expect(screen.getByText('Automation AI')).toBeInTheDocument()
  })
})
