import ky from 'ky'
import { UserDB, Workout, TrainingCycle } from '@/types/types'

const api = ky.create({
  prefixUrl: '/api',
})

/******** Users ********/

export const fetchUser = (userId: string): Promise<UserDB> =>
  api.get(`users/${userId}`).json<UserDB>()

export const createUser = (data: Partial<UserDB>): Promise<UserDB> =>
  api.post('users', { json: data }).json<UserDB>()

export const updateUser = (
  userId: string,
  data: Partial<UserDB>
): Promise<UserDB> =>
  api.patch(`users/${userId}`, { json: data }).json<UserDB>()

/******** Workouts ******/

export const fetchWorkout = (id: string): Promise<Workout> =>
  api.get(`workouts/${id}`).json<Workout>()

export const fetchWorkoutsByCycle = (cycleId: string): Promise<Workout[]> =>
  api.get(`workouts?cycleId=${cycleId}`).json<Workout[]>()

export const fetchWorkoutsByUser = (userId: string): Promise<Workout[]> =>
  api.get(`workouts?userId=${userId}`).json<Workout[]>()

export const createWorkout = (data: Partial<Workout>): Promise<Workout> =>
  api.post('workouts', { json: data }).json<Workout>()

export const updateWorkout = (
  id: string,
  data: Partial<Workout>
): Promise<Workout> =>
  api.patch(`workouts/${id}`, { json: data }).json<Workout>()

export const deleteWorkout = (id: string): Promise<{ success: boolean }> =>
  api.delete(`workouts/${id}`).json<{ success: boolean }>()

/******** TrainingCycles ******/

export const fetchTrainingCycle = (id: string): Promise<TrainingCycle> =>
  api.get(`training-cycles/${id}`).json<TrainingCycle>()

export const fetchTrainingCyclesByUser = (
  userId: string
): Promise<TrainingCycle[]> =>
  api.get(`training-cycles?userId=${userId}`).json<TrainingCycle[]>()

export const createTrainingCycle = (
  data: Partial<TrainingCycle>
): Promise<TrainingCycle> =>
  api.post('training-cycles', { json: data }).json<TrainingCycle>()

export const updateTrainingCycle = (
  id: string,
  data: Partial<TrainingCycle>
): Promise<TrainingCycle> =>
  api.patch(`training-cycles/${id}`, { json: data }).json<TrainingCycle>()

export const deleteTrainingCycle = (
  id: string
): Promise<{ success: boolean }> =>
  api.delete(`training-cycles/${id}`).json<{ success: boolean }>()
