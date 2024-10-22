/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { categoryService } from './category.service';

const createCategory = async (req: Request, res: Response) => {
  try {
    const category = req.body;
    const result = await categoryService.createCategoryInfoDB(category);

    res.status(200).json({
      success: true,
      message: 'Category create successfully',
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

const getAllCategorys = async (req: Request, res: Response) => {
  try {
    const result = await categoryService.getAllCategoryInfoDB();

    res.status(200).json({
      success: true,
      message: 'successfully getting all Categorys',
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

const getSingleCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await categoryService.getSingleCategoryInfoBD(id);

    res.status(200).json({
      success: true,
      message: 'successfully getting single Category',
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

const deleteSingleCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await categoryService.deleteSingleCategoryInfoDB(id);

    res.status(200).json({
      success: true,
      message: 'successfully deleting single Category',
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

const updateSingleCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateCategory = req.body;
    const result = await categoryService.updateSingleCategoryInfoBD(
      id,
      updateCategory,
    );

    res.status(200).json({
      success: true,
      message: 'successfully updating single Category',
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

export const categoryController = {
  createCategory,
  getAllCategorys,
  getSingleCategory,
  deleteSingleCategory,
  updateSingleCategory,
};
