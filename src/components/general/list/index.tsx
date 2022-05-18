import styled from 'styled-components';

const StyledListItem = styled.li`
  background-color: ${({ theme }) => theme.colors.white};
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

type ProductItem = {
  name: string;
  id: string;
};

type Items = ProductItem[] | React.ReactElement[];

export const List: React.FC<{ items: Items }> = ({ items }) => {
  const isCartItemList = Object.prototype.hasOwnProperty.call(items[0], 'props')
    ? true
    : false;

  return (
    <ul data-testid={isCartItemList ? 'cart-list' : 'search-list'}>
      {items.map((item) => {
        if ('props' in item) {
          return <StyledListItem key={item.key}>{item}</StyledListItem>;
        }
        return <StyledListItem key={item.id}>{item.name}</StyledListItem>;
      })}
    </ul>
  );
};
