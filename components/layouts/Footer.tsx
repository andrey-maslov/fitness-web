import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className='w-full border-t bg-background'>
      <div className='container mx-auto px-4 md:px-6 2xl:max-w-[1400px] flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
        <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 order-2 lg:order-0'>
          <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
            Наш партнер -
            <a href='https://teamconstructor.pro' target='_blank'>
              {' '}
              Психологические тесты Teamconstructor
            </a>
          </p>
        </div>
        <p className='text-center text-sm text-muted-foreground md:text-left order-3 lg:order-1'>
          &copy; {new Date().getFullYear()} MakeMeStrong
        </p>
        <div className='flex flex-col items-center gap-4 md:flex-row md:gap-6 order-1 lg:order-3'>
          <nav className='flex gap-4 md:gap-6'>
            {siteConfig.footerNavMenu.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
