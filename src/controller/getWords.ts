import { Request, Response } from 'express';
import requestWrapper from 'src/helpers/requestWrapper';
import jsonResponse from 'src/helpers/jsonResponse';
import { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_NOT_FOUND, HTTP_OK } from 'src/constants/httpStatusCode';
import User from 'src/database/model/user';

interface IPayload {
  email: string;
  code: number;
  action?: string;
  expiresAt?: Date;
}

export const getUserProfile = requestWrapper(async (req: Request, res: Response) => {
  const { currentUser } = req;
  const user = await User.findOne({ _id: currentUser._id }, { password: 0, token: 0 }).select(['-_id', '-__v']);
  return jsonResponse({
    res,
    status: HTTP_OK,
    data: user,
    message: 'User profile',
  });
});
