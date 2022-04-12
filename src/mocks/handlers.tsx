import { rest } from 'msw';
import { API_GET_PRODUCTS } from '../constants/api';
import { mockProductsResponse, ProductResponse } from './mockProductResponse';

export const handlers = [
  rest.get<ProductResponse>(API_GET_PRODUCTS, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockProductsResponse));
  }),
];
