import { SubscriptionForm } from '@/components/SubscriptionForm'
import { SubscribeSectionTags } from '@/components/landing/SubscribeSectionTags'

export default function SubscribeSection() {
  return (
    <>
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
            <SubscriptionForm source='landing' />
            <div className='mt-10 flex flex-wrap justify-center gap-2 sm:mt-20'>
              <SubscribeSectionTags />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
