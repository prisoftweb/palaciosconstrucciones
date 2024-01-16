"use client"

import { useState, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import font from '@/app/sass/base/_typography.module.scss'

export default function ViewSlider({sliders}: {sliders:any}){
  
  const [index, setIndex] = useState(0);
  const [slider, setSlider] = useState<any>(sliders[0]);
  const [width, setWidth] = useState<number>(0);
  const [heightArrow, setHeightArrow] = useState<number>(9);
  const [heightText, setHeightText] = useState<number>(18);

  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, false);
  }, [])

  useEffect(() => {
    width < 300? (setHeightArrow(35), setHeightText(20) ): (width < 400? (setHeightArrow(55), setHeightText(25)): 
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
          <img src={slider.image} alt="slider" className="w-full h-auto" />
          {slider.features.map((feature:string, index:number) => (
            <p className={`w-2/3 absolute ${font.subtitlespecial}`} 
              style={{top:`${(index * heightText) + 20}px`}} 
              key={index}>{feature}</p>
          ))}
          <p className={`absolute ${font.titlespecial} bottom-0 top:1/5 lg:top-1/2`}>{slider.title}</p>
          <ChevronLeftIcon onClick={Previous}
            className="absolute w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-slate-700 rounded-md hover:bg-slate-500 left-4 text-white cursor-pointer"
            style={{top:`${heightArrow}px`}}
          />
          <ChevronRightIcon onClick={Next}
            className="absolute w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16 bg-slate-700 rounded-md hover:bg-slate-500 right-4 text-white cursor-pointer"
            style={{top:`${heightArrow}px`}}
          />
        </div>
      </div>
    </>
  )
}