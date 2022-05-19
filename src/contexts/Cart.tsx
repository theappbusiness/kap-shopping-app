import React, { useState } from 'react';
import { Product } from '../types/product';

type CartItems = { id: string; name: string; quantity: number };
type Cart = CartItems[];
type CartState = {
  cart: Cart;
  removeItem: (id: string) => void;
  changeQuantity: (id: string, amount: number) => void;
  addItem: (product: Product) => void;
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

export const removeItemFactory =
  (setCart: React.Dispatch<React.SetStateAction<Cart>>) =>
  (id: string): void => {
    setCart((currCart) => currCart.filter((cartItem) => id !== cartItem.id));
  };

export const changeQuantityFactory =
  (setCart: React.Dispatch<React.SetStateAction<Cart>>) =>
  (id: string, amount: number): void => {
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

export const addItemFactory =
  (cart: Cart, setCart: React.Dispatch<React.SetStateAction<Cart>>) =>
  (product: Product): void => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCart((currCart) => {
        return currCart.map((currItem) => {
          if (currItem.id === product.id) {
            return { ...currItem, quantity: currItem.quantity + 1 };
          }
          return { ...currItem };
        });
      });
    } else {
      setCart((currCart) => [
        ...currCart,
        { id: product.id, name: product.name, quantity: 1 },
      ]);
    }
  };

export const CartContext = React.createContext<CartState>(startingCart);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Cart>([]);
  const removeItem = removeItemFactory(setCart);
  const changeQuantity = changeQuantityFactory(setCart);
  const addItem = addItemFactory(cart, setCart);

  return (
    <CartContext.Provider value={{ cart, removeItem, changeQuantity, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
