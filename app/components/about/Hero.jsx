import React from 'react'
import CarSales from "@/app/images/car_sales_2.jpg"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex items-center justify-between max-w-[80vw] mx-auto my-10'>
        <div className="max-w-xl">
            <h1 className="text-3xl text-blue-700 font-bold mb-4">About Dronicx Auto</h1>
            <p className="">Welcome to <span className='text-blue-700'>Dronicx Auto</span>, your trusted destination for quality vehicles and exceptional service. We take great pride in being a leading name in the automotive industry, dedicated to providing you with a seamless and enjoyable car buying experience.</p>
        </div>
        <div className="hidden lg:flex">
            <Image src={CarSales} width={200} height={500} quality={100} priority className="object-cover w-[350px] h-[500px] rounded-xl" />
        </div>
    </div>
  )
}

export default Hero