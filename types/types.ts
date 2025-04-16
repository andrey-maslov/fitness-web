import { Types } from 'mongoose'

export type TrainingCycle = {
  _id: Types.ObjectId | string
  userId: Types.ObjectId | string // ссылка на владельца цикла (клиента)
  trainerId: Types.ObjectId | string // при необходимости, если нужно хранить, кто тренер
  title: string
  comment: string
  startDate: Date
  endDate: Date // Опционально, если есть конкретный конец
  createdAt: Date
  updatedAt: Date
}

export type ExerciseSet = {
  reps: number
  weight: number
  // Любые другие поля: RPE (оценка тяжести), длительность (если это бег) и т. п.
}

export type Exercise = {
  // Идентификатор базового упражнения (если есть справочник), либо просто название:
  name: string
  comment: string
  sets: ExerciseSet[]
}

export type Workout = {
  _id: Types.ObjectId | string
  cycleId: Types.ObjectId | string | null // ссылка на тренировочный цикл (может быть null, если юзер не в цикле)
  userId: Types.ObjectId | string // кто выполнял
  date: Date
  title: string // «Грудь + Бицепс», «Ноги» – как назовёт
  comment: string // общие заметки о тренировке
  exercises: Exercise[]
  createdAt: Date
  updatedAt: Date
}

export type Role = 'admin' | 'user' | 'trainer'

export type UserDB = {
  // _id: Types.ObjectId | string
  clerkId: string
  email: string | null
  firstName: string | null
  lastName: string | null
  imageUrl: string | null
  roles: Role[]
  createdAt: number | Date
  updatedAt: number | Date
}

// What we retrieve from Clerk and have in session
export type UserClerk = Omit<UserDB, 'clerkId'> & {
  id: string
  externalId: string
}

export type UserData = Omit<UserDB, 'createdAt' | 'updatedAt'> & {
  mongoId: string // MongoDB ID
}
