import { useContext, useMemo } from 'react';
import { CartContext } from '../../contexts/cart';
import { Badge } from '../general/badge';

export const TotalCartQuantityBadge = () => {
  const { cart } = useContext(CartContext);
  const cartItemsCount = useMemo(() => {
    return cart.reduce((count, { quantity }) => count + quantity, 0);
  }, [cart]);
  return cartItemsCount > 0 ? (
    <Badge bottom="-10px" right="-10px" label={cartItemsCount} />
  ) : (
    <></>
  );
};
