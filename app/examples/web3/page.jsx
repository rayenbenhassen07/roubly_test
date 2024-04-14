'use client';
import Navbar from '@/Components/Navbar'
import React, { useState, useEffect } from 'react';
import useModelCalender from '@/hooks/useModelCalender';
import Image from 'next/image';


import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

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
            <Image className='w-full mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/arij/web3.png" alt='' />
            <h2 className='text-2xl font-bold mb-2'>A charitable website for ARIJ organization</h2>
            <p className='text-gray-700 mb-2 text-sm lg:text-base'>
              <span className=' font-bold'>Description:</span>{" "}
              "At Roubly, we're honored to have partnered with Arij, a charitable organization dedicated to making a positive impact in our community. Leveraging the power of Next.js and MongoDB, we've created a dynamic and resilient website that serves as a digital hub for Arij's mission-driven initiatives. With a multitude of pages meticulously crafted to engage and inform visitors, users can seamlessly explore upcoming events, past activities, and ways to get involved. Additionally, our implementation of a comprehensive admin dashboard empowers the Arij team to manage all aspects of the website effortlessly. From adding new events and activities to editing existing content and even deleting outdated information, the dashboard provides intuitive controls for Arij's administrators, ensuring that the website remains dynamic and responsive to their evolving needs. At Roubly, we're committed to using our expertise to amplify the voices of organizations like Arij, and we're proud to have played a part in furthering their impactful work."
            </p>
            <div className='w-full flex flex-wrap  justify-start gap-3 mt-3'>
              
                <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-black w-20'>
                    <SiNextdotjs />
                    <div>Nextjs</div>
                </div>

                <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-green-700 w-28'>
                    <SiMongodb />
                    <div>MongoDb</div>
                </div>

            </div>

            {/* Other images*/}
            <div className='w-full flex justify-center items-center gap-3 mt-10 '>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/arij/web3.png" alt='' />
                </div>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/arij/web5.png" alt='' />
                </div>
            </div>
            <div className='w-full '>
                <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/arij/web4.png" alt='' />
            </div>
            <div className='w-full flex justify-center items-center gap-3 mt-10 '>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/arij/web1.png" alt='' />
                </div>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/arij/web2.png" alt='' />
                </div>
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