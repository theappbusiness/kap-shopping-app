import styled from 'styled-components';

const StyledInput = styled.input`
  border-radius: 20px;
  border: ${({ theme }) => theme.colors.dark} solid 1px;
  margin: ${({ theme }) => theme.sizes.spacing.sm};
  padding: ${({ theme }) => theme.sizes.spacing.sm}
    ${({ theme }) => theme.sizes.spacing.lg};
  font-size: ${({ theme }) => theme.sizes.fonts.lg};
  font-weight: 300;
`;

export const Input: React.FC<{
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ onChange }) => {
  return <StyledInput type="text" onChange={onChange} />;
};
