import { render, screen } from '@testing-library/react'
import Testimonials from '@/components/Testimonials'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}))

describe('Testimonials', () => {
  it('renders author names and quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText('Fernanda Rocha')).toBeInTheDocument()
    expect(screen.getByText('Rafael Menezes')).toBeInTheDocument()
    expect(screen.getByText(/reuniões intermináveis/)).toBeInTheDocument()
    expect(screen.getByText(/zero dor de cabeça/)).toBeInTheDocument()
  })
})
