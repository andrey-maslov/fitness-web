'use client'

import { ChevronRight } from 'lucide-react'
import { usePlausible } from 'next-plausible'

export const HeroProVersionButton = () => {
  const plausible = usePlausible()

  return (
    <a
      className='inline-flex items-center gap-x-2 rounded-full border p-1 ps-3 text-sm transition'
      href='/#subscribe'
      onClick={() => plausible('cta_pro_clicked')}
    >
      PRO версия - попробовать бесплатно
      <span className='inline-flex items-center justify-center gap-x-2 rounded-full px-2.5 py-1.5 text-sm font-semibold'>
        <ChevronRight size={24} />
      </span>
    </a>
  )
}
