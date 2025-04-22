'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import PlausibleProvider from 'next-plausible'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
      retry: 1,
    },
  },
})

export interface ProvidersProps {}

export function Providers({ children }: PropsWithChildren<ProvidersProps>) {
  const router = useRouter()

  return (
    // <ClerkProvider>
    <PlausibleProvider domain='makemestrong.fit'>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </PlausibleProvider>
    // </ClerkProvider>
  )
}
