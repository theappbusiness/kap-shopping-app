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

export const SearchInput: React.FC = () => {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Search term: ', e.target.value);
    try {
      const searchData = await getSearchResults(e.target.value);
      console.log(searchData);
    } catch (err: unknown) {
      if (err instanceof Error) {
        return (
          <Alert color="warning" data-testid="search-input-alert">
            {err.message}
          </Alert>
        );
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
