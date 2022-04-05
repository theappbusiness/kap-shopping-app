import axios from "axios";
import { Product } from "../types/product";
import { API_GET_PRODUCT, API_GET_PRODUCTS } from "../constants/api";

export const getProductData = async (id: string): Promise<Product> => {
  const { data } = await axios.get(API_GET_PRODUCT(id));
  return data;
};

export const getProductsData = async (): Promise<Product[]> => {
  // const { data } = await axios.get(API_GET_PRODUCTS);
  // return data;

  // TODO: delete this and uncomment above
  console.log(`${API_GET_PRODUCTS}/624b099c305bb432fb30bbe8`);
  const { data } = await axios.get(
    `${API_GET_PRODUCTS}/624b099c305bb432fb30bbe8`
  );
  return [data];
};
