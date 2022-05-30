import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ContextualColors } from '../../../styles.d';

const StyledButton = styled.button<{
  color: keyof ContextualColors;
}>`
  width: 100%;
  height: fit-content;
  background: ${({ theme, color }) => theme.paletteV2[color].main};
  color: ${({ theme, color }) => theme.paletteV2[color].contrast};
  box-shadow: 3px 3px ${({ color, theme }) => theme.paletteV2[color].shadow};
  border: 1px solid ${({ color, theme }) => theme.paletteV2[color].borderColor};
  border-radius: ${({ color, theme }) => theme.paletteV2[color].borderRadius};
  padding: ${({ theme }) => theme.sizes.spacing.md};
  font-size: ${({ theme }) => theme.sizes.fonts.md};
  font-weight: 400;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover,
  :focus {
    background: ${({ theme, color }) => theme.paletteV2[color].hover};
    box-shadow: 3px 3px
      ${({ color, theme }) => theme.paletteV2[color].hoverShadow};
    color: ${({ theme, color }) => theme.paletteV2[color].main};
  }

  @supports selector(:focus-visible) {
    &:focus {
      background: ${({ theme, color }) => theme.paletteV2[color].main};
      box-shadow: 3px 3px ${({ color, theme }) => theme.paletteV2[color].shadow};
      color: ${({ theme, color }) => theme.paletteV2[color].contrast};
    }

    &:hover,
    &:focus-visible {
      background: ${({ theme, color }) => theme.paletteV2[color].hover};
      box-shadow: 3px 3px
        ${({ color, theme }) => theme.paletteV2[color].hoverShadow};
      color: ${({ theme, color }) => theme.paletteV2[color].main};
    }
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
    <StyledButton className={className} onClick={handleClick} color={color}>
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
