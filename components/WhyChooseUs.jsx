import { Clipboard, Archive, MessageSquare } from 'lucide-react';
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className='flex flex-col items-start md:items-center px-6 md:px-20 py-20'>
      {/* Section Title */}
      <div className='flex items-center space-x-2 text-blue-400 mb-4'>
        <span className='font-medium text-2xl'>⸻</span>
        <h2 className='font-semibold text-md tracking-wider uppercase'>Why Choose Us</h2>
      </div>

      {/* Headline & Description */}
      <div className='flex flex-col gap-4 text-left md:text-center max-w-4xl'>
        <p className='text-2xl md:text-6xl font-semibold text-black leading-tight'>
          We strive to deliver value to our clients.
        </p>
        <p className='font-light text-gray-700 text-md md:text-lg'>
          We are dedicated to providing the highest level of service, delivering innovative solutions, and exceeding expectations in everything we do.
        </p>
      </div>

      {/* Feature Cards */}
      <article className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 w-full max-w-6xl'>
        {/* Card 1 */}
        <div className='flex items-start gap-4'>
          <Archive className='text-blue-500' size={32} />
          <div>
            <h3 className='font-semibold text-lg'>Proven Track Record</h3>
            <p className='text-gray-700 font-light'>
              We have helped countless businesses overcome challenges.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='flex items-start gap-4'>
          <MessageSquare className='text-blue-500' size={32} />
          <div>
            <h3 className='font-semibold text-lg'>Collaborative Approach</h3>
            <p className='text-gray-700 font-light'>
              We ensure transparency throughout the consulting process.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='flex items-start gap-4'>
          <Clipboard className='text-blue-500' size={32} />
          <div>
            <h3 className='font-semibold text-lg'>Innovative Solutions</h3>
            <p className='text-gray-700 font-light'>
              We leverage the latest technologies to deliver solutions.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default WhyChooseUs;
