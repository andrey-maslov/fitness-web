import React, { Suspense } from 'react'
import { auth } from '@clerk/nextjs/server'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { mockTrainingCycles, mockWorkouts } from '@/app/data/mocks'
import { getFormattedDate } from '@/lib/date'
import { WorkoutComponent } from '@/components/Workout'
import { Workout } from '@/types/types'

export const metadata = {
  title: 'My trips-page',
}

export default async function TripsPageTemplate() {
  const { sessionClaims } = await auth()

  return (
    <div>
      <Suspense fallback={<div />}>
        <div className='text-4xl mb-8'>Training sessions</div>
        <div className='mb-16'>
          <Button>Add new training cycle</Button>
        </div>

        <div className='flex gap-4 max-w-full overflow-x-scroll'>
          {mockTrainingCycles.map((cycle) => (
            <Card key={cycle._id} className='mb-2 min-w-xl'>
              <CardHeader>
                <CardTitle className='text-lg'>{cycle.title}</CardTitle>
                <CardDescription>
                  {getFormattedDate(cycle.startDate, 'medium')} -{' '}
                  {getFormattedDate(cycle.endDate, 'medium')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {mockWorkouts.map((workout) => {
                  if (workout.cycleId === cycle._id) {
                    return (
                      <WorkoutComponent
                        key={workout.title}
                        workout={workout as Workout}
                      />
                    )
                  } else {
                    return null;
                  }
                })}
              </CardContent>
              <CardFooter>
                <Button variant='outline'>Add new workout</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Suspense>
    </div>
  )
}
