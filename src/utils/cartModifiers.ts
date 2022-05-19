import { Cart } from '../contexts/Cart';

export const changeQuantity = (
  id: string,
  amount: number,
  setCart: React.Dispatch<React.SetStateAction<Cart>>
): void => {
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
export const removeItem = (
  id: string,
  setCart: React.Dispatch<React.SetStateAction<Cart>>
): void => {
  setCart((currCart) => currCart.filter((cartItem) => id !== cartItem.id));
};
