const HOST = 'http://ec2-54-153-84-234.us-west-1.compute.amazonaws.com';
export const API = `${HOST}/api/v1`;
export const API_GET_PRODUCTS = `${API}/products`;
export const API_GET_PRODUCT = (id: string): string =>
  `${API_GET_PRODUCTS}/${id}`;
export const API_SEARCH_PRODUCT = (searchTerm: string) =>
  `${API_GET_PRODUCTS}?search=${searchTerm}`;
