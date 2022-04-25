import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';
import { theme } from '../../../styled';
import { registerIcons } from '../../../registerIcons';
import { Button } from './index';

describe('Button renders', () => {
  const myMockFunction = jest.fn();

  test('Button renders correct text when given text as props', () => {
    render(<Button handleClick={myMockFunction}>given text </Button>);
    const button = screen.getByRole('button', { name: 'given text' });
    expect(button).toBeInTheDocument();
  });

  test('Button renders with primary color palette when passed no color props', () => {
    render(<Button handleClick={myMockFunction}>given text </Button>);
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
      <Button handleClick={myMockFunction} color="danger">
        given text
      </Button>
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

  test('Button handleClick function is called once upon button being clicked ', async () => {
    render(
      <Button handleClick={myMockFunction} color="danger">
        given text
      </Button>
    );
    const button = screen.getByRole('button', { name: 'given text' });
    await userEvent.click(button);
    expect(myMockFunction).toHaveBeenCalledTimes(1);
  });

  test('Button renders no icon when not given iconName as props', () => {
    registerIcons();
    render(<Button handleClick={myMockFunction}>given text</Button>);
    const buttonIcon = screen.queryByTestId('button-icon');
    expect(buttonIcon).not.toBeInTheDocument();
  });

  test('Button renders correct icon when given iconName as props', () => {
    registerIcons();
    render(
      <Button handleClick={myMockFunction} iconName="shopping-bag">
        {' '}
      </Button>
    );
    const buttonIcon = screen.getByTestId('button-icon');
    expect(buttonIcon).toBeInTheDocument();
  });
});
