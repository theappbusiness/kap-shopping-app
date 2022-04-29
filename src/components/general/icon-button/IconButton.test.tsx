import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';
import { registerIcons } from '../../../registerIcons';
import { IconButton } from './IconButton';

test('renders a button that accepts an iconName and onClick prop', async () => {
  const onClickMock = jest.fn();
  registerIcons();
  render(<IconButton iconName="magnifying-glass" onClick={onClickMock} />);
  const icon = screen.getByTestId('magnifying-glass');
  const iconButton = screen.getByRole('button');

  await userEvent.click(iconButton);
  expect(icon).toBeInTheDocument();
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
