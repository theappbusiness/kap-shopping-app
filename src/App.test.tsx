import { render, screen } from './test-utils';
import { App } from './App';
import { mockProductsResponse } from './mocks/mockProductResponse';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
// jest.mock('./auth/Auth0ProviderWithNavigate', () => ({
//   Auth0ProviderWithNavigate: ({ children }: { children: ReactNode }) => (
//     <>{children}</>
//   ),
// }));

describe('React Router', () => {
  it('renders Header and Footer', async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    render(<Footer />);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
