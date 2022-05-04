import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';
import { Input } from '.';

describe('Single line input component', () => {
  it('renders a text input component that accepts an onChange props when no placeholder prop is passed', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();
    render(<Input onChange={onChangeMock} />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    await user.type(input, 'foo');
    expect(input).toHaveValue('foo');
    expect(onChangeMock).toBeCalledTimes(3);
  });

  it('renders a text input component that accepts an onChange props when a placeholder prop is passed', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();
    render(<Input onChange={onChangeMock} placeholder="given-placeholder" />);
    const inputWithPlaceholder =
      screen.getByPlaceholderText('given-placeholder');
    expect(inputWithPlaceholder).toBeInTheDocument();

    await user.type(inputWithPlaceholder, 'foo');
    expect(inputWithPlaceholder).toHaveValue('foo');
    expect(onChangeMock).toBeCalledTimes(3);
  });
});
