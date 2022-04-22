import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppState,
  Auth0Provider,
  Auth0ProviderOptions,
} from '@auth0/auth0-react';

interface Auth0ProviderWithNavigateProps {
  children: React.ReactNode;
  opts: Auth0ProviderOptions;
}

export const Auth0ProviderWithNavigate: React.FC<
  Auth0ProviderWithNavigateProps
> = ({ children }: Auth0ProviderWithNavigateProps) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;

  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
