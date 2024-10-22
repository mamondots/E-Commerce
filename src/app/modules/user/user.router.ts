import express from 'express';
import { multerUpload } from '../../config/multer.config';
import { userController } from './user.controller';

const router = express.Router();

router.post(
  '/',
  multerUpload.single('profilePhoto'),
  userController.createUser,
);
router.get('/', userController.getAllUser);
router.get('/:id', userController.getSingleUser);
router.put('/:id', userController.updateSingleUser);
router.delete('/:id', userController.deleteSingleUser);

export const userRoutes = router;
