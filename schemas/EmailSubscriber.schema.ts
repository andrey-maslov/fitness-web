import mongoose from 'mongoose'

const EmailSubscriberSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    source: { type: String }, // e.g: "footer", "modal", "blog"
    message: { type: String, required: false },
    subscribedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

export const EmailSubscriber =
  mongoose.models.EmailSubscriber ||
  mongoose.model('EmailSubscriber', EmailSubscriberSchema)
