'use client'

import { useEffect, useState } from 'react'

import { Providers } from '@/app/providers'
import { SiteHeader } from '@/components/layouts/header/SiteHeader'
import Footer from '@/components/layouts/Footer'
// import ErrorBoundary from '@/components/ErrorBoundary'

type PagesLayoutProps = {
  children: React.ReactNode
}

export const PagesLayout = ({ children }: PagesLayoutProps) => {
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return (
    <>
      {isClient ? (
        <Providers>
          <div className='relative flex flex-col h-screen max-w-[100%]'>
            <SiteHeader />
            <main className='container mx-auto max-w-7xl py-8 xl:py-16 px-4 flex-grow'>
              {children}
              {/*<ErrorBoundary>{children}</ErrorBoundary>*/}
            </main>
            <Footer />
          </div>
        </Providers>
      ) : (
        <></>
      )}
    </>
  )
}
