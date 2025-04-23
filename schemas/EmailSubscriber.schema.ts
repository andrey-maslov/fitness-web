import mongoose from 'mongoose'

const EmailSubscriberSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    source: { type: String }, // e.g: "footer", "modal", "blog"
    subscribedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export const EmailSubscriber =
  mongoose.models.EmailSubscriber ||
  mongoose.model('EmailSubscriber', EmailSubscriberSchema)
