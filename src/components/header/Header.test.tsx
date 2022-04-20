import { render, screen } from '../../test-utils';
import Header from './Header';

describe('Header', () => {
  it('Renders header element', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  it('Renders Hamburger Menu Icon', () => {
    render(<Header />);
    const hamburgerIcon = screen.getByTestId('hamburger-icon');
    expect(hamburgerIcon).toBeInTheDocument();
  });
  it('Renders Search Icon', () => {
    render(<Header />);
    const searchIcon = screen.getByTestId('search-icon');
    expect(searchIcon).toBeInTheDocument();
  });
  it('Renders Basket Icon', () => {
    render(<Header />);
    const basketIcon = screen.getByTestId('basket-icon');
    expect(basketIcon).toBeInTheDocument();
  });
  it('Renders Shop Title', () => {
    render(<Header />);
    const shopTitle = screen.getByText('Shoply');
    expect(shopTitle).toBeInTheDocument();
  });
});
