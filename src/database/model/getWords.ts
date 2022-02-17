import { Document, Model, model, Schema } from 'mongoose';

export interface IWords extends Document {
  words: string[];
}

const wordSchema: Schema = new Schema({
  words: {
    type: Array,
  },
});

const Words: Model<IWords> = model('Words', wordSchema);

export default Words;
