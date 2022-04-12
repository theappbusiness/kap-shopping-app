import * as React from 'react';
import { Product } from '../types/product';
import { getProductsData } from '../services/product.service';

type useProductsDataType = {
  products: Product[];
  error: Error | null;
  loading: boolean;
};

export const useProductsData = () => {
  const [state, setState] = React.useState<useProductsDataType>({
    products: [],
    loading: true,
    error: null,
  });

  React.useEffect(() => {
    const getProducts = async () => {
      try {
        setState((s) => ({
          ...s,
          loading: true,
        }));

        const products = await getProductsData();

        setState((s) => ({
          ...s,
          products,
          loading: false,
        }));
      } catch (error) {
        if (error instanceof Error) {
          setState((s) => ({
            ...s,
            loading: false,
            error: error as Error,
          }));
        } else {
          setState((s) => ({
            ...s,
            loading: false,
            error: new Error('Something went wrong'),
          }));
        }
      }
    };

    getProducts();
  }, []);

  return state;
};
