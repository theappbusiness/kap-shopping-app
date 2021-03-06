const HOST = 'https://d1sq674fk5y5nl.cloudfront.net';
export const API = `${HOST}/api/v1`;
export const API_GET_PRODUCTS = `${API}/products`;
export const API_GET_PRODUCT = (id: string): string =>
  `${API_GET_PRODUCTS}/${id}`;
export const API_SEARCH_PRODUCT = (searchTerm: string): string =>
  `${API_GET_PRODUCTS}?search=${searchTerm}&limit=5`;
export const API_POST_ORDER = `${API}/orders`;
export const API_GET_ORDER = (id: string): string => `${API}/orders/${id}`;
