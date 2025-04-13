import { auth } from '@clerk/nextjs/server'
import connectMongo from '@/lib/db/connectMongo'
import TrainingCycleSchema from '@/schemas/TrainingCycle.schema'

// Get all My training cycles
export async function GET() {
  const { sessionClaims } = await auth()
  const userMongoId = sessionClaims?.externalId

  if (!userMongoId) {
    return new Response('Unauthorized', { status: 401 })
  }

  await connectMongo()

  try {
    const filter = { userId: userMongoId }
    const trainingCycles = await TrainingCycleSchema.find(filter)

    return Response.json({ data: trainingCycles })
  } catch (e) {
    console.log(e)

    return new Response('Get Training Cycles failed', {
      status: 500,
    })
  }
}

// Create new Training Cycle
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
    const newTrainingCycle = await TrainingCycleSchema.create({
      ...payload,
      userId: userMongoId,
    })

    return Response.json({ data: newTrainingCycle })
  } catch (error: any) {
    return new Response(`Create training cycle failed: ${error?.message}`, {
      status: 500,
    })
  }
}
