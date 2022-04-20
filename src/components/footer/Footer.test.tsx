import Footer from './Footer';
import { render, screen } from '../../test-utils';

test('Footer renders a footer element', () => {
  render(<Footer />);
  const footer = screen.getByTestId('footer');
  expect(footer).toBeInTheDocument();
});

test('Footer renders 3 social media icons', () => {
  render(<Footer />);
  const socialMediaIcons = screen.getAllByTestId('social-media');
  expect(socialMediaIcons).toHaveLength(3);
});
