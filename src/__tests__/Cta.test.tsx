import { render, screen } from '@testing-library/react'
import Cta from '@/components/Cta'

describe('Cta', () => {
  it('renders contact info without a form', () => {
    render(<Cta />)
    expect(screen.getByText('oi@labub.com.br')).toBeInTheDocument()
    expect(screen.getByText('+55 (51) 99999-0000')).toBeInTheDocument()
    expect(screen.getByText('Resposta em até 24h')).toBeInTheDocument()
    expect(screen.getByText('Resposta imediata')).toBeInTheDocument()
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
