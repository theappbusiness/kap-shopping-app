import { getSearchResults } from '../../services/product.service';
import { Input } from '../general/input';

export const SearchInput: React.FC = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    getSearchResults(e.target.value).then((data) => console.log(data));
  };

  return (
    <Input onChange={handleChange} type="text" placeholder="Search Shoply" />
  );
};
