import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { StyledAuthButton } from './StyledAuthButton';

export const SignupButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <StyledAuthButton
      handleClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }
    >
      Sign Up
    </StyledAuthButton>
  );
};
