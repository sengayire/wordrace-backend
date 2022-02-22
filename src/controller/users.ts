import { Request, Response } from 'express';
import requestWrapper from 'src/helpers/requestWrapper';
import jsonResponse from 'src/helpers/jsonResponse';
import { HTTP_CREATED, HTTP_BAD_REQUEST } from 'src/constants/httpStatusCode';
import Users from 'src/database/model/users';

export const createUser = requestWrapper(async (req: Request, res: Response) => {
  const { username } = req.body;

  const user = await Users.findOne({ username });

  if (user) {
    return jsonResponse({
      res,
      status: HTTP_BAD_REQUEST,
      message: 'User already exists',
    });
  }
  const data = await Users.create({ username });
  return jsonResponse({
    res,
    data,
    status: HTTP_CREATED,
    message: 'User created successfully',
  });
});
