import styled from 'styled-components';
import Header from './components/header/Header';
import ProductTiles from './components/product-tiles/ProductTiles';
import Footer from './components/footer/Footer';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <Header />
      <ProductTiles />
      <Footer />
    </Container>
  );
}

export default App;
