import styled from 'styled-components';
import { ContextualColors } from '../../../styles';

const ButtonContainer = styled.button<{ color: keyof ContextualColors }>`
  width: 100%;
  background: ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme, color }) => theme.palette[color].contrast};
  padding: ${({ theme }) => theme.sizes.spacing.md};
  font-size: ${({ theme }) => theme.sizes.fonts.md};
  outline: none;
  border: 1px solid ${({ theme, color }) => theme.palette[color].contrast};
  cursor: pointer;

  & i {
    margin-left: 0.5rem;
  }
`;

export const Button = ({
  color = 'primary',
  text,
  handleClick,
}: {
  color?: keyof ContextualColors;
  text: string;
  handleClick: () => void;
}) => {
  return (
    <ButtonContainer onClick={handleClick} color={color}>
      {text} <i className={'fa-solid fa-bag-shopping'}></i>
    </ButtonContainer>
  );
};
