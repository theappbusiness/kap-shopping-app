import { Product } from '../types/product';

type OrderProducts = { product: Product; quantity: number; _id: 'string' };

export type Order = {
  products: OrderProducts[];
  total: number;
  tax: number;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
  __v: number;
};
