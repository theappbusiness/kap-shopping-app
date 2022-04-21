import { render, screen } from '../../../test-utils';
import { Button } from './index';

describe('Button renders', () => {
  test('Button renders correct text when given text as props', () => {
    render(<Button text="given text" />);
    const button = screen.getByRole('button', { name: 'given text' });
    expect(button).toBeInTheDocument();
  });

  test('Button renders with primary color palette when passed no color props', () => {
    render(<Button text="given text" />);
    const button = screen.getByRole('button', { name: 'given text' });

    expect(button).toHaveStyle(`background-color: #18181a`);
    expect(button).toHaveStyle(`border-color: #e4e4ee`);
    expect(button).toHaveStyle(`color: #e4e4ee`);
  });

  test('Button renders with danger color palette when passed color prop of "danger"', () => {
    render(<Button text="given text" color="danger" />);
    const button = screen.getByRole('button', { name: 'given text' });

    expect(button).toHaveStyle(`background-color: #e60927`);
    expect(button).toHaveStyle(`border-color: #e4e4ee`);
    expect(button).toHaveStyle(`color: #e4e4ee`);
  });
});
