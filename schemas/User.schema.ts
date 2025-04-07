import { Schema, model, models } from 'mongoose'
import { UserDB } from '@/types/types'

const UserSchema = new Schema<UserDB>(
  {
    clerkId: { type: String, required: true }, // Clerk user ID
    email: { type: String, required: true },
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    imageUrl: { type: String, required: false },
    roles: { type: [String], required: true },
  },
  { timestamps: true }
)

const UserModel = models.User || model('User', UserSchema)

export default UserModel
