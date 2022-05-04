import { render, screen } from './test-utils';
import { App } from './App';
import { mockProductsResponse } from './mocks/mockProductResponse';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { registerIcons } from './registerIcons';
// jest.mock('./auth/Auth0ProviderWithNavigate', () => ({
//   Auth0ProviderWithNavigate: ({ children }: { children: ReactNode }) => (
//     <>{children}</>
//   ),
// }));

describe('React Router', () => {
  it('renders Header and Footer', async () => {
    registerIcons();
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    render(<Footer />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
