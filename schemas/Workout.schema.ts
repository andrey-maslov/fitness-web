import { Schema, model, models } from 'mongoose'
import { Exercise, Workout } from '@/types/types'

const ExerciseSetSchema = new Schema({
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
  // Можно добавить другие поля позже
})

const ExerciseSchema = new Schema<Exercise>({
  name: { type: String, required: true },
  comment: { type: String },
  sets: {
    type: [ExerciseSetSchema],
    required: true,
  },
})

const WorkoutSchema = new Schema<Workout>(
  {
    cycleId: {
      type: Schema.Types.ObjectId,
      ref: 'TrainingCycle',
      default: null,
    },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    title: { type: String },
    comment: { type: String },
    exercises: { type: [ExerciseSchema], default: [] },
  },
  { timestamps: true }
)

const WorkoutModel = models.Workout || model('Workout', WorkoutSchema)

export default WorkoutModel
