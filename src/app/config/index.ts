import dotenv from 'dotenv';

import path from 'path';
dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,

  ammarpay_store_id: process.env.STORE_ID,
  ammarpay_signature_keys: process.env.SIGNATURE_KEY,
  ammarpay_payment_url: process.env.PAYMENT_URL,
  ammarpay_verify_payment_url: process.env.PAYMENT_VERIFY_URL,
  //   jwt_acess_token_secret: process.env.JWT_ACESS_TOKEN_SECRET,
  //   access_token_expires_in: process.env.ACCESS_TOKEN_EXPIRES_IN,
  //   jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  //   jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
};
