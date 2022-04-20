import { render, screen } from './test-utils';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { BrowserRouter, Router, MemoryRouter } from 'react-router-dom';

import App from './App';

describe('React Router', () => {
  it('Renders Home Page', () => {
    render(<App />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
  it('Renders Product Page', () => {
    const history = createMemoryHistory();
    const route = '/products';
    history.push(route);
    render(
      <MemoryRouter initialEntries={['/products']}>
        <App />
      </MemoryRouter>
    );
  });
});
