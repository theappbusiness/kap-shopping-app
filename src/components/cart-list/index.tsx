import { useContext } from 'react';
import { CartItem } from '../general/cart-item';
import { List } from '../general/list';
import { CartContext } from '../../contexts/cart';

export const CartList: React.FC = () => {
  const { cart, changeQuantity, removeItem } = useContext(CartContext);
  console.log(cart);
  const cartItems: React.ReactElement[] = cart.map((item) => {
    return (
      <CartItem
        key={item.id}
        imgSrc={`https://picsum.photos/seed/${item.name}/270`}
        name={item.name}
        quantity={item.quantity}
        onDecreaseStepperClick={() => changeQuantity(item.id, -1)}
        onIncreaseStepperClick={() => changeQuantity(item.id, 1)}
        onRemoveClick={() => removeItem(item.id)}
      />
    );
  });

  return <List items={cartItems} />;
};
