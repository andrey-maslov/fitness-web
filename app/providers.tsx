'use client'

import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
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
  return (
    <PlausibleProvider domain='makemestrong.fit'>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </PlausibleProvider>
  )
}
