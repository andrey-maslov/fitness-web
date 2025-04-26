import connectMongo from '@/lib/db/connectMongo'
import { EmailSubscriber } from '@/schemas/EmailSubscriber.schema'

export async function POST(request: Request) {
  const { email, source, message } = await request.json()

  if (!email) {
    return new Response('Email missed', { status: 400 })
  }

  await connectMongo()

  try {
    await EmailSubscriber.create({ email, source, message })

    return Response.json({ message: 'Subscribed locally' })
  } catch (error: any) {
    if (error.code === 11000) {
      return new Response('Email already subscribed', { status: 409 })
    }

    return new Response(`error!!!: ${error?.message}`, {
      status: 500,
    })
  }
}
