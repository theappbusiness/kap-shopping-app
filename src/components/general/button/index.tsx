import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContextualColors } from '../../../styles';

const StyledButton = styled.button<{ color: keyof ContextualColors }>`
  width: 100%;
  background: ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme, color }) => theme.palette[color].contrast};
  padding: ${({ theme }) => theme.sizes.spacing.md};
  font-size: ${({ theme }) => theme.sizes.fonts.md};
  outline: none;
  border: 1px solid ${({ theme, color }) => theme.palette[color].contrast};
  cursor: pointer;

  & .button-icon {
    margin-left: 0.5rem;
  }
`;

export const Button = ({
  color = 'primary',
  children,
  handleClick,
  iconName,
}: {
  color?: keyof ContextualColors;
  children: React.ReactChild;
  handleClick: () => void;
  iconName?: IconProp;
}): ReactElement => {
  return (
    <StyledButton onClick={handleClick} color={color}>
      {children}
      {iconName && (
        <FontAwesomeIcon
          icon={iconName}
          className="button-icon"
          data-testid="button-icon"
        />
      )}
    </StyledButton>
  );
};
