import React from 'react'
import { Button } from './ui/button'

const ServiceFooter = () => {
  return (
    <footer className="w-full bg-blue-600 px-6 py-10 mt-16  flex flex-col md:flex-row items-center justify-between gap-6">
    <h2 className="text-white text-xl font-semibold text-center md:text-left">
      Need More Services?
    </h2>
    <Button className="bg-transparent text-white hover:bg-blue-600 font-semibold px-4 py-8   transition rounded-full border border-white cursor-pointer">
      Request a Personalized Service
    </Button>
  </footer>
  )
}

export default ServiceFooter