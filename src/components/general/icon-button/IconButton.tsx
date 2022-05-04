import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: ${({ theme }) => theme.sizes.fonts.xl};
  margin: 0 ${({ theme }) => theme.sizes.spacing.md};
  vertical-align: middle;
  cursor: pointer;

  .button-icon {
    display: flex;
    justify-content: center;
  }

  &:hover {
    filter: opacity(0.7);
  }
`;

export const IconButton: React.FC<{
  iconName: IconProp;
  onClick: () => void;
}> = ({ iconName, onClick }) => {
  return (
    <StyledIconButton onClick={onClick}>
      <FontAwesomeIcon
        icon={iconName}
        className="button-icon"
        data-testid={iconName}
      />
    </StyledIconButton>
  );
};
