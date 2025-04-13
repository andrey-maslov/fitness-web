import { NextRequest } from 'next/server'
import TrainingCycleSchema from '@/schemas/TrainingCycle.schema'
import connectMongo from '@/lib/db/connectMongo'
import { auth } from '@clerk/nextjs/server'

// Get one training cycle
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id

  // Clerk auth check
  const { sessionClaims } = await auth()
  const userMongoId = sessionClaims?.externalId

  if (!userMongoId) {
    return new Response('Unauthorized', { status: 401 })
  }

  await connectMongo()

  try {
    const trainingCycle = await TrainingCycleSchema.findById(id)

    if (!trainingCycle) {
      return new Response(
        JSON.stringify({ error: 'Training Cycle not found' }),
        {
          status: 404,
        }
      )
    }

    if (trainingCycle && trainingCycle.userId.toString() !== userMongoId) {
      return new Response('Unauthorized', { status: 401 })
    }

    return Response.json({ data: trainingCycle })
  } catch (e) {
    return new Response('Get training cycle failed', {
      status: 500,
    })
  }
}

// Update training cycle
export async function PUT(request: Request) {
  const payload = await request.json()

  // Clerk auth check
  const { sessionClaims } = await auth()
  const userMongoId = sessionClaims?.externalId

  if (!userMongoId) {
    return new Response('Unauthorized', { status: 401 })
  }

  await connectMongo()

  try {
    const existingTrainingCycle = await TrainingCycleSchema.findById(
      payload._id
    )

    if (!existingTrainingCycle) {
      return new Response(
        JSON.stringify({ error: 'Training cycle not found' }),
        {
          status: 404,
        }
      )
    }

    if (existingTrainingCycle.userId.toString() !== userMongoId) {
      return new Response('Unauthorized', { status: 401 })
    }

    const updatedTrainingCycle = await TrainingCycleSchema.findByIdAndUpdate(
      payload._id,
      payload,
      { new: true }
    ).lean()
    return Response.json({ data: updatedTrainingCycle })
  } catch (e) {
    return new Response('Update training cycle failed', { status: 500 })
  }
}

// Delete Training Cycle
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id

  // Clerk auth check
  const { sessionClaims } = await auth()
  const userMongoId = sessionClaims?.externalId

  if (!userMongoId) {
    return new Response('Unauthorized', { status: 401 })
  }

  await connectMongo()

  try {
    const existingTrainingCycle = await TrainingCycleSchema.findById(id)

    if (!existingTrainingCycle) {
      return new Response(
        JSON.stringify({ error: 'Training Cycle not found' }),
        {
          status: 404,
        }
      )
    }

    if (existingTrainingCycle.userId.toString() !== userMongoId) {
      return new Response('Unauthorized', { status: 401 })
    }

    const result = await TrainingCycleSchema.deleteOne({ _id: id })

    if (result.deletedCount === 1) {
      return Response.json({
        success: true,
        message: 'Resource deleted successfully',
        data: null,
      })
    } else {
      return new Response(
        JSON.stringify({ error: 'Training Cycle not found' }),
        {
          status: 404,
        }
      )
    }
  } catch (e) {
    return new Response('Delete Training Cycle failed', { status: 500 })
  }
}
