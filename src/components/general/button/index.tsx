import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContextualColors } from '../../../styles';
import { Icon } from '../../../types/icon';
import { registerIcons } from '../../../registerIcons';
registerIcons();

const ButtonContainer = styled.button<{ color: keyof ContextualColors }>`
  width: 100%;
  background: ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme, color }) => theme.palette[color].contrast};
  padding: ${({ theme }) => theme.sizes.spacing.md};
  font-size: ${({ theme }) => theme.sizes.fonts.md};
  outline: none;
  border: 1px solid ${({ theme, color }) => theme.palette[color].contrast};
  cursor: pointer;

  & .buttonIcon {
    margin-left: 0.5rem;
  }
`;

export const Button = ({
  color = 'primary',
  text,
  handleClick,
  iconName,
}: {
  color?: keyof ContextualColors;
  text: string;
  handleClick: () => void;
  iconName?: Icon;
}) => {
  return (
    <ButtonContainer onClick={handleClick} color={color}>
      {text}
      {iconName && (
        <FontAwesomeIcon
          icon={iconName}
          className="buttonIcon"
          data-testid="button-icon"
        />
      )}
    </ButtonContainer>
  );
};
