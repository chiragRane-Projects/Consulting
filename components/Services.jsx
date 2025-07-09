import Image from 'next/image'
import React from 'react'
import Grid1 from "@/public/grid1.png"
import Grid2 from "@/public/grid2.png"
import Grid3 from "@/public/grid3.png"
import { Button } from './ui/button'

const Services = () => {
  return (
    <main className='flex flex-col py-25 px-8 md:px-20'>

      <div className='flex flex-row space-x-2 text-blue-400  justify-start '>
        <p className='font-medium text-2xl md:text-2xl'>⸻</p>
        <p className='font-medium text-2xl md:text-2xl tracking-wider'>Our Services</p>
      </div>

      <div className='flex flex-col gap-4  md:grid md:grid-cols-2 p-6 md:p-8'>
        <h2 className='font-semibold text-3xl md:font-extrabold md:text-6xl'>We Offer a wide range of services</h2>
        <p className='text-md md:mt-10 leading-10'>By combining our industry knowledge with cutting-edge tools and methodologies, we develop strategies that drive measurable results.</p>
      </div>

      {/* Images Layout */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 cursor-pointer">
        {/* Left: One large service card */}
        <div className="relative group w-full md:-[620px] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 ease-in-out">
          <Image
            src={Grid1}
            alt="Market research"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-300" />
          <div className="absolute bottom-4 left-4 right-4 text-white transition-all duration-300">
            <h3 className="text-lg font-semibold">Market research</h3>
            <p className="text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
              Our research services provide valuable insights into market trends, customer behavior, and competitive landscapes.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">
          {/* Top Card */}
          <div className="relative group w-full h-[300px] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 ease-in-out">
            <Image
              src={Grid2}
              alt="Strategic planning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-300" />
            <div className="absolute bottom-4 left-4 right-4 text-white transition-all duration-300">
              <h3 className="text-lg font-semibold">Strategic planning</h3>
              <p className="text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                Helping businesses create focused, data-driven growth strategies for long-term success.
              </p>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="relative group w-full h-[300px] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 ease-in-out">
            <Image
              src={Grid3}
              alt="Financial advisory"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-300" />
            <div className="absolute bottom-4 left-4 right-4 text-white transition-all duration-300">
              <h3 className="text-lg font-semibold">Financial advisory</h3>
              <p className="text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                Expert guidance on budgeting, investments, and capital allocation tailored to your goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-500 w-full px-6 py-10 md:px-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6 rounded-sm mt-16 md:mt-24">
        <p className="text-white text-lg md:text-2xl font-semibold text-center md:text-left">
          Need More Services?
        </p>
        <Button className="rounded-full px-4 md:px-8 py-7 text-base font-semibold bg-transparent border border-white cursor-pointer hover:bg-blue-500 duration-300 transition-colors ">
          Request Personalized Service
        </Button>
      </footer>

    </main>
  )
}

export default Services