import React from 'react'
import Image from 'next/image'
import { ChartLine, PieChart } from 'lucide-react'
import commitmentImg from '@/public/commitment.png'

const Commitment = () => {
  return (
    <main className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-1 lg:py-12 bg-white">
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <figure className="relative group">
              {/* Actual responsive image */}
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={commitmentImg}
                  alt="Commitment image"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  placeholder="blur"
                  priority
                />
              </div>

              {/* Stat cards */}
              <figcaption className="absolute bottom-4 inset-x-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Growth Measured */}
                <div
                  aria-label="Growth Performance Metrics"
                  className="bg-gradient-to-br from-sky-500 to-sky-600 text-white p-4 rounded-lg flex flex-col items-center gap-2 shadow-lg backdrop-blur-sm bg-opacity-95 flex-1 transition-transform duration-200 hover:scale-105"
                >
                  <ChartLine className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
                  <data value="30" className="font-bold text-xl sm:text-2xl">
                    30%
                  </data>
                  <p className="font-semibold text-xs sm:text-sm text-center">Growth Measured</p>
                </div>

                {/* Cost Savings */}
                <div
                  aria-label="Cost Optimization Results"
                  className="bg-white bg-opacity-95 text-gray-800 p-4 rounded-lg flex flex-col items-center gap-2 shadow-lg backdrop-blur-sm flex-1 transition-transform duration-200 hover:scale-105"
                >
                  <PieChart className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" aria-hidden="true" />
                  <data value="25" className="font-bold text-xl sm:text-2xl text-gray-800">
                    25%
                  </data>
                  <p className="font-semibold text-xs sm:text-sm text-center text-gray-700">
                    Cost Savings
                  </p>
                </div>
              </figcaption>
            </figure>
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <header>
              <h2 className="font-semibold text-md md:text-xl tracking-wider uppercase text-blue-500">
              ⸻ Our Commitment 
              </h2>
              <p className="text-md sm:text-lg text-gray-600 mt-4">
                Delivering measurable results through dedicated performance and strategic
                optimization
              </p>
            </header>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ChartLine
                  className="w-6 h-6 text-sky-600 mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Growth</h3>
                  <p className="text-gray-600">
                    Consistent 30% growth metrics across all key performance indicators
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PieChart
                  className="w-6 h-6 text-sky-600 mt-1 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Cost Efficiency</h3>
                  <p className="text-gray-600">
                    Strategic optimization resulting in 25% cost savings without compromising
                    quality
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2">
                Learn More About Our Results
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Commitment
