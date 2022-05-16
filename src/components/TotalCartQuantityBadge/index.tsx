import { useContext, useMemo } from 'react';
import { CartContext } from '../../contexts/Cart';
import { Badge } from '../general/badge';

export const TotalCartQuantityBadge: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { cart } = useContext(CartContext);
  const cartItemsCount = useMemo(() => {
    return cart.reduce((count, { quantity }) => count + quantity, 0);
  }, [cart]);
  return cartItemsCount > 0 ? (
    <Badge className={className} label={cartItemsCount} />
  ) : (
    <></>
  );
};
