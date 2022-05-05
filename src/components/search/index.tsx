import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { getSearchResults } from '../../services/product.service';
import { Alert } from '../general/Alert';
import { Button } from '../general/button';
import { Input } from '../general/input';

const StyledButton = styled.div`
  width: 20%;
`;

export const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleClick = async () => {
    try {
      const searchData = await getSearchResults(searchTerm);
      console.log(searchData);
    } catch (err: unknown) {
      if (err instanceof Error) {
        return <Alert color="warning">{err.message}</Alert>;
      }
    }
  };

  return (
    <>
      <Input
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search Shoply"
      />
      <StyledButton>
        <Button handleClick={handleClick}>Search</Button>
      </StyledButton>
    </>
  );
};
