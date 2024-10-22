import express from 'express';
import { productController } from './product.controller';
import { multerUpload } from '../../config/multer.config';

const router = express.Router();

router.post('/', multerUpload.single('image'), productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getSingleProduct);
router.delete('/:id', productController.deleteSingleProduct);
router.put('/:id', productController.updateSingleProduct);

export const productRouter = router;
