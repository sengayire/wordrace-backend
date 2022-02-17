import { Request, Response, NextFunction } from 'express';
import { HTTP_SERVER_ERROR } from 'src/constants/httpStatusCode';
import jsonResponse from './jsonResponse';

const isProduction = process.env.NODE_ENV === 'production';

type CallbackFunction = (req: Request, Res: Response, next?: NextFunction) => void | Promise<unknown>;

const requestWrapper =
  (cb: CallbackFunction) =>
  async (req: Request, res: Response, next?: NextFunction): Promise<unknown> => {
    try {
      await cb(req, res, next);
    } catch (err: any) {
      const status = err.status || HTTP_SERVER_ERROR;
      return jsonResponse({
        res,
        status,
        message: err?.errors && err?.errors[0] ? err?.errors[0].message : err.message || err.data.errorMessage,
        error: !isProduction ? err : undefined,
      });
    }
  };

export default requestWrapper;
