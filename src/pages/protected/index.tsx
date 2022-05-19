import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Spinner } from '../../components/general/Spinner';
import { API } from '../../constants/api';

export const Protected: React.FC = () => {
  const [message, setMessage] = useState('');
  const { user } = useAuth0();
  const { getAccessTokenSilently } = useAuth0();

  const getProtectedRoute = async () => {
    try {
      const token = await getAccessTokenSilently();

      const { data } = await axios(`${API}/protected`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage(data);
    } catch (error: unknown) {
      if (error instanceof Error) setMessage(error.message);
    }
  };

  useEffect(() => {
    getProtectedRoute();
  }, []);

  return (
    <div>
      <p>Protected Page. Hello, {user?.name}!</p>
      <p>Response from the API: {message}</p>
    </div>
  );
};

export const ProtectedPage = withAuthenticationRequired(Protected, {
  onRedirecting: () => <Spinner />,
});
