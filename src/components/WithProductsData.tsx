import * as React from "react";
import axios from "axios";
import { Product } from "../types/product";
import Alert from "./Alert";

type WithProductsDataType = {
  products: Product[];
};

const WithProductsData =
  <T extends WithProductsDataType>(Component: React.ComponentType<T>) =>
  (props: Omit<T, keyof WithProductsDataType>) => {
    const [products, setProducts] = React.useState<WithProductsDataType>(
      {} as WithProductsDataType
    );

    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
      const getProducts = async () => {
        setIsLoading(true);

        const { data } = await axios.get("");
        console.log(data);

        setIsLoading(false);
      };

      try {
        getProducts();
      } catch (error) {
        console.log(error);
      }
    }, []);

    return <Component {...(props as T)} products={products} />;
  };

export default WithProductsData;
