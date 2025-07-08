'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import heroImg from "@/public/heroImg.jpg"
import Navbar from './Navbar'
import { Button } from './ui/button'
import c1 from "@/public/c1.png"
import c2 from "@/public/c2.png"
import c3 from "@/public/c3.png"
import c4 from "@/public/c4.png"
import c5 from "@/public/c5.png"

const logos = [c1, c2, c3, c4, c5]

const Hero = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImg}
        alt="Hero Image"
        fill
        priority
        className="object-cover object-[center_70%] md:object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Foreground Content */}
      <div className="absolute inset-0 z-20">
        <Navbar />

        {/* Centered Text + Buttons */}
        <div className="flex flex-col items-center justify-center h-full px-4 text-center text-white space-y-6">
          <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-4xl">
            Grow your business faster
          </h1>

          <p className="max-w-xl text-sm sm:text-base md:text-lg text-gray-300">
            With our expertise and dedication, we'll help you navigate challenges, seize opportunities, and achieve your business goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button className="bg-blue-600 rounded-full py-6 px-4 hover:bg-blue-500 transition duration-300 text-white text-base font-semibold cursor-pointer">
              Discover Our Services
            </Button>

            <Button className="rounded-full px-4 py-6 border border-gray-400 backdrop-blur bg-white/10 text-white hover:bg-white/20 hover:border-gray-300 transition duration-300 font-semibold text-base cursor-pointer">
              Reach Us For Audit
            </Button>
          </div>

          <div className=" mt-12  overflow-hidden">
            <div className="absolute inset-0 z-10 pointer-events-none" />
            <div className="flex animate-slide gap-16 w-max relative z-0 px-8 py-4 bg-transparent">
              {[...logos, ...logos].map((logo, idx) => (
                <Image
                  key={idx}
                  src={logo}
                  alt={`logo-${idx}`}
                  className="w-32 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
