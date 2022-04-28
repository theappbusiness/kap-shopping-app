import styled from 'styled-components';
import { Button } from '../components/general/button';

export const StyledAuthButton = styled(Button)`
  width: auto;
  padding: ${({ theme }) => theme.sizes.spacing.sm};
  margin: 0 ${({ theme }) => theme.sizes.spacing.sm};
`;
