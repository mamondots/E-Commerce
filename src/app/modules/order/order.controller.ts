/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const newOrder = await orderService.createOrder(orderData);
    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: newOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
      error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderService.allOrderData();

    res.status(200).json({
      success: true,
      message: 'successfully getting all orders',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const updateSingleOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateOrder = req.body;
    const result = await orderService.updateOrderData(id, updateOrder);

    res.status(200).json({
      success: true,
      message: 'successfully updating single order',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrders,
  updateSingleOrder,
};
