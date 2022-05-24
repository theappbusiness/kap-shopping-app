export const createCartCookie = (cartId: string): void => {
  const date = new Date();
  const thirtyDays = 30 * 24 * 60 * 60 * 1000;
  date.setTime(date.getTime() + thirtyDays);

  document.cookie = `cartId=${cartId}; expires=${date.toUTCString()};`;
};

type Cookies = {
  cartId?: string;
};

export const getCartCookie = (): string | undefined => {
  const cookies: Cookies = document.cookie
    .split(';')
    .map((cookie) => cookie.split('='))
    .reduce(
      (prevObj, [key, value]) => ({
        ...prevObj,
        [key.trim()]: value,
      }),
      {}
    );

  return 'cartId' in cookies ? cookies.cartId : '';
};
