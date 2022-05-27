import userEvent from '@testing-library/user-event';
import { render, screen } from '../../../test-utils';
import { registerIcons } from '../../../registerIcons';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';
import { IconButton } from '.';

test('renders a button that accepts an Icon, size, width, stroke and onClick prop', async () => {
  const onClickMock = jest.fn();
  registerIcons();
  render(
    <IconButton
      Icon={Search}
      buttonSize="medium"
      iconWidth={24}
      stroke="true"
      onClick={onClickMock}
    />
  );
  const iconButton = screen.getByRole('button');

  await userEvent.click(iconButton);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
