'use client';
import { PiHouseBold } from "react-icons/pi"; /*home*/
import { FaRegUser } from "react-icons/fa"; /*user*/
import { IoNewspaperOutline } from "react-icons/io5"; /*skills*/
import { LuBaggageClaim } from "react-icons/lu"; /*services*/
import { FaChartLine } from "react-icons/fa6"; /* Statistic*/
import { PiPaperPlaneRightBold } from "react-icons/pi"; /* message*/
import { FaTimes } from "react-icons/fa"; /* close*/
import { AiOutlineAppstore } from "react-icons/ai"; /* app*/
import { RiMenu3Fill } from "react-icons/ri";

import React, { useState } from 'react';

import Image from "next/image";
import useModelCalender from "@/hooks/useModelCalender";



const Navbar = () => {

    const [toggle,setToggle] = useState(false);
    const modelC = useModelCalender();

    /*
    window.addEventListener("scroll",function(){
      var nav = document.querySelector('nav');
      nav.classList.toggle("sticky" , this.window.scrollY > 0);
    
    })*/
    

    return (
        <nav className="
        bg-purple-300
          lg:bg-white
            w-full 
            fixed
            left-0
            top-0
            lg:top-0
            z-50
            h-16     
            globalNav

        ">
            <div className=" 
                h-16
                flex
                justify-between
                items-center
                max-w-[1220px] px-2 ml-auto mr-auto
            ">
                <a href="/" className="font-semibold text-lg">
                  <Image
                    src="/logoBlack.png"
                    width={210}
                    height={210}
                    className="w-28 lg:w-48"
                    alt="Picture of the author"
                  />
                </a>
    
                <div className="">
                  <ul className={`grid
                                bg-blue-950
                                text-white
                                  lg:bg-white
                                  grid-cols-3
                                  absolute 
                                  left-0 
                                  w-full 
                                  shadow-lg  
                                  rounded-b-3xl 
                                  mr-10 
                                  pt-5 
                                  transition
                                  duration-500
                                  
                                  ${toggle ? 'top-0'  : '-top-44' }
                                  
                                  
                                  lg:font-bold
                                  lg:flex
                                  lg:justify-center
                                  lg:items-center
                                  lg:mb-5
                                  lg:static
                                  lg:shadow-none
                      
                                  `}>
                    
                    <FaTimes className="absolute top-2 right-5 cursor-pointer lg:hidden " size={18} onClick={() => setToggle(false)} />
    
                    <a href="#home" onClick={() => setToggle(!toggle)}>
                      <li className="flex items-center justify-center p-3 flex-col gap-2 cursor-pointer lg:ml-2">
                        <PiHouseBold size={20} className="lg:hidden"/>
                        <div className="text-sm  lg:text-base lg:text-neutral-800 ">Home</div>
                      </li>
                    </a>
    
                    {/*<li className="flex items-center justify-center p-3 flex-col gap-2 cursor-pointer lg:ml-2">
                      <FaRegUser size={20} className="lg:hidden"/>
                      <div className="text-sm lg:text-base text-neutral-800">About</div>
                    </li>*/}
    
                    <a href="#Skills" onClick={() => setToggle(!toggle)}>
                      <li className="flex items-center justify-center p-3 flex-col gap-2 cursor-pointer lg:ml-2">
                        <IoNewspaperOutline size={20} className="lg:hidden"/>
                        <div className="text-sm lg:text-base lg:text-neutral-800">Skills</div>
                      </li>
                    </a>

                    <a href="#Statistic" onClick={() => setToggle(!toggle)}>
                      <li className="flex items-center justify-center p-3 flex-col gap-2 cursor-pointer lg:ml-2">
                        <FaChartLine size={20} className="lg:hidden"/>
                        <div className="text-sm lg:text-base lg:text-neutral-800">Statistic</div>
                      </li>
                    </a>
    
                    <a href="#Services" onClick={() => setToggle(!toggle)}>
                      <li className="flex items-center justify-center p-3 flex-col gap-2 cursor-pointer lg:ml-2">
                        <LuBaggageClaim size={20} className="lg:hidden"/>
                        <div className="text-sm lg:text-base lg:text-neutral-800">Services</div>
                      </li>
                    </a>
    
                    
    
                    
                    {/*
                    <li className="flex items-center justify-center p-3 flex-col gap-2 cursor-pointer lg:ml-2">
                      <PiPaperPlaneRightBold size={20} className="lg:hidden"/>
                      <div className="text-sm lg:text-base text-neutral-800">Contact</div>
                    </li>*/}
                
    
                  </ul>
                </div>
                <div>
                  <button className=" btn hidden lg:block p-3 from-slate-900 rounded-3xl text-sm bg-green-500 text-white font-bold hover:bg-green-400 transition"  onClick={()=>{modelC.onOpen()}}>FREE CONSULTATION</button>
                </div>
    
                <div className="lg:hidden text-black" onClick={() => setToggle(!toggle)}>
                  <RiMenu3Fill  size={30}/>
                </div>
            </div>
        </nav>
      )
}

export default Navbar