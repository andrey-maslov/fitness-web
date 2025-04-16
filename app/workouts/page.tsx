import React, { Suspense } from 'react'
import { auth } from '@clerk/nextjs/server'
import {Button} from "@/components/ui/button";
import {TrainingCycle} from "@/types/types";

export const metadata = {
  title: 'My trips-page',
}

export default async function TripsPageTemplate() {
  const { sessionClaims } = await auth()

  // console.log('SC', sessionClaims)
  const trainingCycles = []
  const workouts = []

  return (
    <div>
      <Suspense fallback={<div />}>
        <div>Sessions</div>
          <Button>Add new training cycle</Button>
          <Button>Add new workout</Button>
      </Suspense>
    </div>
  )
}
