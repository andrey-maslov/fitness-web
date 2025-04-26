'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { usePlausible } from 'next-plausible'
import { useState, FormEvent } from 'react'

interface Props {
  source?: string
}

export const SubscriptionForm = ({ source }: Props) => {
  const plausible = usePlausible()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/local-subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      })
      if (res.ok) {
        plausible('subscribe_success', { props: { source } })
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className='relative mx-auto mt-7 max-w-xl sm:mt-12'>
      <form onSubmit={handleSubmit}>
        <div className='bg-background relative z-10 flex flex-col md:flex-row space-x-3 rounded-lg border p-3 shadow-lg'>
          <div className='flex-[1_0_0%] mb-3 md:mb-0'>
            <Label htmlFor='email' className='sr-only'>
              Ввести email
            </Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='Ввести email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='h-full'
            />
          </div>
          <div className='flex-[0_0_auto]'>
            <Button type='submit' className='w-full'>
              Подписаться
              <ArrowRight className='size-3.5' />
            </Button>
          </div>
        </div>
      </form>
      {status === 'success' && (
        <p className='text-green-600 mt-2'>Вы успешно подписались!</p>
      )}
      {status === 'error' && (
        <p className='text-red-600 mt-2'>
          Ошибка при подписке. Попробуйте ещё раз.
        </p>
      )}
      <FormSVG />
    </div>
  )
}

const FormSVG = () => (
  <>
    <div className='absolute end-0 top-0 hidden translate-x-20 -translate-y-12 md:block'>
      <svg
        className='h-auto w-16 text-orange-500'
        width={121}
        height={135}
        viewBox='0 0 121 135'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164'
          stroke='currentColor'
          strokeWidth={10}
          strokeLinecap='round'
        />
        <path
          d='M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5'
          stroke='currentColor'
          strokeWidth={10}
          strokeLinecap='round'
        />
        <path
          d='M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874'
          stroke='currentColor'
          strokeWidth={10}
          strokeLinecap='round'
        />
      </svg>
    </div>
    {/* End SVG Element */}
    {/* SVG Element */}
    <div className='absolute start-0 bottom-0 hidden -translate-x-32 translate-y-10 md:block'>
      <svg
        className='h-auto w-40 text-cyan-500'
        width={347}
        height={188}
        viewBox='0 0 347 188'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426'
          stroke='currentColor'
          strokeWidth={7}
          strokeLinecap='round'
        />
      </svg>
    </div>
    {/* End SVG Element */}
  </>
)
