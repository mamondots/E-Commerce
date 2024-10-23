import express from 'express';

import { multerUpload } from '../../config/multer.config';
import { authControllers } from './auth.controller';

const router = express.Router();

router.post(
  '/register',
  multerUpload.single('image'),
  authControllers.registerUser,
);
router.post('/login', authControllers.loginUser);

export const AuthRoutes = router;
