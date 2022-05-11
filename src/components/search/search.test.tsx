import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { waitFor } from '@testing-library/react';
import { API_GET_PRODUCTS } from '../../constants/api';
import { server } from '../../mocks/server';
import { screen, render } from '../../test-utils';
import { mockSearchResponse } from '../../mocks/mockSearchProductResponse';
import { SearchInput } from '.';

describe('Search', () => {
  it('renders correct results in a list on screen depending on search input', async () => {
    server.resetHandlers(
      rest.get(`${API_GET_PRODUCTS}`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockSearchResponse));
      })
    );
    render(<SearchInput />);
    const input = screen.getByTestId('search-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');

    await userEvent.type(input, 'Football');
    await waitFor(() => {
      expect(screen.getByText('Football Gloves')).toBeInTheDocument();
      expect(screen.getByText('Football Everybody')).toBeInTheDocument();
      expect(screen.getByText('Football Shoes')).toBeInTheDocument();
    });
    userEvent.clear(input);
    await waitFor(() => {
      expect(screen.queryByText('Football Gloves')).not.toBeInTheDocument();
      expect(screen.queryByText('Football Everybody')).not.toBeInTheDocument();
      expect(screen.queryByText('Football Shoes')).not.toBeInTheDocument();
    });
  });
});
