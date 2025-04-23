import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { BicepsFlexed, Menu } from 'lucide-react'
import { NavigationMenuComponent } from '@/components/layouts/header/NavigationMenu'

export const SiteHeader = () => {
  return (
    <header className='flex justify-between h-20 w-full shrink-0 items-center px-4 md:px-6 border-b border-muted'>
      <Link href='/' className='mr-6 flex text-muted-foreground min-w-[200px]' prefetch={false}>
        <BicepsFlexed className='h-6 w-6 mr-2' />
        <span className="uppercase font-extrabold">Make me strong</span>
      </Link>

      <div className='hidden lg:flex w-full justify-center'>
        <NavigationMenuComponent />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='lg:hidden'>
            <Menu className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='right'>
          <div className='grid gap-2 py-10 px-6'>
            {siteConfig.navItemsTopMenu.map((item, index) => (
              <Link
                href={item.href}
                className='flex w-full items-center py-2 text-lg font-semibold'
                prefetch={false}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
