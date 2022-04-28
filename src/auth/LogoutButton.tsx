import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { StyledAuthButton } from './StyledAuthButton';

export const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();
  return (
    <StyledAuthButton
      handleClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Log Out
    </StyledAuthButton>
  );
};
