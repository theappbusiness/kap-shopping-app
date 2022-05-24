import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContextualColors, Colors } from '../../../styles.d';
import { colors } from '../../../styled';

const StyledButton = styled.button<{
  colors: Colors;
  color: keyof ContextualColors;
}>`
  width: 100%;
  height: fit-content;
  background: ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme, color }) => theme.palette[color].contrast};
  box-shadow: 3px 3px ${({ color, theme }) => theme.paletteV2[color].shadow};
  border: 1px solid ${({ color, theme }) => theme.paletteV2[color].borderColor};
  border-radius: ${({ color, theme }) => theme.paletteV2[color].borderRadius};
  padding: ${({ theme }) => theme.sizes.spacing.md};
  font-size: ${({ theme }) => theme.sizes.fonts.md};
  outline: none;
  cursor: pointer;

  :hover {
    background: ${({ theme, color }) => theme.paletteV2[color].hover};
    box-shadow: 3px 3px
      ${({ color, theme }) => theme.paletteV2[color].hoverColor};
    color: ${({ colors }) => colors.primary};
  }
  & .button-icon {
    margin-left: 0.5rem;
  }
`;

export const Button = ({
  color = 'primary',
  children,
  handleClick,
  iconName,
  className,
}: {
  color?: keyof ContextualColors;
  children: React.ReactNode;
  handleClick: () => void;
  iconName?: IconProp;
  className?: string;
}): ReactElement => {
  return (
    <StyledButton
      className={className}
      onClick={handleClick}
      color={color}
      colors={colors}
    >
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
