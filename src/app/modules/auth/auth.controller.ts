/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { AuthServices } from './auth.service';
import config from '../../config';

const registerUser = async (req: Request, res: Response) => {
  try {
    const result = await AuthServices.registerUser({
      ...JSON.parse(req.body.data),
      profilePhoto: req.file?.path,
    });

    const { refreshToken, accessToken } = result;

    res.cookie('refreshToken', refreshToken, {
      secure: config.NODE_ENV === 'production',
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: 'User register successfully',
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await AuthServices.loginUser(req.body);

    const { refreshToken, accessToken } = result;

    res.cookie('refreshToken', refreshToken, {
      secure: config.NODE_ENV === 'production',
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: 'User login successfully',
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const authControllers = {
  registerUser,
  loginUser,
};
