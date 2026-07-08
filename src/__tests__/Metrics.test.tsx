import { render, screen } from '@testing-library/react'
import Metrics from '@/components/Metrics'

describe('Metrics', () => {
  it('renders all metric values and labels', () => {
    render(<Metrics />)
    // Values appear twice (duplicated for seamless loop)
    expect(screen.getAllByText('40+').length).toBeGreaterThan(0)
    expect(screen.getAllByText('98%').length).toBeGreaterThan(0)
    expect(screen.getAllByText('<24h').length).toBeGreaterThan(0)
    expect(screen.getAllByText('100%').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Projetos entregues').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Taxa de satisfação').length).toBeGreaterThan(0)
  })
})
