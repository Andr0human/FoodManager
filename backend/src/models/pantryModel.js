import { Schema, model } from 'mongoose';

const pantrySchema = new Schema(
  {
    staffName: { type: String, required: true },
    contactInfo: { type: String, required: true },
    location: { type: String },
  },
  { timestamps: true }
);

pantrySchema.index({ staffName: 1, contactInfo: 1 }, { unique: true });

const pantryModel = model('pantry', pantrySchema);

export default pantryModel;
