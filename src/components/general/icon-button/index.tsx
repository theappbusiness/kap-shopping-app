import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import React, { ReactElement } from 'react';
import { SvgIcon } from '../icon';

type ButtonSize = 'x-small' | 'small' | 'medium';

export const StyledSvgContainer = styled.button<{
  stroke: 'true' | 'false';
  buttonSize?: ButtonSize;
}>`
  height: ${({ buttonSize }) =>
    buttonSize === 'x-small'
      ? '30px'
      : buttonSize === 'small'
      ? `36px`
      : '48px'};
  width: ${({ buttonSize }) =>
    buttonSize === 'x-small'
      ? '30px'
      : buttonSize === 'small'
      ? `36px`
      : '48px'};
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid
    ${({ stroke, theme }) =>
      stroke === 'true' ? theme.colors.Grey70 : 'transparent'};
  position: relative;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.Orange30};
  }

  @supports selector(:focus-visible) {
    &:focus {
      background-color: transparent;
    }

    &:hover,
    &:focus-visible {
      background-color: ${({ theme }) => theme.colors.Orange30};
    }
  }
`;

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  buttonSize?: ButtonSize;
  iconWidth?: 24 | 48;
  stroke: 'true' | 'false';
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  iconName?: IconProp;
}

export const IconButton = (props: ButtonProps): ReactElement => {
  const { Icon, iconWidth, iconName, children, ...rest } = props;
  return (
    <StyledSvgContainer {...rest}>
      {Icon && <SvgIcon Icon={Icon} width={iconWidth} />}
      {iconName && <FontAwesomeIcon icon={iconName} data-testid={iconName} />}
      {children}
    </StyledSvgContainer>
  );
};
