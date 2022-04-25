import { render, screen } from './test-utils';
import { App } from './App';

describe('React Router', () => {
  it('App renders Home Page', () => {
    render(<App />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
