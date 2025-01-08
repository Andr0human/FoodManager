import { Schema, model } from 'mongoose';

const dietChartSchema = Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: 'patient',
    },
    meals: {
      time: { type: String, enum: ['Morning', 'Evening', 'Night'], required: true },
      ingredients: { type: [String] },
      instructions: { type: String },
    },
  },
  { timestamps: true }
);

const dietChartModel = model('diet_chart', dietChartSchema);

export default dietChartModel;
