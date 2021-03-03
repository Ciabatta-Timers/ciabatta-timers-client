import { render, screen } from '@testing-library/react';
import Timer from './index';

describe('<Timer />', () => {
  it('Should handle time === 0', () => {
    render(<Timer time={0} />)

    expect(screen.getByText('00:00.000')).toBeInTheDocument()
  })

  it('Renders the time provided as a mm:ss.xx string', () => {
    render(<Timer time={610100} />)

    expect(screen.getByText('10:10.100')).toBeInTheDocument()
  })

  it('Should zero-pad minute when less than 10', () => {
    render(<Timer time={60000} />)

    expect(screen.getByText('01:00.000')).toBeInTheDocument()
  })

  it('Should not zero-pad minutes when greater than or equal to 10', () => {
    render(<Timer time={600000} />)

    expect(screen.getByText('10:00.000')).toBeInTheDocument()
  })

  it('Should zero-pad seconds when less than 10', () => {
    render(<Timer time={1000} />)

    expect(screen.getByText('00:01.000')).toBeInTheDocument()
  })

  it('Should not zero-pad seconds when greater than or equal to 10', () => {
    render(<Timer time={10000} />)

    expect(screen.getByText('00:10.000')).toBeInTheDocument()
  })

  it('Should zero-pad milliseconds with two zeroes when less than 10', () => {
    render(<Timer time={1} />)

    expect(screen.getByText('00:00.001')).toBeInTheDocument()
  })

  it('Should zero-pad milliseconds with one zero when less than 100', () => {
    render(<Timer time={10} />)

    expect(screen.getByText('00:00.010')).toBeInTheDocument()
  })

  it('Should not zero-pad seconds when greater than or equal to 10', () => {
    render(<Timer time={100} />)

    expect(screen.getByText('00:00.100')).toBeInTheDocument()
  })
})
