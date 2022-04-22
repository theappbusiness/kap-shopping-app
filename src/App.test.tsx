import { ReactNode } from 'react';
import { render, screen, waitFor } from './test-utils';
import { App } from './App';
import { mockProductsResponse } from './mocks/mockProductResponse';
jest.mock('./auth/Auth0ProviderWithNavigate', () => ({
  Auth0ProviderWithNavigate: ({ children }: { children: ReactNode }) => (
    <>{children}</>
  ),
}));

describe('React Router', () => {
  it('App renders Home Page', async () => {
    render(<App />);
    for (const product of mockProductsResponse.products) {
      const element = await screen.findByText(product._source.name);
      expect(element).toBeInTheDocument();
    }
  });
});
