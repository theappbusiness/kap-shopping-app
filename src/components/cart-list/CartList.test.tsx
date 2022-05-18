import { registerIcons } from '../../registerIcons';
import { render, screen } from '../../test-utils';
import { startingCart } from '../../contexts/Cart';
import { CartList } from '.';
registerIcons();

describe('Cart list', () => {
  it('renders a list of cart items using the cart context defaultValue', () => {
    const cartDefaultLength = startingCart.cart.length;
    render(<CartList />);
    const cartList = screen.getByTestId('cart-list');
    const cartItems = screen.getAllByTestId('cart-item');
    const cartItemImages = screen.getAllByRole('img');
    const cartItemNames = screen.getAllByTestId('cart-item-name');
    const cartItemQuantities = screen.getAllByTestId('cart-item-quantity');
    const decreaseButtons = screen.getAllByTestId('minus');
    const increaseButtons = screen.getAllByTestId('plus');
    const removeButtons = screen.getAllByText('Remove from cart');

    expect(cartList).toBeInTheDocument();
    expect(cartItems).toHaveLength(cartDefaultLength);
    expect(cartItemImages).toHaveLength(cartDefaultLength);
    expect(cartItemNames).toHaveLength(cartDefaultLength);
    expect(cartItemQuantities).toHaveLength(cartDefaultLength);
    expect(decreaseButtons).toHaveLength(cartDefaultLength);
    expect(increaseButtons).toHaveLength(cartDefaultLength);
    expect(removeButtons).toHaveLength(cartDefaultLength);
  });
});
