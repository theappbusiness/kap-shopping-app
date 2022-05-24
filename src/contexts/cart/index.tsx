import React, { useState, useEffect } from 'react';
import { getOrderData, postOrder } from '../../services/order.service';
import { createCartCookie, getCartCookie } from '../../utils/cookies';
import { Product } from '../../types/product';
import { useCart } from './useCart';

export type CartItems = { id: string; name: string; quantity: number };
export type Cart = CartItems[];
export type CartState = {
  cart: Cart;
  removeItem: (id: string) => void;
  changeQuantity: (id: string, amount: number) => void;
  addItem: (product: Product, amount: number) => void;
  addToCart: (product: Product) => void;
};

const startingCart = {
  cart: [],
  removeItem: (): void => undefined,
  changeQuantity: (): void => undefined,
  addItem: (): void => undefined,
  addToCart: (): void => undefined,
};

export const CartContext = React.createContext<CartState>(startingCart);

export const CartProvider: React.FC = ({ children }) => {
  const cart = useCart();

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};
