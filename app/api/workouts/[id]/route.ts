import { NextRequest } from 'next/server'
import WorkoutSchema from '@/schemas/Workout.schema'
import connectMongo from '@/lib/db/connectMongo'
import { auth } from '@clerk/nextjs/server'
import { Workout } from '@/types/types'

// Get one Workout
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
    const workout: Workout | null = await WorkoutSchema.findById(id)

    if (!workout) {
      return new Response(JSON.stringify({ error: 'Workout not found' }), {
        status: 404,
      })
    }

    if (workout && workout.userId.toString() !== userMongoId) {
      return new Response('Unauthorized', { status: 401 })
    }

    return Response.json({ data: workout })
  } catch (e) {
    return new Response('Get workout failed', {
      status: 500,
    })
  }
}

// Update Workout
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
    const existingWorkout = await WorkoutSchema.findById(payload._id)

    if (!existingWorkout) {
      return new Response(JSON.stringify({ error: 'Workout not found' }), {
        status: 404,
      })
    }

    if (existingWorkout.userId.toString() !== userMongoId) {
      return new Response('Unauthorized', { status: 401 })
    }

    const updatedWorkout = await WorkoutSchema.findByIdAndUpdate(
      payload._id,
      payload,
      { new: true }
    ).lean()
    return Response.json({ data: updatedWorkout })
  } catch (e) {
    return new Response('Update workout failed', { status: 500 })
  }
}

// Delete Workout
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
    const existingWorkout = await WorkoutSchema.findById(id)

    if (!existingWorkout) {
      return new Response(JSON.stringify({ error: 'Workout not found' }), {
        status: 404,
      })
    }

    if (existingWorkout.userId.toString() !== userMongoId) {
      return new Response('Unauthorized', { status: 401 })
    }

    const result = await WorkoutSchema.deleteOne({ _id: id })

    if (result.deletedCount === 1) {
      return Response.json({
        success: true,
        message: 'Resource deleted successfully',
        data: null,
      })
    } else {
      return new Response(JSON.stringify({ error: 'Workout not found' }), {
        status: 404,
      })
    }
  } catch (e) {
    return new Response('Delete workout failed', { status: 500 })
  }
}
