"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import font from '@/app/sass/base/_typography.module.scss'
import ittc from "@/app/sass/components/_imagentitulotextocard.module.scss";


export default function SliderServices({services}:{services:any}){
  
  const [showServices, setShowServices] = useState<any[]>(services);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number>(0);
  const [numberServices, setNumberServices] = useState<number>(width<640? 1: (width<768? 2: (width<1024? 3: 4)));
  
  const [idService, setIdService] = useState<string>(services[0].id);
  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize, false);
  }, [])

  useEffect(() => {
  }, [idService])

  useEffect(() => {
    setNumberServices(width<640? 1: (width<768? 2: (width<1280? 3: 4)));
  }, [width])

  useEffect(() => {
    const timer = setTimeout(() => {
      if(index >= services.length - 1){
        setIndex(0);
      }else{
        setIndex(index + 1);
      }
    }, 5000);

    let count = services.length - (index + numberServices);
    
    if(count < 0){
      count = Math.abs(count);
      const arr1 = services.slice(index, index + numberServices);
      const arr2 = services.slice(0, count);
      setShowServices([...arr1, ...arr2]);
    }else{
      setShowServices(services.slice(index, index + numberServices));
    }

    return () => clearTimeout(timer);
  }, [index])

  const Previous = () => {
    if(index > 0){
      setIndex(index -1);
    }else{
      setIndex(services.length -1);
    }
  }

  const Next = () => {
    if(index < services.length - 1){
      setIndex(index+1)
    }else{
      setIndex(0);
    }
  }

  const selectService = (idServ:string) => {
    setIdService(idServ);
  }

  return(
    <>
      <div className="flex items-center">
        <div className='w-20'>
          <ChevronLeftIcon onClick={Previous}
            className="w-12 h-12 cursor-pointer text-yellow-950" />
        </div>

        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 w-full'>
          {showServices.map((service: any) => (
<<<<<<< HEAD
            // <div key={service._id} className={`p-3 cursor-pointer ${service._id===idService? 
            //         'bg-yellow-950': 'bg-white'}`} 
            //     onClick={() => selectService(service._id)}
            // >
            <div key={service._id} className='p-3 bg-white'>
              <img src={service.logo} alt="logo" className="w-full" />
              <p className={`${font.heading2}`}>{service.name}</p>
=======
            <div key={service._id} className={`p-3 cursor-pointer ${ittc.imagentitulotextocard} ${service._id===idService? 
                    'bg-yellow-950': 'bg-white'}`} 
                onClick={() => selectService(service._id)}
            >
              <img className={`${ittc.imagentitulotextocard__imagen} w-full`}
                src={service.logo} alt="logo" />
              <p className={`${font.heading5}`}>{service.name}</p>
>>>>>>> refs/remotes/origin/main
            </div>
          ))}
        </div>

        <div className='w-20'>
          <ChevronRightIcon onClick={Next}
            className="w-12 h-12 cursor-pointer text-yellow-950" />
        </div>
      </div>
    </>
  )
}