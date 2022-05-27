import { ReactElement, useContext, useMemo } from 'react';
import { CartContext } from '../../contexts/Cart';
import { Badge } from '../general/badge';

export const TotalCartQuantityBadge = (): ReactElement => {
  const { cart } = useContext(CartContext);
  const cartItemsCount = useMemo(() => {
    return cart.reduce((count, { quantity }) => count + quantity, 0);
  }, [cart]);
  return cartItemsCount > 0 ? (
    <Badge bottom="0px" right="0px" label={cartItemsCount} />
  ) : (
    <></>
  );
};
