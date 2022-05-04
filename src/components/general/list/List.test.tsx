import { render, screen } from '../../../test-utils';
import { List } from '.';

describe('List', () => {
  it('renders 0 list items when passed an empty array', () => {
    render(<List items={[]} />);

    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toEqual([]);
  });

  it('renders 1 list items when passed an array with 1 string element', () => {
    render(<List items={['test-string']} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(1);
  });

  it('renders 3 list items when passed an array with 1 string element', () => {
    render(
      <List items={['test-string 1', 'test-string 2', 'test-string 3']} />
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
});
