import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';
import { registerIcons } from '../../../registerIcons';
import { IconButton } from './IconButton';

test('renders a button that accepts an iconName and onClick prop', async () => {
  const onClickMock = jest.fn();
  registerIcons();
  render(<IconButton iconName="magnifying-glass" onClick={onClickMock} />);
  const iconButton = screen.getByRole('button');
  const icon = screen.getByTestId('button-icon');
  expect(icon).toBeInTheDocument();

  await userEvent.click(iconButton);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
