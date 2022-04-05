import * as React from "react";
import { Product } from "../types/product";
import { getProductData } from "../services/product.service";
import { useParams } from "react-router-dom";

type useProductDataType = {
  product: Product | null;
  error: Error | null;
  isLoading: boolean;
};

export const useProductData = () => {
  const [state, setState] = React.useState<useProductDataType>({
    product: null,
    isLoading: true,
    error: null,
  });

  const { id } = useParams();

  React.useEffect(() => {
    const getProduct = async () => {
      setState((s) => ({
        ...s,
        loading: true,
      }));

      let product: Product;

      if (id) {
        product = await getProductData(id);

        setState((s) => ({
          ...s,
          product,
          loading: false,
        }));
      } else {
        throw new Error("Product id not found");
      }
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
  }, []);

  return state;
};
