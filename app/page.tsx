import NextLink from 'next/link'

export default function Home() {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='inline-block max-w-xl text-center justify-center'>
        <h1>Title</h1>

        <h2>Subtitle</h2>
      </div>

      <div className='flex gap-3'>
        <NextLink href={'/training-sessions'}>Start</NextLink>
      </div>
    </section>
  )
}
