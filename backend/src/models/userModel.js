import { model, Schema } from 'mongoose';

const userSchema = Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const userModel = model('user', userSchema);

export default userModel;
