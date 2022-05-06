import styled from 'styled-components';

const StyledListItem = styled.li`
  padding: ${({ theme }) => theme.sizes.spacing.md};
  border-top: -1px solid ${({ theme }) => theme.colors.dark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  font-weight: 300;

`;

type Item = string;

export const List: React.FC<{ item: Item }> = ({ item }) => {
  return (
    <ul>
      <StyledListItem key={item}>{item}</StyledListItem>
    </ul>
  );
};
