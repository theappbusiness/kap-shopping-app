import debounce from 'lodash.debounce';
import { useMemo, useEffect, useState } from 'react';
import styled from 'styled-components';
import * as React from 'react';
import { getSearchResults } from '../../services/product.service';
import { Alert } from '../general/Alert';
import { Input } from '../general/input';
import { List } from '../general/list';

type ProductItem = {
  name: string;
  id: string;
};
const StyledSearchInput = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
`;

const formatSearch = (searchTerm: string): string => {
  return searchTerm.split(/\s+/).join('&');
};
let searchTerm = '';
export const SearchInput: React.FC = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    searchTerm = e.target.value;
    try {
      const search = formatSearch(searchTerm);
      const searchData = await getSearchResults(search);
      const products = searchData.map((product) => {
        return { name: product.name, id: product.id };
      });
      setProducts(products);
    } catch (err: unknown) {
      if (err instanceof Error) {
        return <Alert color="warning">{err.message}</Alert>;
      }
    }
  };

  const debouncedHandleChange = useMemo(() => debounce(handleChange, 200), []);

  useEffect(() => {
    return debouncedHandleChange.cancel();
  }, []);

  return (
    <>
      <StyledSearchInput>
        <Input
          onChange={debouncedHandleChange}
          type="text"
          placeholder="Search Shoply"
          data-testid="search-input"
        />
      </StyledSearchInput>
      {searchTerm && <List items={products} />}
    </>
  );
};
