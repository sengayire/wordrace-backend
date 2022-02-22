import { Request, Response } from 'express';
import requestWrapper from 'src/helpers/requestWrapper';
import jsonResponse from 'src/helpers/jsonResponse';
import { HTTP_CREATED, HTTP_BAD_REQUEST } from 'src/constants/httpStatusCode';
import Users from 'src/database/model/users';
import Games from 'src/database/model/game';

export const createGame = requestWrapper(async (req: Request, res: Response) => {
  const { username, words } = req.body;

  const user = await Users.findOne({ username });

  if (user) {
    const data = await Games.findOneAndUpdate(
      { username },
      {
        $push: {
          words,
        },
      },
      { returnOriginal: false },
    );
    if (data) {
      return jsonResponse({
        res,
        data,
        status: HTTP_CREATED,
        message: 'Game saved successfully',
      });
    }
    const gameCreated = await Games.create({ username, words });
    console.log('gameCreated', gameCreated);
    return jsonResponse({
      res,
      data: { ...gameCreated._doc },
      status: HTTP_CREATED,
      message: 'Game saved successfully',
    });
  }

  return jsonResponse({
    res,
    status: HTTP_BAD_REQUEST,
    message: 'Unable to save the game, please try again',
  });
});
