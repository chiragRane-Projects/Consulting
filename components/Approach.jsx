import React from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import approach from "@/public/approach.png"

const Approach = () => {
  return (
    <section className="py-12 md:py-24 px-6 md:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE: Image + floating card */}
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[400px] lg:h-[500px]">
          <Image
            src={approach}
            alt="Approach Image"
            className="w-full h-full object-cover rounded-xl"
          />
        
        {/* Floating card */}
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white rounded-xl shadow-lg p-4 md:p-6 w-[90%] md:w-[300px]">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-800 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3v18h18" /><path d="M18 17V9M13 17v-4M8 17v-2" /></svg>
              Sales this month
            </span>
            <span className="text-sm font-semibold text-blue-600">+30%</span>
          </div>

          {/* Mini bar chart */}
          <div className="flex items-end gap-1 h-16">
            <div className="w-2 md:w-3 bg-blue-300 h-[30%] rounded-sm"></div>
            <div className="w-2 md:w-3 bg-blue-400 h-[45%] rounded-sm"></div>
            <div className="w-2 md:w-3 bg-blue-500 h-[60%] rounded-sm"></div>
            <div className="w-2 md:w-3 bg-blue-600 h-[85%] rounded-sm"></div>
            <div className="w-2 md:w-3 bg-blue-500 h-[65%] rounded-sm"></div>
            <div className="w-2 md:w-3 bg-blue-400 h-[50%] rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Text */}
      <div className="flex flex-col gap-4">
        <p className="text-blue-600 font-semibold">Our approach</p>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Innovative approach to consulting
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          By combining our industry knowledge with cutting-edge tools and methodologies, we develop actionable strategies that drive measurable results.
        </p>

        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2 text-gray-800 font-medium">
            <Check className="text-blue-600 w-5 h-5" />
            We believe in fostering long-term partnerships
          </li>
          <li className="flex items-center gap-2 text-gray-800 font-medium">
            <Check className="text-blue-600 w-5 h-5" />
            We develop actionable plans to achieve your goals
          </li>
        </ul>
      </div>
    </div>
    </section >
  )
}

export default Approach
