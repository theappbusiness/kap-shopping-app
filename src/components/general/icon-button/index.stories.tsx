import { ComponentStory } from '@storybook/react';
import { ReactComponent as Search } from '../../../assets/icons/search.svg';
import { ReactComponent as Menu } from '../../../assets/icons/menu.svg';
import { ReactComponent as Cart } from '../../../assets/icons/cart.svg';
import { ReactComponent as Like } from '../../../assets/icons/like.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/arrow-right.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/arrow-left.svg';
import { IconButton } from '.';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Icon-Button',
  component: IconButton,
  argTypes: {
    onClick: { action: 'onClick' },
  },
};

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  Icon: Search,
  iconWidth: 24,
  stroke: 'true',
  buttonSize: 'small',
};

export const MenuIcon = Template.bind({});
MenuIcon.args = {
  Icon: Menu,
  iconWidth: 48,
  stroke: 'true',
  buttonSize: 'small',
};

export const CartIcon = Template.bind({});
CartIcon.args = {
  Icon: Cart,
  iconWidth: 48,
  stroke: 'true',
  buttonSize: 'small',
};

export const LikeIcon = Template.bind({});
LikeIcon.args = {
  Icon: Like,
  iconWidth: 24,
  stroke: 'true',
  buttonSize: 'small',
};

export const ArrowLeftIcon = Template.bind({});
ArrowLeftIcon.args = {
  Icon: ArrowLeft,
  iconWidth: 24,
  stroke: 'true',
  buttonSize: 'small',
};

export const ArrowRightIcon = Template.bind({});
ArrowRightIcon.args = {
  Icon: ArrowRight,
  iconWidth: 24,
  stroke: 'true',
  buttonSize: 'small',
};
