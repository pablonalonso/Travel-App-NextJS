import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row container mx-auto px-20 py-5 overflow-hidden hero-image'>
      
      <div className='flex flex-col xl:flex-1'>
        <Image src={"camp.svg"} alt="" width={50} height={50}/>
        <h1 className='text-4xl md:text-6xl lg:text-8xl text-center xl:text-left font-bold pb-5'>Incredible Destinations</h1>
        <p className='text-gray-500 text-justify'>From the sun-kissed beaches of exotic islands to the bustling energy of iconic cities, our comprehensive travel experiences promise to satiate your curiosity, indulge your senses, and redefine the art of exploration.</p>
        <div className='flex justify-center xl:justify-start gap-2 p-5'>
          { Array(5).fill(1).map((_, index) => (
            <Image key={index}
            src={"star.svg"}
            alt=''
            width={25}
            height={25}
            />
          ))}
          <div className='flex gap-3'>
            <p className='font-bold'>198k</p>
            <p className='whitespace-nowrap'>Excellent Reviews</p>
          </div>
        </div>
        <div className='flex justify-center xl:justify-start'>
            <Button
            type='button'
            title="Download App"
            variant="btn_green"
            />

            <Button
            type='button'
            title="How we work?"
            icon="play.svg"
            variant="btn_white"
            />

        </div>
      </div>

      <div className='relative flex items-start flex-1'>
        <div className='hidden absolute xl:flex flex-col gap-5 px-8 py-4 btn_dark_green top-0 right-0 rounded-2xl'>
          <div>
            <div className='flex justify-between gap-14'>
              <p>Location</p>
              <Image
                src={"close.svg"}
                alt=''
                height={25}
                width={25}
              />
            </div>
            <p className='font-bold whitespace-nowrap'>Aguas Calientes</p>
          </div>
          <div className='flex justify-between gap-5'>
            <div>
              <p>Distance</p>
              <p className='whitespace-nowrap font-bold'>173.28 mi</p>
            </div>
            <div>
              <p>Elevation</p>
              <p className='whitespace-nowrap font-bold'>2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero