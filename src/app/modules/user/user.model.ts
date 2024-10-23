import mongoose, { Schema } from 'mongoose';
import { IUser, TUser } from './user.interface';
import bcrypt from 'bcrypt';
import bcryptjs from 'bcryptjs';

const UserSchema = new Schema<TUser>({
  name: { type: String, required: [true, 'Name is required'] },
  email: { type: String, required: [true, 'email is required'] },
  password: { type: String, required: [true, 'password is required'] },
  phone: { type: String, required: [true, 'phone is required'] },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  profilePhoto: { type: String, default: null },
  address: { type: String },
});

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.post('save', function (doc, next) {
  doc.password = '';

  next();
});

UserSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email }).select('+password');
};

UserSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcryptjs.compare(plainTextPassword, hashedPassword);
};

export const User = mongoose.model<TUser, IUser>('user', UserSchema);
