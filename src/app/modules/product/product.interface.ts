export type TProduct = {
  title: string;
  price: number;
  rating: number;
  description: string;
  stock: number;
  quantity: number;
  category: string;
  availability: 'stock' | 'OutStock';
  image: string;
};
