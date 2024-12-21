import React from 'react'

export default function Featurecard() {
  return (
    <section>
        <div className='w-[100%] bg-[#FAF4F4] grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7  p-[2rem] md:py-[3rem]  md:px-[4rem] lg:px-[7rem]'>
            <div className='p-3'>
                <h1 className='text-[32px] font-medium'>Free Delivery</h1>
                <p>For all oders over $50, consectetur adipim scing elit.</p>
            </div>
            <div className='p-3'>
                <h1 className='text-[32px] font-medium'>90 Days Return</h1>
                <p>If goods have problems, consectetur adipim scing elit.</p>
            </div>
            <div className='p-3'>
                <h1 className='text-[32px] font-medium'>Secure Payment</h1>
                <p>100% secure payment, consectetur adipim scing elit.</p>
            </div>
        </div>
    </section>
  )
}
