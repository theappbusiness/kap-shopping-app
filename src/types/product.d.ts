export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: {
    name: string;
    description: string;
  };
};
