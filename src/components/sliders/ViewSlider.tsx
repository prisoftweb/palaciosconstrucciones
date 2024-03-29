"use client"

import { useState, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import font from '@/app/sass/base/_typography.module.scss'
import img from  "@/app/sass/components/_imagen.module.scss";

export default function ViewSlider({sliders}: {sliders:any}){
  
  const [index, setIndex] = useState(0);
  const [slider, setSlider] = useState<any>(sliders[0]);
  const [width, setWidth] = useState<number>(0);
  const [heightArrow, setHeightArrow] = useState<number>(9);
  const [heightText, setHeightText] = useState<number>(20);

  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, false);
  }, [])

  useEffect(() => {
    width < 300? (setHeightArrow(35), setHeightText(15) ): (width < 400? (setHeightArrow(55), setHeightText(19)): 
      (width < 500? (setHeightArrow(70), setHeightText(25)): (width < 600? (setHeightArrow(85), setHeightText(25)): 
        (width < 700? (setHeightArrow(95), setHeightText(25)): (width < 800? (setHeightArrow(110), setHeightText(30)): 
          (width < 1000? (setHeightArrow(130), setHeightText(35)): (width < 1200? (setHeightArrow(170), setHeightText(40)): 
            (width < 1400? (setHeightArrow(190), setHeightText(40)): 
              (width < 1600? (setHeightArrow(220), setHeightText(40)): (setHeightArrow(270), setHeightText(45)))))))))))
  }, [width])

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
      <div className="pt-20 mt-20">
        <div className="flex justify-center relative w-full">
          <img src={slider.image} alt="slider" className={`${img.imagefull} w-full h-auto`}/>
          {slider.features.map((feature:string, index:number) => (
            <p className={`w-2/3 absolute ${font.subtitlespecial}`} 
              style={{top:`${(index * heightText)}px`}} 
              key={index}>{feature}</p>
          ))}
          <p className={`absolute ${font.titlespecial} bottom-0 top:1/5 lg:top-1/2`}>{slider.title}</p>
          <ChevronLeftIcon onClick={Previous}
            className="absolute w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-slate-700 rounded-md hover:bg-slate-500 left-4 text-white cursor-pointer"
            style={{top:`${heightArrow}px`}}
          />
          <ChevronRightIcon onClick={Next}
            className="absolute w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-slate-700 rounded-md hover:bg-slate-500 right-4 text-white cursor-pointer"
            style={{top:`${heightArrow}px`}}
          />
        </div>
      </div>
    </>
  )
}