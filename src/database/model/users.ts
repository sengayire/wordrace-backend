import { Document, Model, model, Schema } from 'mongoose';

export interface IUsers extends Document {
  username: string;
}

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
});

const Users: Model<IUsers> = model('Users', userSchema);

export default Users;
