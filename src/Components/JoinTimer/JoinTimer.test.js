import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JoinTimer from './index';

describe('<JoinTimer />', () => {
  it('Renders an input field to type the timer id in', () => {
    render(<JoinTimer onSubmit={jest.fn()} />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('Renders a submit button', () => {
    render(<JoinTimer onSubmit={jest.fn()} />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('Renders the submit button as disabled unless the input field is filled out', () => {
    render(<JoinTimer onSubmit={jest.fn()} />)

    const button = screen.getByRole('button', {name: /join/i})
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()

    userEvent.type(screen.getByRole('textbox'), '123456')

    expect(button).not.toBeDisabled()
  })

  it('Calls onSubmit when submitting, only if the input field is filled out', () => {
    const onSubmit = jest.fn()
    render(<JoinTimer onSubmit={onSubmit} />)

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(onSubmit).not.toHaveBeenCalled()

    userEvent.type(screen.getByRole('textbox'), '123456')
    userEvent.click(button)

    expect(onSubmit).toHaveBeenCalledWith('123456')
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('Calls onSubmit when hitting enter', () => {
    const onSubmit = jest.fn()
    render(<JoinTimer onSubmit={onSubmit} />)

    userEvent.type(screen.getByRole('textbox'), '123456{enter}')

    expect(onSubmit).toHaveBeenCalledWith('123456')
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it('Uses the maxIdLength prop for validation', () => {
    const onSubmit = jest.fn()
    render(<JoinTimer onSubmit={onSubmit} maxIdLength={2} />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    expect(button).toBeDisabled()

    userEvent.type(input, '123{enter}')
    userEvent.click(button)
    expect(onSubmit).not.toHaveBeenCalled()

    userEvent.type(input, '{backspace}{enter}')
    expect(button).not.toBeDisabled()
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })

  it.todo('Only calls onSubmit once if the user clicks multiple times quickly')
})
