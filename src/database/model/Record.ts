import { Document, Model, model, Schema } from 'mongoose';

export interface IRecords extends Document {
  username: string;
}

const recordSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Records: Model<IRecords, any> = model('Records', recordSchema);

export default Records;
