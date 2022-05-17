import React from 'react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Spinner } from '../../components/general/Spinner';

export const Protected: React.FC = () => {
  const { user } = useAuth0();

  return <div>Protected Page. Hello, {user?.name}!</div>;
};

export const ProtectedPage = withAuthenticationRequired(Protected, {
  onRedirecting: () => <Spinner />,
});
