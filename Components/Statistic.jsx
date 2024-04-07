import React from 'react'

const Statistic = () => {
  return (
    <div className='w-full Number text-center text-white py-20' id='Statistic'>
      
      <h2 className='space-x-5 tracking-widest text-sm lg:text-lg font-semibold text-blue-500'>RESULTS SPEAK FOR THEMSELVES</h2>
     
      <h1 className='space-x-5 tracking-widest text-lg lg:text-3xl font-extrabold'>Numbers that make sense</h1>
      
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:mx-20 mx-2 my-10'>

        <div className='flex flex-col items-start gap-5  w-full px-4 lg:w-1/3'>
          <div className='text-2xl lg:text-4xl font-extrabold text-blue-400 border-white border-2 p-3 rounded-full'>+11</div>
          <div className='text-start text-sm lg:text-base'>We've had the privilege of working with a diverse range of clients across various industries, <span className='font-bold'>launching over 11 websites</span> that not only meet but exceed expectations.</div>
        </div>

        <div className='flex flex-col items-start gap-5  w-full px-4 lg:w-1/3'>
          <div className='text-2xl lg:text-4xl font-extrabold text-blue-400 border-white border-2 p-3 rounded-full'>90%</div>
          <div className='text-start text-sm lg:text-base'>Our commitment to client satisfaction is unwavering. With a <span className='font-bold'>90% client satisfaction rate</span>, we're proud to have built strong, long-lasting relationships with our clients based on trust and mutual success.</div>
        </div>

        <div className='flex flex-col items-start gap-5  w-full px-4 lg:w-1/3'>
          <div className='text-2xl lg:text-4xl font-extrabold text-blue-400 border-white border-2 p-3 rounded-full'>-6</div>
          <div className='text-start text-sm lg:text-base'>Time is of the essence, and we understand the importance of delivering results promptly. With an average project completion time of just <span className='font-bold'>6 weeks</span>, we ensure efficient turnaround without compromising on quality.</div>
        </div>

      </div>
      
      <div className='pt-10 flex flex-col gap-5 mx-2 lg:text-lg '>
        <div>These numbers are more than just <span className='font-bold'>statistics</span></div>
        <div>they represent our <span className='font-bold'>dedication to excellence</span>, our <span className='font-bold'>passion for innovation</span>, and our <span className='font-bold'>unwavering commitment to helping our clients succeed.</span></div>
        <div>When you choose <span className='font-bold '>Roubly Group</span>, you're choosing a partner who delivers results you can count on.</div>
      </div>
    </div>
  )
}

export default Statistic