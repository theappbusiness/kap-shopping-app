const HOST = "http://54.153.84.234";
export const API = `${HOST}/api/v1`;
export const API_GET_PRODUCTS = `${API}/products`;
export const API_GET_PRODUCT = (id: string) => `${API_GET_PRODUCTS}/${id}`;
