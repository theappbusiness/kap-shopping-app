export type Product = {
  id: String;
  name: String;
  description: String;
  price: Number;
  stock: Number;
  category: {
    name: string;
    description: string;
  };
};
