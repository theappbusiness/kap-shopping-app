import { userEvent } from '@storybook/testing-library';
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

  it('Renders Hamburger Menu Icon', () => {
    render(<Header />);
    const hamburgerIcon = screen.getByTestId('hamburger-icon');
    expect(hamburgerIcon).toBeInTheDocument();
  });

  it('Renders Search Icon', () => {
    render(<Header />);
    const searchIcon = screen.getByTestId('magnifying-glass');
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

  it('Displays the SearchInput component when the user clicks the search button, then removes it when clicked again ', async () => {
    render(<Header />);

    const searchInput = screen.queryByRole('textbox');
    expect(searchInput).not.toBeInTheDocument();

    const searchIcon = screen.getByTestId('magnifying-glass');
    userEvent.click(searchIcon);
    const searchInputDisplayed = await screen.findByRole('textbox');
    expect(searchInputDisplayed).toBeInTheDocument();

    userEvent.click(searchIcon);
    const searchInputNone = screen.queryByRole('textbox');
    expect(searchInputNone).not.toBeInTheDocument();
  });
});
