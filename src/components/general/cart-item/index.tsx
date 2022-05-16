import styled from 'styled-components';
import { Button } from '../button';
import { IconButton } from '../icon-button/IconButton';

type alterAmount = 'increase' | 'decrease';

type CartItemProp = {
  imgSrc: string;
  name: string;
  quantity: number;
  alterQuantity: (alter: alterAmount) => void;
  removeItem: () => void;
};

const StyledCartItem = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.sizes.spacing.md};
  background-color: ${({ theme }) => theme.colors.white};

  img {
    height: 100px;
    width: auto;
    margin-right: ${({ theme }) => theme.sizes.spacing.md};
  }

  .cart-info-div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cart-info-div h3 {
    font-size: ${({ theme }) => theme.sizes.fonts.xl};
    font-weight: 500;
  }

  .cart-quantity-div {
    display: flex;
    align-items: center;
  }

  .cart-quantity-div p {
    padding: ${({ theme }) => theme.sizes.spacing.sm};
    margin: 0;
  }
`;

const StyledRemoveButton = styled(Button)`
  border: 0;
  padding: 0;
  text-align: left;
  text-decoration: underline;
`;

const StyledQuantityButton = styled(IconButton)`
  font-size: ${({ theme }) => theme.sizes.fonts.sm};
`;

export const CartItem: React.FC<CartItemProp> = ({
  imgSrc,
  name,
  quantity,
  alterQuantity,
  removeItem,
}) => {
  return (
    <StyledCartItem>
      <img src={imgSrc} alt={name} />
      <div className="cart-info-div">
        <h3>{name}</h3>
        <div className="cart-quantity-div">
          <StyledQuantityButton
            iconName="minus"
            onClick={() => alterQuantity('decrease')}
          />
          <p>{quantity}</p>
          <StyledQuantityButton
            iconName="plus"
            onClick={() => alterQuantity('increase')}
          />
        </div>
        <StyledRemoveButton color="secondary" handleClick={() => removeItem()}>
          Remove from cart
        </StyledRemoveButton>
      </div>
    </StyledCartItem>
  );
};
