import React, { useState, useEffect } from 'react';
import { getOrderData, postOrder } from '../services/order.service';
import { createCartCookie, getCartCookie } from '../utils/cookies';
import { Product } from '../types/product';

type CartItems = { id: string; name: string; quantity: number };
type Cart = CartItems[];
type CartState = {
  cart: Cart;
  removeItem: (id: string) => void;
  changeQuantity: (id: string, amount: number) => void;
  addItem: (product: Product, amount: number) => void;
  addToCart: (product: Product) => void;
};

export const startingCart = {
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

export const CartContext = React.createContext<CartState>(startingCart);

export const CartProvider: React.FC = ({ children }) => {
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

  return (
    <CartContext.Provider
      value={{
        cart,
        removeItem,
        changeQuantity,
        addItem,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
