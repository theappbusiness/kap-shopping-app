import { ReactElement } from 'react';
import styled from 'styled-components';
import { ContextualColors } from '../../../styles';

const StyledBadge = styled.div<{ color: keyof ContextualColors }>`
  border: 2px solid ${({ theme, color }) => theme.palette[color].contrast};
  background: ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme, color }) => theme.palette[color].contrast};
  border-radius: 50px;
  width: 3%;
  display: flex;
  justify-content: center;

  p {
    overflow: hidden;
  }
`;

export const Badge = ({
  color = 'secondary',
  label,
}: {
  color?: keyof ContextualColors;
  label: string;
}): ReactElement => {
  return (
    <StyledBadge color={color}>
      <p>{label}</p>
    </StyledBadge>
  );
};
