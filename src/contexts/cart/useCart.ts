import { useState, useEffect } from 'react';
import { postOrder, getOrderData } from '../../services/order.service';
import { Product } from '../../types/product';
import { createCartCookie, getCartCookie } from '../../utils/cookies';
import { Cart, CartState } from '.';

const removeItemFactory =
  (setCart: React.Dispatch<React.SetStateAction<Cart>>) =>
  (id: string): void => {
    setCart((currCart) => currCart.filter((cartItem) => id !== cartItem.id));
  };

const changeQuantityFactory =
  (setCart: React.Dispatch<React.SetStateAction<Cart>>) =>
  (id: string, amount: number): void => {
    setCart((currCart) => {
      return currCart
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + amount };
          }
          return { ...item };
        })
        .filter((item) => item.quantity > 0);
    });
  };

const addItemFactory =
  (setCart: React.Dispatch<React.SetStateAction<Cart>>) =>
  (product: Product, amount: number): void => {
    setCart((currCart) => [
      ...currCart,
      { id: product.id, name: product.name, quantity: amount },
    ]);
  };

const addToCartFactory =
  (
    addItem: (product: Product, amount: number) => void,
    changeQuantity: (id: string, amount: number) => void,
    cart: Cart
  ) =>
  (product: Product) => {
    postOrderCreateCookie(product);
    const productInCart = cart.find((item) => item.id === product.id);
    productInCart ? changeQuantity(product.id, 1) : addItem(product, 1);
  };

const postOrderCreateCookie = async (product: Product) => {
  try {
    const productOrder = [{ product: product.id, quantity: 1 }];
    const order = await postOrder(productOrder);
    createCartCookie(order.id);
  } catch (err) {
    console.log(err);
  }
};

export const useCart = (): CartState => {
  const [cart, setCart] = useState<Cart>([]);
  const removeItem = removeItemFactory(setCart);
  const changeQuantity = changeQuantityFactory(setCart);
  const addItem = addItemFactory(setCart);
  const addToCart = addToCartFactory(addItem, changeQuantity, cart);

  useEffect(() => {
    const cartId = getCartCookie();
    const getOrder = async (cartId: string) => {
      try {
        const order = await getOrderData(cartId);
        const productsInOrder = order.products.map((item) => ({
          id: item.product.id,
          name: item.product.name,
          quantity: item.quantity,
        }));
        setCart(productsInOrder);
      } catch (err) {
        console.log(err);
      }
    };

    if (cartId) {
      getOrder(cartId);
    }
  }, []);

  return {
    cart,
    removeItem,
    changeQuantity,
    addItem,
    addToCart,
  };
};
