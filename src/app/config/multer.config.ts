import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { cloudinaryUpload } from './cloudinary.config';
import multer from 'multer';

// const removeExtension = (filename: string) => {
//   return filename.split('.').slice(0, -1).join('.');
// };

const storage = new CloudinaryStorage({
  cloudinary: cloudinaryUpload,
});
export const multerUpload = multer({ storage });
