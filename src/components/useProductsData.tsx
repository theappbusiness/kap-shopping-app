import * as React from "react";
import { Product } from "../types/product";
import { getProductData } from "../services/product.service";

type useProductsDataType = {
  products: Product[];
  error: Error | null;
  isLoading: boolean;
};

export const useProductsData = () => {
  const [state, setState] = React.useState<useProductsDataType>({
    products: [],
    isLoading: true,
    error: null,
  });

  React.useEffect(() => {
    const getProducts = async () => {
      setState((s) => ({
        ...s,
        loading: true,
      }));

      const products = await getProductData();

      setState((s) => ({
        ...s,
        products,
        loading: false,
      }));
    };

    try {
      getProducts();
    } catch (error) {
      if (error instanceof Error) {
        setState((s) => ({
          ...s,
          error: error as Error,
        }));
      } else {
        setState((s) => ({
          ...s,
          error: new Error("Something went wrong"),
        }));
      }
    }
  }, []);

  return state;
};
