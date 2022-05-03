import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';
import '@splidejs/react-splide/css/sea-green';
import { useProductsData } from '../useProductsData';
import { Spinner } from '../general/Spinner';

const StyledHero = styled.div`

.container{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0;
    margin: auto;
    max-width: 600px;
}
h3{
    position: absolute;
    font-size: ${({ theme }) => theme.sizes.fonts.xl};
    font-weight: 300;
    margin: ${({ theme }) => theme.sizes.spacing.xl};
    color: ${({ theme }) => theme.colors.light};
}
p{
  position: absolute;
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.sizes.fonts.md};
  top: 10%;
  margin: ${({ theme }) => theme.sizes.spacing.xl};

}

}
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Hero = () => {
  const { products, loading } = useProductsData();

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <StyledHero>
        <Splide
          options={{
            rewind: true,
            arrows: false,
            autoplay: true,
            interval: 2000,
            height: 290,
          }}
          className="container"
          aria-label="My Favorite Images"
        >
          {products.map((product) => {
            return (
              <SplideSlide key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description.slice(0, 400)}</p>
                <img
                  src={`https://picsum.photos/seed/${product.name}/270`}
                  alt="Image 1"
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </StyledHero>
    );
  }
};
