import { useContext } from 'react';
import { CartItem } from '../general/cart-item';
import { List } from '../general/list';
import { CartContext } from '../../contexts/Cart';
import { changeQuantity, removeItem } from '../../utils/cartModifiers';

export const CartList: React.FC = () => {
  const { cart, setCart } = useContext(CartContext);

  const cartItems: React.ReactElement[] = cart.map((item) => {
    return (
      <CartItem
        key={item.id}
        imgSrc={`https://picsum.photos/seed/${item.name}/270`}
        name={item.name}
        quantity={item.quantity}
        onDecreaseStepperClick={() => changeQuantity(item.id, -1, setCart)}
        onIncreaseStepperClick={() => changeQuantity(item.id, 1, setCart)}
        onRemoveClick={() => removeItem(item.id, setCart)}
      />
    );
  });

  return <List items={cartItems} />;
};
