export type TProduct = {
  title: string;
  price: number;
  rating: number;
  description: string;
  stock: number;
  category: string;
  availability: 'stock' | 'OutStock';
  image: string;
};
