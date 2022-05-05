import { useState } from 'react';
import styled from 'styled-components';
import { getSearchResults } from '../../services/product.service';
import { Button } from '../general/button';
import { Input } from '../general/input';

const StyledButton = styled.div`
  width: 20%;
`;

export const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleClick = () => {
    getSearchResults(searchTerm).then((data) => console.log(data));
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
