import { ReactElement } from 'react';
import styled from 'styled-components';
import { ContextualColors } from '../../../styles';

const StyledBadge = styled.span<{ color: keyof ContextualColors }>`
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
`;

export const Badge = ({
  color = 'secondary',
  label,
  className,
}: {
  color?: keyof ContextualColors;
  label: number;
  className?: string;
}): ReactElement => {
  return (
    <StyledBadge className={className} color={color}>
      {label}
    </StyledBadge>
  );
};
