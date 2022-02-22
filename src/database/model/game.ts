import { Document, Model, model, Schema } from 'mongoose';

export interface IGame extends Document {
  username: string;
}

const gameSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  words: [
    {
      _id: false,
      word: {
        type: String,
        required: true,
      },
      correct: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

const Games: Model<IGame, any> = model('Games', gameSchema);

export default Games;
