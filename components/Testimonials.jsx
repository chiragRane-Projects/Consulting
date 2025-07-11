'use client'

import React from 'react'
import Slider from 'react-slick'
import { Quote } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Amit Shah',
    title: 'CEO, BrightCorp',
    quote:
      'Ecliptica completely transformed how we manage and scale. We saw a 40% rise in client satisfaction!',
    avatar: '/avatar1.jpg',
  },
  {
    name: 'Ritika Mehta',
    title: 'Founder, Bloom Interiors',
    quote:
      'We love how intuitive and elegant the system is. Their dedication is unmatched.',
    avatar: '/avatar2.jpg',
  },
  {
    name: 'Junaid Iqbal',
    title: 'CTO, TekForge',
    quote:
      'The performance and support were beyond expectations. True partners in growth.',
    avatar: '/avatar3.jpg',
  },
]

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  }

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">What our clients say</h2>
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-4">
              <div className="bg-gray-100 p-8 rounded-xl shadow-md">
                <Quote className="w-6 h-6 text-sky-600 mb-4 mx-auto" />
                <p className="text-gray-700 text-lg italic mb-6">"{t.quote}"</p>
                <div className="flex items-center justify-center gap-3">
                  <Avatar className="w-12 h-12 border border-zinc-900 flex justify-center">
                    <AvatarImage src={t.avatar} alt={t.name} />
                    <AvatarFallback>{t.name.split(' ')[0][0]}{t.name.split(' ')[1]?.[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonials
