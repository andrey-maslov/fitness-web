import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { calculators } from '@/components/landing/CalculatorsSection'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export const NavigationMobile = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='lg:hidden'>
          <Menu className='h-6 w-6' />
          <span className='sr-only'>Переключатель навигационного меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <div className='grid gap-2 py-10'>
          <SheetTitle className='font-semibold mb-2 pb-4 px-6 border-b-1 border-muted'>
            Калькуляторы
          </SheetTitle>

          <SheetDescription className='px-4 text-md'>
            {calculators.map((item, index) => (
              <Link
                href={item.href}
                className='flex w-full items-center py-4 border-b-1 border-muted'
                prefetch={false}
                key={item.type}
                onClick={() => setOpen(false)}
              >
                <item.icon className='mr-3' size={18} />
                {item.title}
              </Link>
            ))}
          </SheetDescription>
        </div>
      </SheetContent>
    </Sheet>
  )
}
