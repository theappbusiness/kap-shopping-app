import debounce from 'lodash.debounce';
import { useMemo, useEffect } from 'react';
import styled from 'styled-components';
import * as React from 'react';
import { getSearchResults } from '../../services/product.service';
import { Alert } from '../general/Alert';
import { Input } from '../general/input';

const StyledSearchInput = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
`;

const formatSearch = (searchTerm: string): string => {
  return searchTerm.split(/\s+/).join('&');
};

export const SearchInput: React.FC = () => {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    console.log('Search term: ', searchTerm);
    try {
      const search = formatSearch(searchTerm);
      const searchData = await getSearchResults(search);
      console.log(searchData);
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
    <StyledSearchInput>
      <Input
        onChange={debouncedHandleChange}
        type="text"
        placeholder="Search Shoply"
      />
    </StyledSearchInput>
  );
};
