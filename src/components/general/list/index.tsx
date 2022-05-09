import styled from 'styled-components';

const StyledListItem = styled.li`
  padding: ${({ theme }) => theme.sizes.spacing.md};
  border-top: -1px solid ${({ theme }) => theme.colors.dark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
  font-weight: 300;

  :first-of-type {
    border-top: none;
  }

  :last-of-type {
    border-bottom: none;
  }
`;

type Items = string[] | [];

export const List: React.FC<{ items: Items }> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <StyledListItem key={item}>{item}</StyledListItem>
      ))}
    </ul>
  );
};
