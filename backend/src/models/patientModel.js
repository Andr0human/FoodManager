import { Schema, model } from 'mongoose';

const patientSchema = Schema(
  {
    name: { type: String, required: true },
    diseases: { type: [String], required: true },
    allergies: { type: [String], required: true },
    roomNumber: { type: Number, required: true },
    bedNumber: { type: Number, required: true },
    floorNumber: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    contactInfo: {
      phoneNumber: { type: String },
      address: { type: String },
    },
    emergencyContact: { type: String },
  },
  { timestamps: true }
);

patientSchema.index({ name: 1, roomNumber: 1, bedNumber: 1 }, { unique: true });

const patientModel = model('patient', patientSchema);

export default patientModel;
