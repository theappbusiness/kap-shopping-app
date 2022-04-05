import axios from "axios";
import { Product } from "../types/product";
import { API_GET_PRODUCTS } from "../constants/api";

export const getProductData = async (): Promise<Product[]> => {
  const { data } = await axios.get(API_GET_PRODUCTS);
  return data;
};
