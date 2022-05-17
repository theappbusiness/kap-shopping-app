import styled from 'styled-components';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};
