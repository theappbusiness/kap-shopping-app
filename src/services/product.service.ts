import axios from "axios";
import { Product } from "../types/product";
import { API_GET_PRODUCT, API_GET_PRODUCTS } from "../constants/api";

export const getProductData = async (id: string): Promise<Product> => {
  try {
    const { data } = await axios.get(API_GET_PRODUCT(id));
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getProductsData = async (): Promise<Product[]> => {
  try {
    const { data } = await axios.get(API_GET_PRODUCTS);
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
