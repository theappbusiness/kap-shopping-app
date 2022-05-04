import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';
import { Input } from '.';

describe('Single line input component', () => {
  it('renders a text input component that accepts an onChange props ', async () => {
    const user = userEvent.setup();
    const onChangeMock = jest.fn();
    render(<Input onChange={onChangeMock} />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();

    await user.type(input, 'foo');
    expect(input).toHaveValue('foo');
    expect(onChangeMock).toBeCalledTimes(3);
  });
});
