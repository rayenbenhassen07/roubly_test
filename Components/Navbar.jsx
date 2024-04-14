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

import React, { useEffect, useState } from 'react';

import Image from "next/image";
import useModelCalender from "@/hooks/useModelCalender";
import useLanguage from "@/hooks/useLanguage";

import {components} from "@/lang";





const Navbar = () => {

  const [ islanguage, setLanguage ] = useState("en");

    const [toggle,setToggle] = useState(false);
    const modelC = useModelCalender();
    const language = useLanguage();

    useEffect(() => {
      if(islanguage === "en"){
        language.toEnglish();
      }else if(islanguage === "ar"){
        language.toArabic();
      }else{
        language.toFrensh();
      }
    },[islanguage]);
    //


   
    
    
    
    window.addEventListener("scroll",function(){
      var nav = document.querySelector('nav');
      nav.classList.toggle("sticky" , this.window.scrollY > 0);
    })

    

    

    return (
        <nav className="
            bg-white
          
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
                                bg-neutral-900
                                text-white
                                  lg:bg-white
                                  grid-cols-3
                                  absolute 
                                  left-0 
                                  w-full 
                                  shadow-lg  
                                  rounded-b-3xl 
                                  mr-10 
                                  pt-10 
                                  pb-12
                                  transition
                                  duration-500
                                  
                                  
                                  
                                  ${toggle ? 'top-0'  : '-top-72' }
                                  
                                  lg:pt-5
                                  lg:pb-0
                                  lg:font-bold
                                  lg:flex
                                  lg:justify-center
                                  lg:items-center
                                  lg:mb-5
                                  lg:static
                                  lg:shadow-none
                      
                                  `}>
                    
                    <FaTimes className="absolute top-3 right-5 cursor-pointer lg:hidden shadow-xl " size={25} onClick={() => setToggle(false)} />
    
                    <a href="#home" onClick={() => setToggle(!toggle)}>
                      <li className="flex items-center justify-center p-3 flex-col gap-2 cursor-pointer lg:ml-2">
                        <PiHouseBold size={20} className="lg:hidden"/>
                        <div className="text-sm  lg:text-base lg:text-neutral-800 ">{components.Navbar?.[language.valeur].Home}</div>
                      </li>
                    </a>
    
                    {/*<li className="flex items-center justify-center p-3 flex-col gap-2 cursor-pointer lg:ml-2">
                      <FaRegUser size={20} className="lg:hidden"/>
                      <div className="text-sm lg:text-base text-neutral-800">About</div>
                    </li>*/}
    
                    <a href="#Skills" onClick={() => setToggle(!toggle)}>
                      <li className="flex items-center justify-center p-3 flex-col gap-2 cursor-pointer lg:ml-2">
                        <IoNewspaperOutline size={20} className="lg:hidden"/>
                        <div className="text-sm lg:text-base lg:text-neutral-800">{components.Navbar?.[language.valeur].Skills}</div>
                      </li>
                    </a>

                    <a href="#Statistic" onClick={() => setToggle(!toggle)}>
                      <li className="flex items-center justify-center p-3 flex-col gap-2 cursor-pointer lg:ml-2">
                        <FaChartLine size={20} className="lg:hidden"/>
                        <div className="text-sm lg:text-base lg:text-neutral-800">{components.Navbar?.[language.valeur].Statistics}</div>
                      </li>
                    </a>
    
                    <a href="#Services" onClick={() => setToggle(!toggle)}>
                      <li className="flex items-center justify-center p-3 flex-col gap-2 cursor-pointer lg:ml-2">
                        <LuBaggageClaim size={20} className="lg:hidden"/>
                        <div className="text-sm lg:text-base lg:text-neutral-800">{components.Navbar?.[language.valeur].Services}</div>
                      </li>
                    </a>
                    
                    
    
                    
                    {/*
                    <li className="flex items-center justify-center p-3 flex-col gap-2 cursor-pointer lg:ml-2">
                      <PiPaperPlaneRightBold size={20} className="lg:hidden"/>
                      <div className="text-sm lg:text-base text-neutral-800">Contact</div>
                    </li>*/}
                
    
                  </ul>
                </div>
                
                <div className="flex gap-2 justify-start items-center">
                  <details className="dropdown dropdown-hover">
                    <summary className="m-1 btn relative flex justify-center gap-2" role="button">
                      
                      <div className="bg-rose-500">
                        {islanguage === 'en' && (
                          <Image src="/flags/america.jpg" width={20} height={20} className="w-7" />
                        )}
                        {islanguage === 'fr' && (
                          <Image src="/flags/france.jpg" width={20} height={20} className="w-7" />
                        )}
                        {islanguage === 'ar' && (
                          <Image src="/flags/arabe.png" width={20} height={20} className="w-7" />
                        )}
                      </div>
                      <div>{islanguage}</div>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li onClick={()=>{setLanguage('en')}}> 
                        <a><Image src="/flags/america.jpg" width={200} height={200} className="w-8" /> 
                        English (EN)</a>
                      </li>
                      <li onClick={()=>{setLanguage('fr')}}>
                        <a><Image src="/flags/france.jpg" width={200} height={200} className="w-8" /> 
                        Arabic (AR) </a>
                      </li>
                      <li onClick={()=>{setLanguage('ar')}}>
                        <a><Image src="/flags/arabe.png" width={200} height={200} className="w-8" /> 
                          Francais (FR)</a>
                      </li>
                    </ul>
                  </details>
                  
                  <button className=" btn  hidden lg:block p-3 from-slate-900  text-sm bg-blue-500 text-white font-extrabold hover:bg-blue-400 transition"  onClick={()=>{modelC.onOpen()}}>{components.Navbar?.[language.valeur].Consultations}</button>
                </div>
    
                <div className="lg:hidden text-black" onClick={() => setToggle(!toggle)}>
                  <RiMenu3Fill  size={30}/>
                </div>
            </div>
        </nav>
      )
}

export default Navbar