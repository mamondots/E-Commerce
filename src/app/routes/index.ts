import express from 'express';
import { productRouter } from '../modules/product/product.route';
import { categoryRouter } from '../modules/category/category.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/product',
    route: productRouter,
  },
  {
    path: '/category',
    route: categoryRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
