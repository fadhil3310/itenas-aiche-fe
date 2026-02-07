import { createFileRoute } from '@tanstack/react-router'
import Footer from '@/components/Footer'
import PillInfo from '@/components/PillInfo'

export const Route = createFileRoute('/about-us/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className='flex flex-col justify-center text-center items-center relative overflow-y-scroll scrollbar-hide h-screen'>
    
          <div className='flex flex-col items-center h-[20vh] justify-center'>
            <PillInfo text='ABOUT US' showIcon={false} icon=''/>
    
            <div className='flex flex-col leading-9.5 mt-4'>
              <h1 className='font-nunito font-bold text-[40px] sm:text-[50px] 2xl:text-[64px]'>Siapa Kita?</h1>
    
              <p className='font-ibm font-bold text-[20px] bg-linear-to-r bg-clip-text text-transparent from-[#2563EB] to-[#10B981]'>Apa itu AIChE?</p>
            </div>
          </div>

          <div className='flex flex-col w-screen h-screen px-7 relative'>
            <p className='font-ibm font-medium text-[12px]'>AIChE SC ITENAS is a premier student body dedicated to bridging the gap between academia and industry through sustainable engineering practices. We are a community of innovators, thinkers, and future leaders.</p>
          </div>
    
      </div>
    
      <Footer />
    </>
  )
}
