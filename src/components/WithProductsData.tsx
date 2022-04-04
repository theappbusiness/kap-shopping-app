import * as React from "react";
import axios from "axios";
import { Product } from "../types/product";
import Alert from "./Alert";

type WithProductsDataType = {
  products: Product[];
  error: Error | null,
  isLoading: boolean
};

export const useProductsData = () => {
  const [state, setState] = React.useState<WithProductsDataType>({
    products: [],
    isLoading: true,
    error: null
  });

  React.useEffect(() => {
    const getProducts = async () => {
      setState(s => ({
        ...s,
        loading: true
      }));

      const { data } = await axios.get("");
      console.log(data);

      setState(s => ({
        ...s,
        products: data,
        loading: false
      }));
    };

    try {
      getProducts();
    } catch (error) {
      if (error instanceof Error) {
        setState(s => ({
          ...s,
          error: error as Error
        }));
      } else {
        setState(s => ({
          ...s,
          error: new Error("Something went wrong")
        }));
      }
    }
  }, []);

  return state;
};
