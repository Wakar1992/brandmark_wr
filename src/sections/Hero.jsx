import React from 'react'
import heroimg from '../assets/heroimg.png'
import backgroundImage1 from '../assets/homeimg.webp'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

function Hero() {
  return (
    <div id='hero' className='bg-black w-full lg:h-[700px] h-fit mt-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between 
    items-center lg:flex-row flex-col lg:gap-[50px] bg-cover bg-center' style={{
      backgroundImage: `url(${backgroundImage1})`}}>
        <motion.div
        initial='hidden'
        whileInView='visible'
        variants={slideUpVariants}
        className='lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4'
        >
          <motion.h1
          variants={slideUpVariants}
          className='text-yellow-500 uppercase text-2xl'
          >
            WE ARE WATERPROOFING EXPERTS
          </motion.h1>
          <motion.h1
          variants={slideUpVariants}
          className='text-white uppercase text-[50px] font-bold'
          >
            YOUR DREAM, OUR EXPERTISE IN WATERPROOFING
          </motion.h1>
          <div className='w-[120px] h-[6px] bg-yellow-500'></div>
          <p className='text-white text-[20px]'>
          At Aquaproofing Company, we specialize in delivering top-tier waterproofing solutions tailored to your unique needs. With years of experience, our expert team ensures your property remains safe, secure, and protected from water damage. Whether you're building a new space or enhancing an existing one, we bring your vision to life with precision, reliability, and cutting-edge technology. Trust us to protect your dream and elevate your property’s longevity with the best waterproofing services in the industry.
          </p>
          <motion.div
          initial='hidden'
          whileInView='visible'
          variants={zoomInVariants}
          className='flex justify-center items-start gap-5'
          >
            <motion.button
            variants={zoomInVariants}
            className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3
             rounded-lg text-black font-bold'
            >
              READ MORE
            </motion.button>
            <motion.button
            variants={zoomInVariants}
            className='border-white hover:border-yellow-500 hover:text-yellow-500 px-10 py-[10px]
             border-2 rounded-lg text-white font-bold'
            >
              REACH US
            </motion.button>
          </motion.div>
        </motion.div>
        <div className='w-[40%] flex flex-col justify-end items-end ' >
          <motion.img 
          initial='hidden'
          whileInView='visible'
          variants={zoomInVariants}
          src={heroimg} alt='Hero Image'
          className='lg:h-[600px] h-[300px] lg:mb-[-100px]'
          />
        </div>
    </div>
  )
}

export default Hero
