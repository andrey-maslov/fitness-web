import { Schema, model, models } from 'mongoose'
import { TrainingCycle } from '@/types/types'

const TrainingCycleSchema = new Schema<TrainingCycle>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    trainerId: { type: Schema.Types.ObjectId, ref: 'User' },
    title: { type: String },
    comment: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
  },
  { timestamps: true }
)

const TrainingCycleModel =
  models.TrainingCycle || model('TrainingCycle', TrainingCycleSchema)

export default TrainingCycleModel
