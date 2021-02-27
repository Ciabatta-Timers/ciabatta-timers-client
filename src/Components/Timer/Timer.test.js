import { render, screen } from '@testing-library/react';
import Timer from './index';

describe('<Timer />', () => {
  it('Renders the time provided', () => {
    const time = 1234
    render(<Timer time={time} />)

    expect(screen.getByText(time)).toBeInTheDocument()
  })
})
