import { registerIcons } from '../../registerIcons';
import { render, screen } from '../../test-utils';
import { Header } from './Header';
registerIcons();

describe('Header', () => {
  it('Renders Header element', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });

  it('Renders Menu Icon', () => {
    render(<Header />);
    const hamburgerIcon = screen.getByTestId('menu-icon');
    expect(hamburgerIcon).toBeInTheDocument();
  });

  it('Renders Like Icon', () => {
    render(<Header />);
    const likeIcon = screen.getByTestId('like-icon');
    expect(likeIcon).toBeInTheDocument();
  });

  it('Renders Cart Icon', () => {
    render(<Header />);
    const cartIcon = screen.getByTestId('cart-icon');
    expect(cartIcon).toBeInTheDocument();
  });

  it('Renders Shop Title', () => {
    render(<Header />);
    const shopTitle = screen.getByText('JUNO');
    expect(shopTitle).toBeInTheDocument();
  });
});
