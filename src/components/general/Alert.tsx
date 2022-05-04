import styled from 'styled-components';
import { ContextualColors } from '../../styles.d';

// TODO: Add alert styles with a close button
export const Alert = styled.p<{ color: keyof ContextualColors }>`
  font-size: ${({ theme }) => theme.sizes.fonts.xl};
  padding: ${({ theme }) => theme.sizes.spacing.xl};
  margin: ${({ theme }) => theme.sizes.spacing.xxl};
  background: ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme, color }) => theme.palette[color].contrast};
`;
