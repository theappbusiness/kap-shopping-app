import { ReactElement, useContext } from 'react';
import { CartItem } from '../../components/general/cart-item';
import { CartContext } from '../../contexts/Cart';

export const CartPage = (): ReactElement => {
  const { cart, setCart } = useContext(CartContext);
  type Amount = 'increment' | 'decrement';
  const changeQuantity = (id: string, amount: Amount) => {
    setCart((currCart) => {
      return currCart.map((currItem) => {
        if (currItem.id === id) {
          if (amount === 'increment')
            return { ...currItem, quantity: currItem.quantity + 1 };
          if (amount === 'decrement')
            return { ...currItem, quantity: currItem.quantity - 1 };
        }
        return { ...currItem };
      });
    });
  };
  const removeItem = (id: string) => {
    setCart((currCart) => currCart.filter((cartItem) => id !== cartItem.id));
  };
  return (
    <>
      <h3>Cart Page</h3>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            imgSrc="https://picsum.photos/seed/test/270"
            name={item.name}
            quantity={item.quantity}
            onDecreaseStepperClick={() => changeQuantity(item.id, 'decrement')}
            onIncreaseStepperClick={() => changeQuantity(item.id, 'increment')}
            onRemoveClick={() => removeItem(item.id)}
          />
        );
      })}
    </>
  );
};
