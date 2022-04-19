import { render, screen } from '@testing-library/react';
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
});
