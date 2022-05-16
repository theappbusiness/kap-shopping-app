import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { ContextualColors } from '../../../styles.d';

const StyledIconButton = styled.button<{
  isActive: boolean;
  color: keyof ContextualColors;
}>`
  background-color: ${({ theme, isActive, color }) =>
    isActive ? theme.palette[color].contrast : 'transparent'};
  border: none;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.sizes.fonts.xl};
  padding:${({ theme }) => theme.sizes.spacing.sm};
  margin: 0 ${({ theme }) => theme.sizes.spacing.md};
  vertical-align: middle;
  cursor: pointer;

  .button-icon {
    color: ${({ theme, isActive, color }) =>
      isActive ? theme.palette[color].main : theme.palette[color].contrast};
  }
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
  isActive?: boolean;
  children?: React.ReactNode;
  color?: keyof ContextualColors;
}> = ({
  iconName,
  children,
  onClick,
  isActive = false,
  color = 'secondary',
}) => {
  return (
    <StyledIconButton onClick={onClick} isActive={isActive} color={color}>
      <FontAwesomeIcon
        icon={iconName}
        className="button-icon"
        data-testid={iconName}
      />
      {children}
    </StyledIconButton>
  );
};
