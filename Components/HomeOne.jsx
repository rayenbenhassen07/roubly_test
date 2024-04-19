'use client'
import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { BiLogoPhp } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiNodedotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import useModelCalender from '@/hooks/useModelCalender';

import {components} from "@/lang";
import useLanguage from "@/hooks/useLanguage";


const HomeOne = () => {

  const modelC = useModelCalender();
  const language = useLanguage();

  return (
    <>
    <div className='w-full home bg-white text-black' id='home'>
    <div className='max-w-[1220px] pt-10 lg:pt-0 px-2 ml-auto mr-auto'>
      <div className='lg:pt-20 h-[100vh] w-full '>
        <div className='flex flex-col justify-center items-center pt-10 gap-10'>
          <h2 className=' text-sm lg:text-lg text-black'>{components.HomeOne?.[language.valeur].Title1}</h2>
          <h1 className='font-extrabold  text-xl md:text-4xl lg:text-4xl text-center gradient-text'>{components.HomeOne?.[language.valeur].Title2}</h1>
          <div className='text-center text-md p-8 lg:px-20 lg:font-semibold '> {components.HomeOne?.[language.valeur].p1}</div>
          <button className='button_orange bg-orange-500 hover:bg-orange-400 p-3 lg:p-5 rounded-3xl text-white font-bold lg:text-xl shadow-lg cursor-pointer' onClick={()=>{modelC.onOpen()}}>{components.HomeOne?.[language.valeur].Consultations}</button>

          <div className='flex flex-col items-center gap-5'>
            <div className='space-x-5 tracking-widest'>{components.HomeOne?.[language.valeur].Weuse}</div>
            <div className="flex flex-wrap justify-center  items-center gap-5 lg:gap-10">
              <FaHtml5  className=' text-4xl' />
              <DiCss3 className='text-4xl'/>
              <IoLogoJavascript className='text-4xl'/>
              <FaReact className='text-4xl'/>
              <TbBrandNextjs className='text-4xl'/>
              <SiTypescript className='text-4xl'/>
              <BiLogoPhp className='text-4xl'/>
              <FaGithub className='text-4xl'/>
              <BiLogoMongodb className='text-4xl'/>
              <SiNodedotjs className='text-4xl'/>
              <SiTailwindcss className='text-4xl'/>
              <FaWordpress className='text-4xl'/>


            </div>
          </div>
        </div>

        </div>
      </div>
      </div>
    </>
    
  )
}

export default HomeOne