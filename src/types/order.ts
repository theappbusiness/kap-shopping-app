import { Product } from '../types/product';

export type Order = {
  products: Product[];
  total: number;
  tax: number;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
  __v: number;
};
