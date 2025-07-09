import Image from 'next/image'
import React from 'react'
import img from "@/public/journey.png"
import { Button } from './ui/button'

const Journey = () => {
  return (
    <footer className="relative w-full h-[85vh]">
      {/* Background Image */}
      <Image
        src={img}
        alt="Journey Image"
        fill
        className="object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Text on top */}
      <div className="absolute inset-0 flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-center z-20 px-4 mt-20 md:mt-90">
        <h2 className="text-white text-2xl md:text-4xl font-semibold text-center">
          Our Journey Began 20 Years Ago
        </h2>

        <Button className={"bg-transparent border border-white rounded-full py-8 px-8 cursor-pointer hover:bg-transparent"}>
            Read Our Story
        </Button>
      </div>
    </footer>
  )
}

export default Journey
