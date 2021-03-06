import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppState, Auth0Provider } from '@auth0/auth0-react';

interface Auth0ProviderWithNavigateProps {
  children: React.ReactNode;
}

export const Auth0ProviderWithNavigate: React.FC<
  Auth0ProviderWithNavigateProps
> = ({ children }: Auth0ProviderWithNavigateProps) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
