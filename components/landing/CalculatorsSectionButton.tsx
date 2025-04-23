'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import { usePlausible } from 'next-plausible'

interface Props {
  url: string
  type: string
}

export const CalculatorsSectionButton = ({ url, type }: Props) => {
  const plausible = usePlausible()

  return (
    <Button
      asChild
      size='sm'
      variant='ghost'
      onClick={() => plausible('calc_card_click', { props: { type } })}
    >
      <Link href={url}>
        Перейти <ArrowRightIcon />
      </Link>
    </Button>
  )
}
