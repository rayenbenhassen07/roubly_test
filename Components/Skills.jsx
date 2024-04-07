import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='Skills' className='bg-white'>
        
        <div className='info flex flex-col gap-5 text-center py-10 px-2 lg:px-20  mt-48 sm:mt-10   bg-neutral-800 w-full text-white '>
            <h2 className='space-x-5 tracking-widest text-sm lg:text-lg font-semibold text-blue-500'>HOW WE OPERATE</h2>
            <h1 className='space-x-5 tracking-widest text-lg lg:text-3xl font-extrabold'>Why choose Roubly Group?</h1>
           <div className='grid grid-cols-2 lg:grid-cols-3  gap-10 lg:gap-5 mt-10'>

                {/* row :1*/}
                <div className=' flex flex-col items-center gap-4 w-full   lg:px-10'>
                    <div className='bg-neutral-700 rounded-lg '>
                        <Image
                            src="/Whyus/paper.png"
                            width={210}
                            height={210}
                            className="w-14 lg:w-30 p-3"
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='text-sm lg:text-xl font-extrabold'>Expertise and Experience</div>
                    <div className='w-full text-xs lg:text-sm lg:w-[90%] '>Benefit from <span className='font-bold'>years of industry experience</span> and a skilled team.</div>
                </div>
                
                {/* row :2*/}
                <div className='flex flex-col items-center gap-4 w-full lg:px-10'>
                    <div className='bg-neutral-700 rounded-lg '>
                        <Image
                            src="/Whyus/result.png"
                            width={210}
                            height={210}
                            className="w-14 lg:w-30 p-3"
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='text-sm lg:text-xl font-extrabold'>Tailored Solutions</div>
                    <div className='w-full text-xs lg:text-sm lg:w-[90%]'>Personalized approach to meet unique project requirements.</div>
                </div>

                {/* row :3*/}
                <div className='flex flex-col items-center gap-4 w-full lg:px-10'>
                    <div className='bg-neutral-700 rounded-lg '>
                        <Image
                            src="/Whyus/assurence.png"
                            width={210}
                            height={210}
                            className="w-14 lg:w-30 p-3"
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='text-sm lg:text-xl font-extrabold'>Quality Assurance</div>
                    <div className='w-full text-xs lg:text-sm lg:w-[90%]'>Rigorous processes ensure high standards in <span className='font-bold'>performance</span> and <span className='font-bold'>security</span>.</div>
                </div>

                {/* row :4*/}
                <div className='flex flex-col items-center gap-4 w-full lg:px-10'>
                    <div className='bg-neutral-700 rounded-lg '>
                        <Image
                            src="/Whyus/compain.png"
                            width={210}
                            height={210}
                            className="w-14 lg:w-30 p-3"
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='text-sm lg:text-xl font-extrabold'>Collaborative Approach</div>
                    <div className='w-full text-xs lg:text-sm lg:w-[90%]'>Work closely with <span className='font-bold'>clients</span> throughout the project.</div>
                </div>

                {/* row :5*/}
                <div className='flex flex-col items-center gap-4 w-full lg:px-10'>
                    <div className='bg-neutral-700 rounded-lg '>
                        <Image
                            src="/Whyus/time.png"
                            width={210}
                            height={210}
                            className="w-14 lg:w-30 p-3"
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='text-sm lg:text-xl font-extrabold'>Timely Delivery</div>
                    <div className='w-full text-xs lg:text-sm lg:w-[90%]'>Efficient <span className='font-bold'>processes</span> for on-time project completion.</div>
                </div>

                {/* row :6*/}
                <div className='flex flex-col items-center gap-4 w-full lg:px-10'>
                    <div className='bg-neutral-700 rounded-lg '>
                        <Image
                            src="/Whyus/support.png"
                            width={210}
                            height={210}
                            className="w-14 lg:w-30 p-3"
                            alt="Picture of the author"
                        />
                    </div>
                    <div className='text-sm lg:text-xl font-extrabold'>Continuous Support</div>
                    <div className='w-full text-xs lg:text-sm lg:w-[90%]'>Ongoing <span className='font-bold'>maintenance</span> and <span className='font-bold'>support</span> services post-launch.</div>
                </div>

                
            </div>

        </div>
    </div>
  )
}

export default Skills