'use clients'
import { usePlausible } from 'next-plausible'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const HeroButtons = () => {
  const plausible = usePlausible()

  return (
    <>
      <Button
        size={'lg'}
        color='primary'
        asChild
        onClick={() => plausible('hero_go_calcs_click')}
      >
        <Link href='/#calculators'>Перейти к калькуляторам</Link>
      </Button>
      {/*<Button size={'lg'} variant={'outline'}>*/}
      {/*  Узнать больше*/}
      {/*</Button>*/}
    </>
  )
}
