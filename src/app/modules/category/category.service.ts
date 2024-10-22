import { TCategory } from './category.interface';
import { Category } from './category.model';

const createCategoryInfoDB = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};

const getAllCategoryInfoDB = async () => {
  const result = await Category.find();
  return result;
};

const getSingleCategoryInfoBD = async (id: string) => {
  const result = await Category.findById(id);
  return result;
};

const updateSingleCategoryInfoBD = async (
  id: string,
  updateCategory: Partial<TCategory>,
) => {
  const result = await Category.findByIdAndUpdate(id, updateCategory, {
    new: true,
  });
  return result;
};

const deleteSingleCategoryInfoDB = async (id: string) => {
  const result = await Category.findByIdAndDelete(id);
  return result;
};

export const categoryService = {
  createCategoryInfoDB,
  getAllCategoryInfoDB,
  getSingleCategoryInfoBD,
  deleteSingleCategoryInfoDB,
  updateSingleCategoryInfoBD,
};
