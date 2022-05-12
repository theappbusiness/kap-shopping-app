import React, { useState } from 'react';

type CartItems = { id: string; name: string; quantity: number };
type Cart = CartItems[];
type CartState = {
  cart: Cart;
  setCart: React.Dispatch<React.SetStateAction<Cart>>;
};
type CartProviderProps = { children: React.ReactNode };

const CartContext = React.createContext<CartState | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({
  children,
}: CartProviderProps) => {
  const startingBasket = [
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
  ];

  const [cart, setCart] = useState<Cart>(startingBasket);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
