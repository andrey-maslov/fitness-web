import React, { Suspense } from 'react'
import { auth } from '@clerk/nextjs/server'

export const metadata = {
  title: 'My trips-page',
}

export default async function TripsPageTemplate() {
  const { sessionClaims } = await auth()

  // console.log('SC', sessionClaims)

  return (
    <div>
      <Suspense fallback={<div />}>
        <div>
          Sessions
        </div>
      </Suspense>
    </div>
  )
}
