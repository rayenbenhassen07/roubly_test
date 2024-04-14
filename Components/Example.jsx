'use client'
import React from 'react'
import Image from "next/image";
import Link from 'next/link';

import { FaReact  } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";



const Example = () => {
  
  return (
    <>
      <div className='w-full flex justify-center items-center gap-2 py-10 bg-second '>

        <div className="mockup-window border bg-base-300 w-full m-5 ">
          <h1 className='w-full flex justify-center items-center pb-5  text-lg lg:text-3xl font-extrabold'>Some examples of our work</h1>
          <div className=" px-4 py-16 bg-base-200">

            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>

              <Link href="/examples/web1">
                <div className='flex flex-col  rounded-lg  hover:bg-blue-100 transition border-2 border-neutral-300'>
                  <Image src="/Projects/rayenPotfolio/web1.png" width={1000} height={1000} className="w-[100%] rounded-3xl p-2"/>
                  <div className=''>
                    <h3 className="pl-2 pt-2 font-bold text-black text-sm lg:text-base">Personal portfolio</h3>
                    <div className='p-2 flex justify-start items-center gap-5'>

                      <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-blue-500 w-20'>
                        <FaReact />
                        <div>react</div>
                      </div>
                      

                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/examples/web2">
                <div className='flex flex-col rounded-lg  hover:bg-blue-100 transition border-2 border-neutral-300'>
                <Image src="/Projects/hbibna/web2.png" width={1000} height={1000} className="w-[100%] rounded-3xl p-2"/>
                  <div className=''>
                    <h3 className="pl-2 pt-2 font-bold text-black text-sm lg:text-base">Ecommerce website</h3>
                    <div className='p-2 flex justify-start items-center gap-1'>

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
                  </div>
                </div>
              </Link>

              <Link href="/examples/web3">
                <div className='flex flex-col rounded-lg  hover:bg-blue-100 transition border-2 border-neutral-300'>
                  <Image src="/Projects/arij/web3.png" width={1000} height={1000} className="w-[100%] rounded-3xl p-2"/>
                  <div className=''>
                    <h3 className="pl-2 pt-2 font-bold text-black text-sm lg:text-base">A charitable website for ARIJ organization</h3>
                    <div className='p-2 flex justify-start items-center gap-1 '>

                      <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-black w-20'>
                        <SiNextdotjs />
                        <div>Nextjs</div>
                      </div>

                      <div className='flex justify-center items-center gap-1 text-white rounded-lg bg-green-700 w-28'>
                        <SiMongodb />
                        <div>MongoDb</div>
                      </div>

                      
                      

                    </div>
                  </div>
                </div>
              </Link>

            </div>

            <div className='flex justify-center pt-10  '><a href=""> <div className='font-semibold text-lg hover:text-blue-500 transition cursor-pointer'>More details ....</div> </a></div>
          
          </div>
          
        </div>

      </div>

      
    </>
  ) 
}

export default Example