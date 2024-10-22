import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getSingleProduct);
router.delete('/:id', productController.deleteSingleProduct);
router.put('/:id', productController.updateSingleProduct);

export const productRouter = router;
