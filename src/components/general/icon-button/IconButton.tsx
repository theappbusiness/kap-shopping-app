import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.sizes.fonts.xl};
  margin: 0 ${({ theme }) => theme.sizes.spacing.md};
  vertical-align: middle;
  cursor: pointer;

  .button-icon {
    display: flex;
    justify-content: center;
    margin: ${({ theme }) => theme.sizes.spacing.sm};
  }

  &:hover {
    filter: opacity(0.7);
  }
`;

export const IconButton: React.FC<{
  iconName: IconProp;
  onClick: () => void;
  className?: string;
}> = ({ iconName, onClick, className }) => {
  return (
    <StyledIconButton onClick={onClick} className={className}>
      <FontAwesomeIcon
        icon={iconName}
        className="button-icon"
        data-testid={iconName}
      />
    </StyledIconButton>
  );
};
