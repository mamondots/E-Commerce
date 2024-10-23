import { ObjectId } from 'mongoose';

export type TOrder = {
  user?: ObjectId;
  products: Array<{
    product: ObjectId;
    quantity: number;
  }>;
  totalPrice: number;
  status: string;
  paymentStatus: string;
  transactionId: string;
};
