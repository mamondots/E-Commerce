import { Model } from 'mongoose';

export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'admin' | 'user';
  profilePhoto: string;
  address?: string;
};

export interface IUser extends Model<TUser> {
  isUserExistsByEmail(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}
