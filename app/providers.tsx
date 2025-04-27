import { PropsWithChildren } from 'react'
import PlausibleProvider from 'next-plausible'

export interface ProvidersProps {}

export function Providers({ children }: PropsWithChildren<ProvidersProps>) {
  return (
    <PlausibleProvider domain='makemestrong.fit'>
      {children}
    </PlausibleProvider>
  )
}
