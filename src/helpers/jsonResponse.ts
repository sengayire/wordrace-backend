import { Response } from 'express';
import { HTTP_OK } from 'src/constants/httpStatusCode';

interface ResponseParams {
  res: Response;
  status?: number;
  data?: unknown;
  token?: string;
  message?: string;
  errorCode?: string;
  errors?: unknown;
  meta?: Record<string, unknown>;
  [key: string]: unknown;
}
/**
 * @param  {Object} data
 * @param  {ServerResponse} res
 * @return {ServerResponse} Response
 */
const jsonResponse = ({ status = HTTP_OK, res, data, meta, ...otherData }: ResponseParams): Response => {
  return res.status(status).json({
    status,
    data,
    meta,
    ...otherData,
  });
};

export default jsonResponse;
