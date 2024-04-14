'use client';
import Navbar from '@/Components/Navbar'
import React, { useState, useEffect } from 'react';
import useModelCalender from '@/hooks/useModelCalender';
import Image from 'next/image';


import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";


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
            <Image className='w-full mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/hbibna/web2.png" alt='' />
            <h2 className='text-2xl font-bold mb-2'>Ecommerce website Hbibna</h2>
            <p className='text-gray-700 mb-2 text-sm lg:text-base'>
              <span className=' font-bold'>Description:</span>{" "}
              "At Roubly, we're excited to showcase our work on the e-commerce website for Hbibna. Utilizing a combination of HTML, CSS, PHP, and SQL, we've developed a dynamic and feature-rich online platform that empowers Hbibna to thrive in the digital marketplace. With multiple pages tailored to enhance the user experience, customers can easily navigate through the website to explore products and make purchases seamlessly. Additionally, we've implemented a robust admin dashboard, providing Hbibna with full control to manage products effectively. From adding new products to editing existing ones and even deleting outdated items, the dashboard streamlines the process, enabling Hbibna to stay agile and responsive to market demands. At Roubly, we're committed to delivering solutions that not only meet but exceed our clients' expectations, and the Hbibna e-commerce website stands as a testament to that dedication."
            </p>
            <div className='w-full flex flex-wrap  justify-start gap-3 mt-3'>
              
                <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-blue-500 w-20'>
                    <FaPhp />
                    <div>php</div>
                </div>

                <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-black w-20'>
                    <SiMysql />
                    <div>Sql</div>
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
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/hbibna/web3.png" alt='' />
                </div>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/hbibna/web4.png" alt='' />
                </div>
            </div>
            <div className='w-full '>
                <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/hbibna/web4.png" alt='' />
            </div>
            <div className='w-full flex justify-center items-center gap-3 mt-10 '>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/hbibna/web1.png" alt='' />
                </div>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/hbibna/web5.png" alt='' />
                </div>
            </div>
            <div className='w-full flex justify-center items-center gap-3 mt-10 '>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/hbibna/web6.png" alt='' />
                </div>
                <div className='w-full'>
                    <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/hbibna/web7.png" alt='' />
                </div>
            </div>
            <div className='w-full '>
                <Image className=' mb-4 rounded-lg border-2' width={1000} height={1000} src="/Projects/hbibna/web8.png" alt='' />
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