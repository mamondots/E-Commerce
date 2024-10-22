import { searchAbleFileds } from './product.content';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductInfoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductInfoDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };

  //search system
  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const searchQuery = Product.find({
    $or: searchAbleFileds.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  //filter system

  const excludeFields = [
    'searchTerm',
    'sort',
    'limit',
    'page',
    'skip',
    'fields',
  ];
  excludeFields.forEach((el) => delete queryObj[el]);

  const filterQuery = searchQuery.find(queryObj);

  //sort

  let sort = '-createdAt';
  if (query?.sort) {
    sort = query?.sort as string;
  }
  const sortQuery = filterQuery.sort(sort);

  //limit

  // let limit = 1;
  // if (query.limit) {
  //   limit = query?.limit as number;
  // }

  // const limitQuery = await sortQuery.limit(limit);

  // return limitQuery;

  //limite + pagination

  let page = 1;
  let limit = 5;
  let skip = 0;

  if (query.limit) {
    limit = Number(query?.limit);
  }
  if (query.page) {
    page = Number(query?.page);
    skip = (page - 1) * limit;
  }
  const paginationQuery = sortQuery.skip(skip);
  const limitQuery = paginationQuery.limit(limit);

  //field limiting

  let fields = '-__v';
  if (query.limit) {
    fields = (query?.fields as string).split(',').join(' ');
  }

  const fieldQuery = await limitQuery.select(fields);

  return fieldQuery;
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
