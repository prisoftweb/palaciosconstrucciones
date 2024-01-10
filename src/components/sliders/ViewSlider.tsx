"use client"

import { useState, useEffect } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import font from '@/app/sass/base/_typography.module.scss'

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
      <div className="pt-20">
        <div className="flex justify-center relative w-full">
          <img src={slider.image} alt="slider" className="w-full h-auto" />
          {slider.features.map((feature:string, index:number) => (
            <p className={`w-2/3 absolute text-xs md:text-xl text-white font-bold ${font.heading4}`} 
              style={{top:`${(index * heightText) + 10}px`}} 
              key={index}>{feature}</p>
          ))}
          <p className={`absolute ${font.subtitle} text-2xl xl:text-4xl left-10 sm:left-32 md:left-1/3 bottom-0 md:top-1/2`}>{slider.title}</p>
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

// "use client"

// import { useState, useEffect } from "react"
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

// export default function ViewSlider({sliders, token, indexStart}: 
//               {sliders:any, token:string, indexStart:number}){
  
//   const [index, setIndex] = useState(indexStart);
//   const [slider, setSlider] = useState<any>(sliders[indexStart]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if(index >= sliders.length - 1){
//         setIndex(0);
//       }else{
//         setIndex(index + 1);
//       }
//     }, 5000);
    
//     setSlider(sliders[index]);
//     return () => clearTimeout(timer);
//   }, [index])

//   const Previous = () => {
//     if(index > 0){
//       setIndex(index -1);
//     }else{
//       setIndex(sliders.length -1);
//     }
//   }

//   const Next = () => {
//     if(index < sliders.length - 1){
//       setIndex(index+1)
//     }else{
//       setIndex(0);
//     }
//   }

//   return(
//     <>
//       <div className="pt-20">
//         <div className="flex justify-center relative w-full">
//           <img src={slider.image} alt="slider" className="w-full h-auto" />
//           {slider.features.map((feature:string, index:number) => (
//             <p className={`w-2/3 absolute text-xl text-white font-bold`} style={{top:`${(index * 50)}px`}} 
//               key={index}>{feature}</p>
//           ))}
//           <ChevronLeftIcon onClick={Previous}
//             className="absolute w-8 h-8 bg-slate-700 rounded-md hover:bg-slate-500 left-4 top-16 sm:top-28 lg:top-44 text-white cursor-pointer"
//           />
//           <ChevronRightIcon onClick={Next}
//             className="absolute w-8 h-8 bg-slate-700 rounded-md hover:bg-slate-500 right-4 top-16 sm:top-28 lg:top-44 text-white cursor-pointer"
//           />          
//         </div>
//       </div>
//     </>
//   )
// }