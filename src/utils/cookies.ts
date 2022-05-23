export const createCartCookie = (cartId: string): void => {
  const date = new Date();
  const thirtyDays = 30 * 24 * 60 * 60 * 1000;
  date.setTime(date.getTime() + thirtyDays);

  document.cookie = `cartId=${cartId}; expires=${date.toUTCString()};`;
};
