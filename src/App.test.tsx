import { render, screen } from './test-utils';
import { App } from './App';
import { mockProductsResponse } from './mocks/mockProductResponse';
// jest.mock('./auth/Auth0ProviderWithNavigate', () => ({
//   Auth0ProviderWithNavigate: ({ children }: { children: ReactNode }) => (
//     <>{children}</>
//   ),
// }));

describe('React Router', () => {
  it('App renders Home Page', async () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
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
    render(<App />);
    for (const product of mockProductsResponse.products) {
      const element = await screen.findByText(product._source.name);
      expect(element).toBeInTheDocument();
    }
  });
});
