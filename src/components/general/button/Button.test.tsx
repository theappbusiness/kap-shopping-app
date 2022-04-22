import { render, screen, fireEvent } from '../../../test-utils';
import { Button } from './index';
import { theme } from '../../../styled';

describe('Button renders', () => {
  const myMockFunction = jest.fn();

  test('Button renders correct text when given text as props', () => {
    render(<Button handleClick={myMockFunction} text="given text" />);
    const button = screen.getByRole('button', { name: 'given text' });
    expect(button).toBeInTheDocument();
  });

  test('Button renders with primary color palette when passed no color props', () => {
    render(<Button handleClick={myMockFunction} text="given text" />);
    const button = screen.getByRole('button', { name: 'given text' });
    expect(button).toHaveStyle(
      `background-color: ${theme.palette.primary.main}`
    );
    expect(button).toHaveStyle(
      `border-color: ${theme.palette.primary.contrast}`
    );
    expect(button).toHaveStyle(`color: ${theme.palette.primary.contrast}`);
  });

  test('Button renders with danger color palette when passed color prop of "danger"', () => {
    render(
      <Button handleClick={myMockFunction} text="given text" color="danger" />
    );
    const button = screen.getByRole('button', { name: 'given text' });
    expect(button).toHaveStyle(
      `background-color: ${theme.palette.danger.main}`
    );
    expect(button).toHaveStyle(
      `border-color: ${theme.palette.danger.contrast}`
    );
    expect(button).toHaveStyle(`color: ${theme.palette.danger.contrast}`);
  });

  test('Button handleClick function is called once upon button being clicked ', () => {
    render(
      <Button handleClick={myMockFunction} text="given text" color="danger" />
    );
    const button = screen.getByRole('button', { name: 'given text' });
    fireEvent.click(button);
    expect(myMockFunction).toHaveBeenCalledTimes(1);
  });
});
