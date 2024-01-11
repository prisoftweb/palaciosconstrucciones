"use client";

import { useState, useEffect } from "react";
import { AcademicCapIcon, BuildingOffice2Icon, 
          BuildingStorefrontIcon, UserIcon, 
          AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import font from '@/app/sass/base/_typography.module.scss'

export default function Tab({option, changeTab, index, text}: 
                            {option:number, changeTab:Function, index:number, text:string}){

  const [tab, setTab] = useState<JSX.Element>(<></>);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, [])
  
  useEffect(() => {
    if(width < 555){
      const icon = index === 1? <AdjustmentsHorizontalIcon onClick={() => changeTab(index)}
                                    className={`w-8 h-8 text-slate-600 cursor-pointer 
                                    ${option===index? 'bg-yellow-950 rounded-lg': ''}`} />: 
                    (index === 2? <BuildingOffice2Icon onClick={() => changeTab(index)}
                                              className={`w-8 h-8 text-slate-600 cursor-pointer 
                                              ${option===index? 'bg-yellow-950 rounded-lg': ''}`} />: 
                        (index === 3? <BuildingStorefrontIcon onClick={() => changeTab(index)}
                                                  className={`w-8 h-8 text-slate-600 cursor-pointer 
                                                  ${option===index? 'bg-yellow-950 rounded-lg': ''}`} />: 
                            (index === 4? <AcademicCapIcon onClick={() => changeTab(index)}
                                                          className={`w-8 h-8 text-slate-600 cursor-pointer 
                                                          ${option===index? 'bg-yellow-950 rounded-lg': ''}`} />: 
                                                                <UserIcon onClick={() => changeTab(index)}
                                                                  className={`w-8 h-8 text-slate-600 cursor-pointer 
                                                                  ${option===index? 'bg-yellow-950 rounded-lg': ''}`} />)))
      setTab(icon)
    }else{
      setTab(
        <div onClick={() => changeTab(index)}
          className={`p-1 mx-1 w-24 md:w-32 lg:w-40 xl:w-48 text-xs md:text-sm lg:text-base xl:text-lg mt-2 text-center cursor-pointer
                  ${option === index? 'text-yellow-950 border-b-2 border-yellow-950'
                  : 'text-slate-500'}`}>
          {/* // className={`p-1 mx-1 w-24 md:w-32 lg:w-40 xl:w-48 text-xs mt-2 text-center cursor-pointer
          //         ${option === index? `${font.subtitle} border-b-2 border-yellow-950 text-xs`
          //         : `${font.headingspecial}`}`}> */}
          {text}
        </div>
      )
    }
  }, [width, option])

  return(
    tab
  )
}