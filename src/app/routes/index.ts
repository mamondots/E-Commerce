import express from 'express';
import { productRouter } from '../modules/product/product.route';
import { categoryRouter } from '../modules/category/category.route';
import { userRoutes } from '../modules/user/user.router';
import { orderRouter } from '../modules/order/order.routes';

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
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/order',
    route: orderRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
