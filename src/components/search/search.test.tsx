import { screen, render } from '../../test-utils';
import { List } from '../general/list';

const mockProducts = [
  { name: 'Chair', id: 'ID12' },
  { name: 'Football', id: 'ID13' },
  { name: 'Sofa', id: 'ID14' },
];

describe('Search', () => {
  it('renders correct results in a list on screen depending on search input', () => {
    render(<List items={mockProducts} />);
    const chairListItem = screen.getByText('Chair');
    const footballListItem = screen.getByText('Football');
    const sofaListItem = screen.getByText('Sofa');
    expect(chairListItem).toBeInTheDocument();
    expect(footballListItem).toBeInTheDocument();
    expect(sofaListItem).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
