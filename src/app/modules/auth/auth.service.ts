import config from '../../config';
import { User } from '../user/user.model';
import { TLoginUser, TRegisterUser } from './auth.interface';
import { createToken } from './auth.utils';

const registerUser = async (payload: TRegisterUser) => {
  // checking if the user is exist
  const user = await User.isUserExistsByEmail(payload?.email);

  if (user) {
    throw new Error('This user is already exist!');
  }

  // payload.role = user;

  //create new user
  const newUser = await User.create(payload);

  //create token and sent to the  client

  const jwtPayload = {
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    profilePicture: newUser.profilePhoto,
    role: newUser.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_acess_token_secret as string,
    config.access_token_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await User.isUserExistsByEmail(payload?.email);

  if (!user) {
    throw new Error('This user is not found!');
  }

  //checking if the password is correct

  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new Error('Password do not matched');

  //create token and send to the  client

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.cloudinary_api_secret as string,
    config.access_token_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  const userData = await User.findOne({ email: payload.email, payload });

  return {
    accessToken,
    refreshToken,
    userData,
  };
};

export const AuthServices = {
  loginUser,
  registerUser,
};
