import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { siteConfig } from '@/config/site'
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'

export const SiteHeader = () => {
  const { user } = useUser()

  return (
    <header className='flex h-20 w-full shrink-0 items-center px-4 md:px-6'>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='lg:hidden'>
            <MenuIcon className='h-6 w-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <Link href='#' prefetch={false}>
            <MountainIcon className='h-6 w-6' />
            <span className='sr-only'>Make me strong</span>
          </Link>
          <SignedIn>
            <div className='grid gap-2 py-6'>
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
          </SignedIn>
        </SheetContent>
      </Sheet>
      <Link href='#' className='mr-6 hidden lg:flex' prefetch={false}>
        <MountainIcon className='h-6 w-6' />
        <span className='sr-only'>Make me strong</span>
      </Link>
      <SignedIn>
        <NavigationMenu className='hidden lg:flex'>
          <NavigationMenuList>
            {siteConfig.navItemsTopMenu.map((item, index) => (
              <NavigationMenuLink asChild key={item.label}>
                <Link
                  href={item.href}
                  className='flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50'
                  prefetch={false}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </SignedIn>

      <SignedOut>
        <div className='ml-auto flex gap-2'>
          <Button variant='outline' asChild>
              <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild>
              <Link href="/sign-up">Sign up</Link>
          </Button>
        </div>
      </SignedOut>

      <SignedIn>
        <div className='ml-auto flex items-center justify-between p-6'>
          <span className='text-foreground-500 inline-block mr-2 text-small'>
            Hello, {user?.firstName ?? 'unknown guest'}!
          </span>
          <UserButton />
        </div>
      </SignedIn>
    </header>
  )
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  )
}
