'use client'
import { useState, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import img from  "@/app/sass/components/_imagen.module.scss";
import font from '@/app/sass/base/_typography.module.scss'
import base from "@/app/sass/base/_base.module.scss";
import util from "@/app/sass/base/_utilities.module.scss";
import Header from "./Header";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SliderOneImage({sliders, indexImage, title, logo, linkReturn}: 
        {sliders:any, indexImage:number, title:string, logo:string, linkReturn:string}){
  const [index, setIndex] = useState(indexImage);
  const [slider, setSlider] = useState<any>(sliders[indexImage]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if(index >= sliders.length - 1){
        setIndex(0);
      }else{
        setIndex(index + 1);
      }
    }, 5000);
    
    setSlider(sliders[index]);
    return () => clearTimeout(timer);
  }, [index])

  const Previous = () => {
    if(index > 0){
      setIndex(index -1);
    }else{
      setIndex(sliders.length -1);
    }
  }

  const Next = () => {
    if(index < sliders.length - 1){
      setIndex(index+1)
    }else{
      setIndex(0);
    }
  }
  
  return(
    <>
      <Header />
      <div className={`${base.section} ${util.u_margin_bottom_md} ${util.u_margin_top_lg}`}>
        <div className="flex justify-between flex-wrap">
          <div>
            {/* <p className="text-yellow-950 text-lg lg:text-3xl">{title}</p> */}
            <p className={`${font.subtitle}`}>{title}</p>
          </div>
          <div className="mt-3 sm:mt-0">
            {logo===''? <></>: <>
              <p className={`${font.subtitle_thin}`}>Proyecto con</p>
              <img src={logo} alt="logo cliente" className="w-40" />
            </>}
          </div>
        </div>

        <div className="mt-2">
          <div className="flex justify-center relative w-full">
            <img src={slider.photo} alt="slider" className={`${img.imagefull} w-full h-auto`}/>
            {/* <p className={`absolute ${font.titlespecial} bottom-0 top:1/5 lg:top-1/2`}>{slider.title}</p> */}
            <div className="h-full absolute flex items-center left-0">
              <ChevronLeftIcon onClick={Previous}
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-slate-700 rounded-md hover:bg-slate-500 left-4 text-white cursor-pointer"
              />
            </div>
            <div className="h-full absolute flex items-center right-0">
              <ChevronRightIcon onClick={Next}
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-slate-700 rounded-md hover:bg-slate-500 right-4 text-white cursor-pointer"
              />
            </div>
            <div className="absolute right-3 md:right-9">
              <Link href={`${linkReturn}`}>
                <XMarkIcon className="w-14 md:w-28 h-14 md:h-28 text-red-500 absolute top-2 right-12" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}