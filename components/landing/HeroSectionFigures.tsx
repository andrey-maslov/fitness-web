import { Calculator } from 'lucide-react'

export const HeroSectionFigures = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='perspective relative h-[400px] w-full md:h-[500px]'>
        <div className='rotateX-[60deg] rotateZ-[45deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
          <div className='transform-style preserve-3d h-64 w-64 rounded-lg border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 shadow-xl'>
            <div className='absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]'></div>
            <div className='transform-style preserve-3d absolute -top-10 left-8 h-16 w-16'>
              <div className='absolute inset-0 translate-z-8 transform bg-blue-500/80 shadow-lg'></div>
              <div className='rotateY-90 absolute inset-0 translate-z-8 transform bg-blue-400/80 shadow-lg'></div>
              <div className='rotateX-90 absolute inset-0 translate-z-8 transform bg-blue-600/80 shadow-lg'></div>
            </div>
            <div className='transform-style preserve-3d absolute top-8 right-8 h-12 w-12'>
              <div className='absolute inset-0 translate-z-6 transform bg-purple-500/80 shadow-lg'></div>
              <div className='rotateY-90 absolute inset-0 translate-z-6 transform bg-purple-400/80 shadow-lg'></div>
              <div className='rotateX-90 absolute inset-0 translate-z-6 transform bg-purple-600/80 shadow-lg'></div>
            </div>
            <div className='transform-style preserve-3d absolute right-14 bottom-12 h-14 w-14'>
              <div className='absolute inset-0 translate-z-7 transform bg-emerald-500/80 shadow-lg'></div>
              <div className='rotateY-90 absolute inset-0 translate-z-7 transform bg-emerald-400/80 shadow-lg'></div>
              <div className='rotateX-90 absolute inset-0 translate-z-7 transform bg-emerald-600/80 shadow-lg'></div>
            </div>
            <div className='transform-style preserve-3d absolute bottom-10 left-10 h-10 w-10'>
              <div className='absolute inset-0 translate-z-5 transform bg-amber-500/80 shadow-lg'></div>
              <div className='rotateY-90 absolute inset-0 translate-z-5 transform bg-amber-400/80 shadow-lg'></div>
              <div className='rotateX-90 absolute inset-0 translate-z-5 transform bg-amber-600/80 shadow-lg'></div>
            </div>
          </div>
          <div className='animate-bounce-slow absolute -top-16 -left-16 h-8 w-8 rounded-full bg-pink-400 shadow-lg'></div>
          <div className='animate-bounce-slow absolute -top-12 right-0 h-6 w-6 rounded-full bg-yellow-400 shadow-lg delay-200'></div>
          <div className='animate-bounce-slow absolute -right-8 -bottom-8 h-10 w-10 rounded-full bg-blue-400 shadow-lg delay-300'></div>
          <div className='animate-bounce-slow absolute -bottom-12 left-4 h-7 w-7 rounded-full bg-green-400 shadow-lg delay-100'></div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-z-24 transform'>
            <div className='bg-background flex h-16 w-16 items-center justify-center rounded-2xl shadow-xl'>
              <Calculator size={36} className='text-purple-600' />
            </div>
          </div>
        </div>
        <div className='absolute top-[60%] left-1/2 h-12 w-64 -translate-x-1/2 transform rounded-full bg-black/10 blur-xl'></div>
        <div className='border-primary/20 animate-spin-slow absolute top-1/4 right-8 h-12 w-12 rounded-full border-4'></div>
        <div className='animate-spin-slow absolute bottom-1/4 left-8 h-16 w-16 rounded-full border-4 border-dashed border-amber-500/20 delay-300'></div>
        <div className='bg-primary/5 absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl'></div>
      </div>
    </div>
  )
}
