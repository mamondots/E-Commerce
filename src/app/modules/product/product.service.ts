import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductInfoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductInfoDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductInfoBD = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateSingleProductInfoBD = async (
  id: string,
  updateProduct: Partial<TProduct>,
) => {
  const result = await Product.findByIdAndUpdate(id, updateProduct, {
    new: true,
  });
  return result;
};

const deleteSingleProductInfoDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createProductInfoDB,
  getAllProductInfoDB,
  getSingleProductInfoBD,
  deleteSingleProductInfoDB,
  updateSingleProductInfoBD,
};
