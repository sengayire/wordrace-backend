import { Request, Response } from 'express';
import requestWrapper from 'src/helpers/requestWrapper';
import jsonResponse from 'src/helpers/jsonResponse';
import { HTTP_OK } from 'src/constants/httpStatusCode';
import Words from 'src/database/model/words';

export const getWords = requestWrapper(async (req: Request, res: Response) => {
  const words = await Words.find();
  return jsonResponse({
    res,
    status: HTTP_OK,
    data: [...words],
    message: 'words successfully returned',
  });
});
