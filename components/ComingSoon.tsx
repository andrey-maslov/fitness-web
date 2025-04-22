import { SubscribeForm } from '@/components/SubscribeForm'

export default function ComingSoon() {
  return (
    <main className='max-w-xl mx-auto p-6 text-center'>
      <h1 className='text-3xl font-bold mb-4'>Скоро будет доступно</h1>
      <p className='text-muted-foreground'>
        Этот калькулятор находится в разработке. Подпишитесь на обновления,
        чтобы узнать о запуске первым.
      </p>
      <SubscribeForm />
    </main>
  )
}
