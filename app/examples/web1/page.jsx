'use client';
import Navbar from '@/Components/Navbar'
import React, { useState, useEffect } from 'react';
import useModelCalender from '@/hooks/useModelCalender';

import Image from 'next/image';
import { FaReact , FaHtml5 , FaCss3Alt } from "react-icons/fa";
import Modal from '@/Components/modals/Modal';
import Footer from '@/Components/Footer';

const page = () => {

    const modelC = useModelCalender();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setIsLoading(false);
        }, 2000); // Simulate 2 seconds of loading
    
        return () => clearTimeout(timeout);
      }, []);

  return (
    <>
        <Modal/>
        <Navbar/>
        <div className='container mx-auto px-4 py-8 pt-24'>
        {isLoading ? (
            <div className='flex justify-center items-center h-screen text-6xl'>
              <span className="loading loading-spinner loading-lg "></span>
            </div>
          ) : (
          <div className='max-w-4xl mx-auto'>
            <Image className='w-full mb-4 rounded-lg' width={1000} height={1000} src="/Projects/rayenPotfolio/web1.png" alt='' />
            <h2 className='text-2xl font-bold mb-2'>Portfolio website</h2>
            <p className='text-gray-700 mb-2 text-sm lg:text-base'>
              <span className=' font-bold'>Description:</span>{" "}
              "At Roubly, we're thrilled to have had the opportunity to develop Rayen Benhassen's portfolio website. Crafted with precision and powered by React, this website serves as a stunning showcase of Rayen's creative journey and expertise. Our team poured passion and expertise into every aspect of the development process, ensuring that the website not only reflects Rayen's talents but also sets a new standard for online portfolios. From seamless user experiences to visually captivating design elements, we're proud to have played a part in bringing Rayen's vision to life. Explore the website to see the culmination of our collaboration and the innovative possibilities of React in action."
            </p>
            <div className='w-full flex flex-wrap  justify-start gap-3 mt-3'>
              
                <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-blue-500 w-20'>
                    <FaReact />
                    <div>react</div>
                </div>
                <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-red-500 w-20'>
                    <FaHtml5 />
                    <div>Html</div>
                </div>

                <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-blue-700 w-20'>
                    <FaCss3Alt />
                    <div>Css</div>
                </div>

            </div>

            {/* Other images*/}
            <div className='w-full flex justify-center items-center gap-3 mt-10 '>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg' width={1000} height={1000} src="/Projects/rayenPotfolio/web3.png" alt='' />
                </div>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg' width={1000} height={1000} src="/Projects/rayenPotfolio/web2.png" alt='' />
                </div>
            </div>
            <div className='w-full '>
                <Image className=' mb-4 rounded-lg' width={1000} height={1000} src="/Projects/rayenPotfolio/web4.png" alt='' />
            </div>
            {/* ------------*/}

            <div className='w-full text-center mt-10'>
                <button className=' bg-blue-500 hover:bg-blue-400 p-3 lg:p-5 rounded-lg text-white font-bold lg:text-xl shadow-lg ' onClick={()=>{modelC.onOpen()}}>    FREE CONSULTATIONS </button>
            </div>
            {/* Add more fields as needed */}
          </div>
          )}
        </div>

        <Footer/>
    </>
  )
}

export default page