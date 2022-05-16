import styled from 'styled-components';
import { ContextualColors } from '../../../styles';

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends Record<string, unknown>
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

type TopCorners = XOR<
  { top: CSSMeaurement; right: CSSMeaurement },
  { top: CSSMeaurement; left: CSSMeaurement }
>;
type BottomCorners = XOR<
  { bottom: CSSMeaurement; right: CSSMeaurement },
  { bottom: CSSMeaurement; left: CSSMeaurement }
>;

type PositionProps = XOR<TopCorners, BottomCorners>;

type CSSUnit = 'px' | 'rem';

type CSSMeaurement = `${number}${CSSUnit}`;

const StyledBadge = styled.span<
  {
    color: keyof ContextualColors;
  } & PositionProps
>`
  border: 2px solid ${({ theme, color }) => theme.palette[color].contrast};
  background: ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme, color }) => theme.palette[color].contrast};
  font-size: ${({ theme }) => theme.sizes.fonts.xs};
  padding: ${({ theme }) => theme.sizes.spacing.sm}
    ${({ theme }) => theme.sizes.spacing.md};
  border-radius: 50px;
  display: inline-block;
  min-height: ${({ theme }) => theme.sizes.spacing.xl};
  min-width: ${({ theme }) => theme.sizes.spacing.xl};
  position: absolute;
  user-select: none;
  ${({ bottom }) => `bottom: ${bottom};`}
  ${({ right }) => `right: ${right};`}
  ${({ top }) => `top: ${top};`}
  ${({ left }) => `left: ${left};`}
`;

export const Badge: React.FC<
  { color?: keyof ContextualColors; label: number | string } & PositionProps
> = ({ color = 'secondary', label, ...positionprops }) => {
  return (
    <StyledBadge {...positionprops} color={color}>
      {label}
    </StyledBadge>
  );
};
