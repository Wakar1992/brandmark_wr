import React from 'react'
import { motion } from 'framer-motion'
import { slideUpVariants, zoomInVariants } from './animation'

function About() {
  return (
    <div className='lg:w-[80%] w-[90%] m-auto py-[60px] flex lg:flex-row flex-col
    jusify-between items-start gap-[50px]' id='about'>
      <motion.div
      initial='hidden'
      whileInView='visible'
      variants={slideUpVariants}
      className='lg:w-[60%] w-full flex flex-col justify-center items-start gap-6'
      >
        <motion.h1
        variants={slideUpVariants}
        className='text-yellow-500 text-3xl'
        >
          welcome to
        </motion.h1>
        <motion.h1
        variants={slideUpVariants}
        className='text-white uppercase text-[40px] font-bold'
        >
          Aquaproofing Company
        </motion.h1>
        <div className='w-[120px] h-[6px] bg-yellow-500'></div>
        <p className='text-3xl italic text-gray-50 mt-[60px]'>
          We are the leader with 12 years of experiance in the waterproofing market. 
        </p>
      </motion.div>
      <motion.div
      initial='hidden'
      whileInView='visible'
      className='lg:w-[40%] w-full flex flex-col justify-center items-start gap-6'
      >
        <p className='text-white text-lg text-justify'>
        Welcome to Aquaproofing Company – your trusted leader in the waterproofing industry for over 12 years. With a decade of expertise, we have honed our skills and built a reputation for delivering high-quality, reliable waterproofing solutions. Whether it's residential, commercial, or industrial projects, we are committed to providing tailored services that meet your specific needs. Our team uses the latest techniques and technology to ensure lasting protection against water damage, so you can have peace of mind knowing your property is in the hands of professionals. Trust Aquaproofing Company to safeguard your investment for years to come.
        </p>

      <motion.button 
        variants={zoomInVariants}
        className='bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg font-bold text-black'
        >
        READ MORE
      </motion.button>
      </motion.div>
    </div>
  )
}

export default About
