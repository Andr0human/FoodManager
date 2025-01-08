import { Schema, model } from 'mongoose';

const pantrySchema = new Schema({
  staffName: { type: String, required: true },
  contactInfo: { type: String, required: true },
  location: { type: String },
});

const pantryModel = model('pantry', pantrySchema);

export default pantryModel;
