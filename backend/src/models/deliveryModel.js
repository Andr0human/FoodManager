import { Schema, model } from 'mongoose';

const deliverySchema = Schema(
  {
    mealBoxDetails: {
      patientId: {
        type: Schema.Types.ObjectId,
        ref: 'patient',
      },
      roomNumber: { type: String, required: true },
      dietChart: {
        type: Schema.Types.ObjectId,
        ref: 'diet_chart',
      },
    },
    status: {
      type: String,
      enum: ['Pending', 'Delivered'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

const deliveryModel = model('delivery', deliverySchema);

export default deliveryModel;
