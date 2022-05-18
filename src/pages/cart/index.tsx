import { ReactElement, useContext } from 'react';
import { CartItem } from '../../components/general/cart-item';
import { CartContext } from '../../contexts/Cart';

export const CartPage = (): ReactElement => {
  const { cart, setCart } = useContext(CartContext);

  const increaseQuantity = (id: string) => {
    setCart((currCart) => {
      return currCart.map((currItem) => {
        if (currItem.id === id) {
          return { ...currItem, quantity: currItem.quantity + 1 };
        }
        return { ...currItem };
      });
    });
  };
  const decreaseQuantity = (id: string) => {
    setCart((currCart) => {
      return currCart.map((currItem) => {
        if (currItem.id === id) {
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
      {cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            imgSrc="https://picsum.photos/seed/test/270"
            name={item.name}
            quantity={item.quantity}
            onDecreaseStepperClick={() => decreaseQuantity(item.id)}
            onIncreaseStepperClick={() => increaseQuantity(item.id)}
            onRemoveClick={() => removeItem(item.id)}
          />
        );
      })}
    </>
  );
};
