import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../test-utils';
import AppRoutes from './AppRoutes';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));
describe('React Router', () => {
  it('Renders Products Page', () => {
    render(
      <MemoryRouter initialEntries={['/products']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText('Products Page')).toBeInTheDocument();
  });

  it('Renders Product Details Page', () => {
    render(
      <MemoryRouter initialEntries={['/products/1']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText('Product Details Page')).toBeInTheDocument();
  });

  it('Renders Cart Page', () => {
    render(
      <MemoryRouter initialEntries={['/cart']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText('Cart Page')).toBeInTheDocument();
  });

  it('Renders Payment', () => {
    render(
      <MemoryRouter initialEntries={['/payment']}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByText('Payment Page')).toBeInTheDocument();
  });
});
