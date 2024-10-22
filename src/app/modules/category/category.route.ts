import express from 'express';
import { categoryController } from './category.controller';

const router = express.Router();

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getAllCategorys);
router.get('/:id', categoryController.getSingleCategory);
router.delete('/:id', categoryController.deleteSingleCategory);
router.put('/:id', categoryController.updateSingleCategory);

export const categoryRouter = router;
