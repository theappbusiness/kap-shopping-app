import React, { useState } from 'react';
import { Product } from '../types/product';

type CartItems = { id: string; name: string; quantity: number };
type Cart = CartItems[];
type CartState = {
  cart: Cart;
  removeItem: (id: string) => void;
  changeQuantity: (id: string, amount: number) => void;
  addItem: (product: Product, amount: number) => void;
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

export const CartContext = React.createContext<CartState>(startingCart);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Cart>([]);
  const removeItem = removeItemFactory(setCart);
  const changeQuantity = changeQuantityFactory(setCart);
  const addItem = addItemFactory(setCart);

  return (
    <CartContext.Provider value={{ cart, removeItem, changeQuantity, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
