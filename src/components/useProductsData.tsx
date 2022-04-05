import * as React from "react";
import { Product } from "../types/product";
import { getProductData } from "../services/product.service";

type useProductDataType = {
  product: Product | null;
  error: Error | null;
  isLoading: boolean;
};

export const useProductData = ({ id }: { id: string }) => {
  const [state, setState] = React.useState<useProductDataType>({
    product: null,
    isLoading: true,
    error: null,
  });

  React.useEffect(() => {
    const getProduct = async () => {
      setState((s) => ({
        ...s,
        loading: true,
      }));

      const product = await getProductData(id);

      setState((s) => ({
        ...s,
        product,
        loading: false,
      }));
    };

    try {
      getProduct();
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
  }, [id]);

  return state;
};
