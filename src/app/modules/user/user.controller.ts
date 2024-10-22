/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { userService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.createUserInToBD({
      ...JSON.parse(req.body.data),
      profilePhoto: req.file?.path,
    });

    res.status(200).json({
      success: true,
      message: 'Product create successfully',
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

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsersInToBD();

    res.status(200).json({
      success: true,
      message: 'successfully getting all user',
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

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await userService.getSingleUserToBd(id);

    res.status(200).json({
      success: true,
      message: 'successfully getting single user',
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

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await userService.singleUserDeleteToBd(id);

    res.status(200).json({
      success: true,
      message: 'successfully deleting single user',
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

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateUser = req.body;
    const result = await userService.singleUserUpdeteToBd(id, updateUser);

    res.status(200).json({
      success: true,
      message: 'successfully updating single user',
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

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  deleteSingleUser,
  updateSingleUser,
};
