/* eslint-disable @typescript-eslint/no-explicit-any */

import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (orderData: any) => {
  const { user, products } = orderData;

  let totalPrice = 0;
  const productDetails = await Promise.all(
    products.map(async (item: any) => {
      const product = await Product.findById(item.product);
      console.log(product);
      if (product) {
        totalPrice += product.price * item.quantity;
        return {
          product: product._id,
          quantity: item.quantity,
        };
        console.log(totalPrice);
      } else {
        throw new Error('Product not found');
      }
    }),
  );
  const transactionId = `TXN-${Date.now()}`;

  const order = new Order({
    user,
    products: productDetails,
    totalPrice,
    status: 'Pending',
    paymentStatus: 'Pending',
    transactionId,
  });

  await order.save();

  return order;
};

const allOrderData = async () => {
  const result = await Order.find();
  return result;
};

const updateOrderData = async (id: string, updateOrder: Partial<TOrder>) => {
  const result = await Order.findByIdAndUpdate(id, updateOrder, {
    new: true,
  });
  return result;
};

export const orderService = {
  createOrder,
  allOrderData,
  updateOrderData,
};
