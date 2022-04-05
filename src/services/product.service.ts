import axios from "axios";
import { Product } from "../types/product";
import { API_GET_PRODUCT, API_GET_PRODUCTS } from "../constants/api";

export const getProductData = async (id: string): Promise<Product> => {
  const { data } = await axios.get(API_GET_PRODUCT(id));
  return data;
};

export const getProductsData = async (): Promise<Product[]> => {
  const { data } = await axios.get(API_GET_PRODUCTS);
  return data;
};
