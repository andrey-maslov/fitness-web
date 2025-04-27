import Link from 'next/link'
import { BicepsFlexed } from 'lucide-react'
import { NavigationMenuComponent } from '@/components/layouts/header/NavigationMenu'
import { NavigationMobile } from '@/components/layouts/header/NavigationMobile'

export const SiteHeader = () => {
  return (
    <header className=' border-b border-muted'>
      <div className='flex justify-between h-16 w-full shrink-0 items-center px-4 md:px-6 max-w-[1800px] mx-auto'>
        <Link
          href='/'
          className='mr-6 flex text-muted-foreground min-w-[200px]'
          prefetch={false}
        >
          <BicepsFlexed className='h-6 w-6 mr-2' />
          <span className='uppercase font-extrabold'>Make me strong</span>
        </Link>

        <div className='hidden lg:flex w-fullr'>
          <NavigationMenuComponent />
        </div>

        <NavigationMobile />
      </div>
    </header>
  )
}
