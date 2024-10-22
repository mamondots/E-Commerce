import { model, Schema } from 'mongoose';
import { TProduct } from './product.interface';
const productSchema = new Schema<TProduct>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    stock: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    availability: {
      type: String,
      enum: ['stock', 'OutStock'],
      required: true,
    },
    image: { type: String, default: null },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('product', productSchema);
