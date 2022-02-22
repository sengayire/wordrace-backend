import { Request, Response } from 'express';

import requestWrapper from 'src/helpers/requestWrapper';
import jsonResponse from 'src/helpers/jsonResponse';
import { HTTP_CREATED, HTTP_BAD_REQUEST } from 'src/constants/httpStatusCode';
import Users from 'src/database/model/users';
import Records from 'src/database/model/Record';

export const saveRecord = requestWrapper(async (req: Request, res: Response) => {
  const { level, score, username } = req.body;

  const user = await Users.findOne({ username });

  if (user) {
    const updateRecord = await Records.findOneAndUpdate(
      { username },
      { level, score, username },
      { returnOriginal: false },
    );

    if (updateRecord) {
      return jsonResponse({
        res,
        data: { ...updateRecord._doc },
        status: HTTP_CREATED,
        message: 'Record saved successfully',
      });
    }

    const data = await Records.create({ level, score, username });

    return jsonResponse({
      res,
      data,
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
