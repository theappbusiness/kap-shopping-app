import styled from 'styled-components';
import { Button } from '../button';
import { IconButton } from '../icon-button/IconButton';

type CartItemProp = {
  imgSrc: string;
  name: string;
  quantity: number;
  onDecreaseStepperClick: () => void;
  onIncreaseStepperClick: () => void;
  onRemoveClick: () => void;
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

export const CartItem: React.FC<CartItemProp> = ({
  imgSrc,
  name,
  quantity,
  onIncreaseStepperClick,
  onDecreaseStepperClick,
  onRemoveClick,
}) => {
  return (
    <StyledCartItem>
      <img src={imgSrc} alt={name} />
      <div className="cart-info-div">
        <h3>{name}</h3>
        <div className="cart-quantity-div">
          <IconButton iconName="minus" onClick={onDecreaseStepperClick} />
          <p>{quantity}</p>
          <IconButton iconName="plus" onClick={onIncreaseStepperClick} />
        </div>
        <StyledRemoveButton color="secondary" handleClick={onRemoveClick}>
          Remove from cart
        </StyledRemoveButton>
      </div>
    </StyledCartItem>
  );
};
