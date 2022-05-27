import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import React, { ReactElement } from 'react';
import { SvgIcon } from '../icon';

export const StyledSvgContainer = styled.button<{
  stroke?: 'true' | 'false';
  buttonSize: 'small' | 'medium';
}>`
  height: ${(props) => (props.buttonSize === 'small' ? `36px` : '48px')};
  width: ${(props) => (props.buttonSize === 'small' ? `36px` : '48px')};
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid
    ${(props) =>
      props.stroke === 'true' ? props.theme.colors.Grey70 : 'transparent'};
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
  buttonSize: 'small' | 'medium';
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
