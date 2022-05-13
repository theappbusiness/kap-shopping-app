import React, { useState } from 'react';

type CartItems = { id: string; name: string; quantity: number };
type Cart = CartItems[];
type CartState = {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
};

const startingCart = {
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
  setCart: () => undefined,
};

const CartContext = React.createContext<CartState>(startingCart);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Cart>([
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
  ]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
