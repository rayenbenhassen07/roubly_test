'use client'
import useModelCalender from '@/hooks/useModelCalender';
import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Services = () => {
  const modelC = useModelCalender();
  return (
    <div className=' text-center text-black bg-white py-20 mx-2' id='Services'>
      
      <h2 className='space-x-5 tracking-widest text-sm lg:text-lg font-semibold text-blue-500'>ROUBLY GROUP</h2>
     
      <h1 className='space-x-5 tracking-widest text-lg lg:text-3xl font-extrabold'>What we do.</h1>

      <div className='pt-10 flex flex-col gap-5 mx-2 lg:text-lg '>
        <div>At <span className='font-bold'>Roubly Group</span>, we offer <span className='font-bold'>comprehensive</span> web development solutions tailored to meet your unique <span className='font-bold'>needs</span> and <span className='font-bold'>goals</span>.</div>
        <h2>Here's how we work:</h2>
      </div>
      
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:mx-20 mx-2 my-10'>

        <div className='flex flex-col items-start gap-5  px-4  pt-10 pb-20 rounded-xl shadow-lg bg-blue-100'>
            <div className='flex gap-2 justify-center '>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium '>Consultation and Discovery</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium'>Strategic Planning</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium'>Design and Development</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium'>Testing and Quality Assurance</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium '>Launch and Deployment</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium text-start'>Post-launch Support and Maintenance</div>
            </div>
            <div className='flex gap-2 justify-center items-center'>
                <FaCheckCircle className='text-blue-600' size={25}/>
                <div className='text-base lg:text-xl font-medium'>Continuous Improvement</div>
            </div>
            
        </div>

      </div>

      <div className='pt-5 flex flex-col gap-5 mx-2 lg:text-lg items-center'>
        <div>At <span className='font-bold'>Roubly Group</span>,we're more than just web developers—we're your dedicated partners in success.</div>
        <div><span className='font-bold'>Contact us</span> today to learn how we can help elevate your online presence and achieve your business objectives.</div>
        <button className='bg-blue-500 hover:bg-blue-400 p-3 lg:p-5 rounded-3xl text-white font-bold lg:text-xl shadow-lg ' onClick={()=>{modelC.onOpen()}}>FREE CONSULTATION</button>
      </div>
      
      
    </div>
  )
}

export default Services