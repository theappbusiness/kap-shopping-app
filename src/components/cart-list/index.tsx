import { useContext } from 'react';
import { CartItem } from '../general/cart-item';
import { List } from '../general/list';
import { CartContext } from '../../contexts/Cart';

export const CartList: React.FC = () => {
  const { cart, setCart } = useContext(CartContext);
  const changeQuantity = (id: string, amount: number) => {
    setCart((currCart) => {
      return currCart.map((currItem) => {
        if (currItem.id === id) {
          const newQty =
            currItem.quantity + amount > 0 ? currItem.quantity + amount : 0;
          return { ...currItem, quantity: newQty };
        }
        return { ...currItem };
      });
    });
  };
  const removeItem = (id: string) => {
    setCart((currCart) => currCart.filter((cartItem) => id !== cartItem.id));
  };

  const cartItems: React.ReactElement[] = cart.map((item) => {
    return (
      <CartItem
        key={item.id}
        imgSrc={`https://picsum.photos/seed/${item.name}/270`}
        name={item.name}
        quantity={item.quantity}
        onDecreaseStepperClick={() => changeQuantity(item.id, -1)}
        onIncreaseStepperClick={() => changeQuantity(item.id, +1)}
        onRemoveClick={() => removeItem(item.id)}
      />
    );
  });

  return <List items={cartItems} />;
};
