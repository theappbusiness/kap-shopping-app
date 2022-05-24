import { render, screen } from '../../test-utils';
import { MemoryRouter } from 'react-router-dom';
import { registerIcons } from '../../registerIcons';
import { HomePage } from '../../pages/home';
import { CartProvider } from '.';
registerIcons();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

// describe('Test', () => {
//   beforeAll(() => {
//     Object.defineProperty(window, 'matchMedia', {
//       writable: true,
//       value: jest.fn().mockImplementation((query) => ({
//         matches: false,
//         media: query,
//         onchange: null,
//         addListener: jest.fn(), // Deprecated
//         removeListener: jest.fn(), // Deprecated
//         addEventListener: jest.fn(),
//         removeEventListener: jest.fn(),
//         dispatchEvent: jest.fn(),
//       })),
//     });
//   });

it('renders something', async () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  render(
    <CartProvider>
      {' '}
      <HomePage />
    </CartProvider>
  );
  //  handlers for things
  const addToCartButton = await screen.findByRole('button', {
    name: /Add to cart/,
  });
  expect(addToCartButton).toBeInTheDocument();
});
// });
