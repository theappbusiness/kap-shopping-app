import axios from 'axios';
import { Order } from '../types/order';
import { API_GET_ORDER, API_POST_ORDER } from '../constants/api';

type PostProductOrder = {
  product: string;
  quantity: number;
};

export const postOrder = async (
  products: PostProductOrder[]
): Promise<Order> => {
  const { data } = await axios.post(API_POST_ORDER, { products });
  return data;
};

export const getOrderData = async (id: string): Promise<Order> => {
  const { data } = await axios.get(API_GET_ORDER(id));
  return data;
};
