import { render, screen } from '@testing-library/react'
import Cta from '@/components/Cta'

describe('Cta', () => {
  it('renders contact info without a form', () => {
    render(<Cta />)
    expect(screen.getByText('contato@laercio.me')).toBeInTheDocument()
    expect(screen.getByText('+55 (45) 9859-2126')).toBeInTheDocument()
    expect(screen.getByText('Resposta em até 24h')).toBeInTheDocument()
    expect(screen.getByText('Resposta imediata')).toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
