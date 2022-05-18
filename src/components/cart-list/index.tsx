import { useContext } from 'react';
import { CartItem } from '../general/cart-item';
import { List } from '../general/list';
import { CartContext } from '../../contexts/Cart';

export const CartList: React.FC = () => {
  const { cart } = useContext(CartContext);

  const cartItems: React.ReactElement[] = cart.map((item) => {
    const itemProps = {
      imgSrc: `https://picsum.photos/seed/${item.name}/270`,
      name: item.name,
      quantity: item.quantity,
      onDecreaseStepperClick: () => undefined,
      onIncreaseStepperClick: () => undefined,
      onRemoveClick: () => undefined,
    };
    return <CartItem key={item.id} {...itemProps} />;
  });

  return <List items={cartItems}></List>;
};
