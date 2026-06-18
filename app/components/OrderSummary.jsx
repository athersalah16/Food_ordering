import React from 'react'
import { useCartContex } from '../contex/useContex'

function OrderSummary() {
    const {total} = useCartContex()
  return (
    <div className='border w-[400px] h-[400px] mt-4 flex flex-col justify-start text-center  gap-4 border-gray-200  rounded-lg'>
      <h1 className='text-black font-bold text-2xl'>Order Summary </h1>
      <div className='flex justify-between px-2'> 
        <p className='text-gray-500'>Subtotal</p>
        <span className='text-black font-bold'>${}</span>

      </div>
    <div className='flex justify-between px-2'> 
        <p className='text-gray-500'>Delivery Fee</p>
        <span className='text-black font-bold'>
            {total>=25 ?(<p className='uppercase text-xl text-green-500'>free</p>):(<>${total}</>)}
        </span>

      </div>
    </div>
  )
}

export default OrderSummary
