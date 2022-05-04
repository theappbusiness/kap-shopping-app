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
    height: 100%;
    padding: 0;
  }
  p > h3 {
    font-size: ${({ theme }) => theme.sizes.fonts.xl};
    font-weight: lighter;
    color: ${({ theme }) => theme.colors.light};
  }
  p {
    position: absolute;
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.sizes.fonts.md};
    margin-top: ${({ theme }) => theme.sizes.spacing.xxl};
    margin-right: ${({ theme }) => theme.sizes.spacing.xxl};
    margin-left: ${({ theme }) => theme.sizes.spacing.xxl};
    background-color: rgb(0, 0, 0, 0.5);
    border-radius: 10px;
    padding: 10px;
  }
  img {
    width: 100%;
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
              900: {
                perPage: 2,
              },
            },
            perMove: 1,
            arrows: false,
            autoplay: true,
            interval: 2500,
            height: 390,
          }}
          className="container"
          aria-label="My Favorite Images"
        >
          {products.map((product) => {
            return (
              <SplideSlide key={product.id}>
                <div>
                  <p>
                    <h3>{product.name}</h3>
                    {product.description.slice(0, 300)}....
                  </p>
                  <img
                    src={`https://picsum.photos/seed/${product.name}/270`}
                    alt="Image 1"
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </StyledHero>
    );
  }
};
