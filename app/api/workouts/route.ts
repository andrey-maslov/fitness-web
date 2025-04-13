import { auth } from '@clerk/nextjs/server'
import connectMongo from '@/lib/db/connectMongo'
import WorkoutSchema from '@/schemas/Workout.schema'
import { Workout } from '@/types/types'

// Get all My workouts
export async function GET() {
  const { sessionClaims } = await auth()
  const userMongoId = sessionClaims?.externalId

  if (!userMongoId) {
    return new Response('Unauthorized', { status: 401 })
  }

  await connectMongo()

  try {
    const filter = { userId: userMongoId }
    const workouts = await WorkoutSchema.find(filter)

    return Response.json({ data: workouts })
  } catch (e) {
    console.error(e)

    return new Response('Get workouts failed', {
      status: 500,
    })
  }
}

// Create new Workout
export async function POST(request: Request) {
  // Clerk auth check
  const { sessionClaims } = await auth()
  const userMongoId = sessionClaims?.externalId

  if (!userMongoId) {
    return new Response('Unauthorized', { status: 401 })
  }

  const payload = await request.json()

  await connectMongo()

  try {
    const newWorkout: Workout = await WorkoutSchema.create({
      ...payload,
      userId: userMongoId,
    })

    return Response.json({ data: newWorkout })
  } catch (error: any) {
    return new Response(`Create workout failed: ${error?.message}`, {
      status: 500,
    })
  }
}
