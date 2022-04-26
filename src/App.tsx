import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Auth0ProviderWithNavigate } from './auth/Auth0ProviderWithNavigate';
import { Routes } from './Routes';
import { GlobalStyle, theme } from './styled';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  );
};
