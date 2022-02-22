import { Request, Response } from 'express';

import requestWrapper from 'src/helpers/requestWrapper';
import jsonResponse from 'src/helpers/jsonResponse';
import { HTTP_CREATED, HTTP_BAD_REQUEST } from 'src/constants/httpStatusCode';
import Users from 'src/database/model/users';
import Records from 'src/database/model/Record';

export const createUserProfile = requestWrapper(async (req: Request, res: Response) => {
  const { level, score, username } = req.body;

  const user = Users.findOne({ $where: username });

  if (user) {
    const record = Records.bulkSave({ level, score, username } as any);
    return jsonResponse({
      res,
      data: { ...record },
      status: HTTP_CREATED,
      message: 'Record saved successfully',
    });
  }

  return jsonResponse({
    res,
    status: HTTP_BAD_REQUEST,
    message: 'Record has not save, please try again',
  });
});
