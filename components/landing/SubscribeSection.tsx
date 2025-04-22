import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRight } from 'lucide-react'
import { SubscribeForm } from '@/components/SubscribeForm'

const topics = [
  'Здоровье',
  'Сила и форма',
  'Прогресс',
  'Советы и гайды',
  'Мотивация',
  'Осознанность',
]

export default function SubscribeSection() {
  return (
    <>
      {/* Hero */}
      <div className='relative overflow-hidden'>
        <div className='container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]'>
          <div className='text-center'>
            <h2 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl'>
              Инсайты
            </h2>
            <p className='text-muted-foreground mt-3 text-xl max-w-3xl mx-auto'>
              Подпишитесь, чтобы получать уведомления о новых калькуляторах,
              статьях и инструментах для вашего прогресса в тренировках,
              здоровье и питании.
            </p>
            <SubscribeForm />
            <div className='mt-10 flex flex-wrap justify-center gap-2 sm:mt-20'>
              {topics.map((topic) => (
                <Button key={topic} variant='outline'>
                  {topic}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  )
}
