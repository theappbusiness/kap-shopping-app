import { userEvent } from '@storybook/testing-library';
import { registerIcons } from '../../registerIcons';
import { render, screen } from '../../test-utils';
import { Header } from './Header';
registerIcons();

const startingCart = {
  cart: [
    {
      id: '62617159f21bcb5fa89e67ab',
      name: 'Think Personal Front',
      quantity: 3,
    },
    {
      id: '62617159f21bcb5fa89e67ac',
      name: 'Ready',
      quantity: 1,
    },
  ],
  removeItem: (): void => undefined,
  changeQuantity: (): void => undefined,
  addItem: (): void => undefined,
  addToCart: (): void => undefined,
};

jest.mock('../../contexts/cart/useCart', () => ({
  useCart: () => ({ ...startingCart }),
}));

describe('Header', () => {
  it('Renders Header element', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('Renders Hamburger Menu Icon', () => {
    render(<Header />);
    const hamburgerIcon = screen.getByTestId('hamburger-icon');
    expect(hamburgerIcon).toBeInTheDocument();
  });

  it('Renders Search Icon', () => {
    render(<Header />);
    const searchIcon = screen.getByTestId('magnifying-glass');
    expect(searchIcon).toBeInTheDocument();
  });

  it('Renders Basket Icon', () => {
    render(<Header />);
    const basketIcon = screen.getByTestId('bag-shopping');
    expect(basketIcon).toBeInTheDocument();
  });

  it('Renders Shop Title', () => {
    render(<Header />);
    const shopTitle = screen.getByText('Shoply');
    expect(shopTitle).toBeInTheDocument();
  });

  it('Displays the SearchInput component when the user clicks the search button, then removes it when clicked again ', async () => {
    render(<Header />);

    const searchInput = screen.queryByRole('textbox');
    expect(searchInput).not.toBeInTheDocument();

    const searchIcon = screen.getByTestId('magnifying-glass');
    userEvent.click(searchIcon);
    const searchInputDisplayed = await screen.findByRole('textbox');
    expect(searchInputDisplayed).toBeVisible();

    userEvent.click(searchIcon);
    const searchInputNone = screen.queryByRole('textbox');
    expect(searchInputNone).not.toBeInTheDocument();
  });

  it('Displays a list of cart item components when user clicks the bag icon, then hides it when clicked again', async () => {
    render(<Header />);

    const cartList = screen.queryByRole('list');
    const cartItem = screen.queryAllByTestId('cart-item');
    expect(cartList).not.toBeInTheDocument();
    expect(cartItem).toEqual([]);

    const cartIcon = screen.getByTestId('bag-shopping');

    userEvent.click(cartIcon);
    const cartListDisplayed = await screen.findByRole('list');
    const cartItemsDisplayed = await screen.findAllByTestId('cart-item');
    expect(cartListDisplayed).toBeVisible();
    expect(cartItemsDisplayed).toHaveLength(startingCart.cart.length);

    userEvent.click(cartIcon);
    const cartListNone = screen.queryByRole('list');
    const cartItemNone = screen.queryAllByTestId('cart-item');
    expect(cartListNone).not.toBeInTheDocument();
    expect(cartItemNone).toEqual([]);
  });
});
