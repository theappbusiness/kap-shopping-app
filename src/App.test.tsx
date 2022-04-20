import { render, screen } from './test-utils';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router, MemoryRouter } from 'react-router-dom';

import App from './App';

describe('React Router', () => {
  it('Renders Home Page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
  it('Renders Products Page', () => {
    render(
      <MemoryRouter initialEntries={['/products']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Products Page')).toBeInTheDocument();
  });
  it('Renders Product Details Page', () => {
    render(
      <MemoryRouter initialEntries={['/products/1']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Product Details Page')).toBeInTheDocument();
  });
  it('Renders Cart Page', () => {
    render(
      <MemoryRouter initialEntries={['/cart']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Cart Page')).toBeInTheDocument();
  });
  it('Renders Payment', () => {
    render(
      <MemoryRouter initialEntries={['/payment']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('Payment Page')).toBeInTheDocument();
  });
});
