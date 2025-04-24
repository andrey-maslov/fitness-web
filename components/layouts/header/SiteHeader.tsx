import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BicepsFlexed, Menu } from 'lucide-react'
import { NavigationMenuComponent } from '@/components/layouts/header/NavigationMenu'
import { calculators } from '@/components/landing/CalculatorsSection'

export const SiteHeader = () => {
  return (
    <header className='flex justify-between h-16 w-full shrink-0 items-center px-4 md:px-6 border-b border-muted'>
      <Link
        href='/'
        className='mr-6 flex text-muted-foreground min-w-[200px]'
        prefetch={false}
      >
        <BicepsFlexed className='h-6 w-6 mr-2' />
        <span className='uppercase font-extrabold'>Make me strong</span>
      </Link>

      <div className='hidden lg:flex w-full justify-center'>
        <NavigationMenuComponent />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='lg:hidden'>
            <Menu className='h-6 w-6' />
            <span className='sr-only'>Переключатель навигационного меню</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='right'>
          <div className='grid gap-2 py-10 px-6'>
            <SheetTitle className='font-semibold mb-4 pb-4 border-b-1 border-muted'>
              Калькуляторы
            </SheetTitle>

            <SheetDescription>
              {calculators.map((item, index) => (
                <Link
                  href={item.href}
                  className='flex w-full items-center py-2 text-md'
                  prefetch={false}
                  key={item.type}
                >
                  {item.title}
                </Link>
              ))}
            </SheetDescription>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
