import { useContext } from 'react';
import { ProductTiles } from '../../components/product-tiles/ProductTiles';
import { Hero } from '../../components/hero/index';
import { CartItem } from '../../components/general/cart-item';
import { CartContext } from '../../contexts/Cart';

export const HomePage: React.FC = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <>
      {cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            imgSrc="https://picsum.photos/seed/test/270"
            name={item.name}
            quantity={item.quantity}
            onDecreaseStepperClick={() => {
              setCart((currCart) => {
                return currCart.map((currItems) => {
                  if (currItems.id === item.id) {
                    currItems.quantity--;
                  }
                  return currItems;
                });
              });
            }}
            onIncreaseStepperClick={() => {
              setCart((currCart) => {
                return currCart.map((currItems) => {
                  if (currItems.id === item.id) {
                    console.log('inside if');
                    currItems.quantity++;
                  }
                  return currItems;
                });
              });
            }}
            onRemoveClick={() => {
              setCart((currCart) =>
                currCart.filter((cartItem) => item.id !== cartItem.id)
              );
            }}
          />
        );
      })}
      <Hero />
      <ProductTiles />
    </>
  );
};
