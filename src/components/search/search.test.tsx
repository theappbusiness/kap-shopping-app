import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { API_GET_PRODUCTS } from '../../constants/api';
import { mockProductsResponse } from '../../mocks/mockProductResponse';
import { server } from '../../mocks/server';
import { screen, render } from '../../test-utils';
import { SearchInput } from '.';

describe('Search', () => {
  it('renders correct results in a list on screen depending on search input', async () => {
    server.resetHandlers(
      rest.get(`${API_GET_PRODUCTS}`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(mockProductsResponse));
      })
    );
    render(<SearchInput />);
    const input = screen.getByTestId('search-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');

    await userEvent.type(input, 'Football Everybody');
    const resultInput = await screen.findByText('Football Everybody');
    expect(resultInput).toBeInTheDocument();

    userEvent.clear(input);
    await userEvent.type(input, 'Table');
    const tableTextEL = await screen.findByText('Table');
    expect(tableTextEL).toBeInTheDocument();
  });
});
