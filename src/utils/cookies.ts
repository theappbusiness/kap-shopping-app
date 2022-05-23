export const createCartCookie = (cartId: string): void => {
  const date = new Date();
  date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);

  document.cookie = `cartId=${cartId}; expires=${date.toUTCString()};`;
};
