import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';
import { Spinner } from '../components/general/Spinner';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const DefaultLayout: React.FC = ({ children }) => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};
