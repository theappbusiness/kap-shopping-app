import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';
import { ReactElement } from 'react';
import { useProductsData } from '../useProductsData';
import { Spinner } from '../general/Spinner';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const StyledHero = styled.div`
  .container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
  }
  h3 {
    position: absolute;
    font-size: ${({ theme }) => theme.sizes.fonts.xl};
    font-weight: lighter;
    margin: ${({ theme }) => theme.sizes.spacing.xl};
    color: ${({ theme }) => theme.colors.light};
  }
  p {
    position: absolute;
    top: 10%;
    margin-left: ${({ theme }) => theme.sizes.spacing.sm};
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.sizes.fonts.md};
    padding: 20px;
  }
  img {
    width: 100%;
  }
  .img-container {
    position: absolute;
    background-color: rgb(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
  }
`;

export const Hero = (): ReactElement => {
  const { products, loading } = useProductsData();

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <StyledHero>
        <Splide
          options={{
            rewind: true,
            perPage: 3,
            breakpoints: {
              600: {
                perPage: 1,
              },
              1000: {
                perPage: 2,
                height: 300,
              },
            },
            perMove: 1,
            arrows: false,
            autoplay: true,
            interval: 2500,
            height: 330,
          }}
          className="container"
          aria-label="My Favorite Images"
        >
          {products.map((product) => {
            return (
              <SplideSlide key={product.id}>
                <div className="img-container" />
                <h3>{product.name}</h3>
                <p>{product.description.slice(0, 300)}....</p>
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
