export const createCartCookie = (cartId: string): void => {
  document.cookie = `cartId=${cartId}; expires=${new Date(
    2100,
    4,
    20
  ).toUTCString()};`;
};
