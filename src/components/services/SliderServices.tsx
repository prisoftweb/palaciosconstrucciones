"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import font from '@/app/sass/base/_typography.module.scss'
import ittc from "@/app/sass/components/_imagentitulotextocard.module.scss";
import util from "@/app/sass/base/_utilities.module.scss";
import { getImagesProjectsByService } from "@/app/api/RouteServices"
import ShowImagesService from "./ShowImagesService"

export default function SliderServices({services, namepage}:{services:any, namepage:string}){
  const [showServices, setShowServices] = useState<any[]>(services);
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState<number>(0);
  const [numberServices, setNumberServices] = useState<number>(width<640? 1: (width<768? 2: (width<1024? 3: 4)));
  
  const [gallery, setGallery] = useState<JSX.Element>(<></>);
  const [idService, setIdService] = useState<string>(services[0].id);
  const [nameService, setNameService] = useState<string>(services[0].name);
  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  const updateGallery = async(idServ:string) => {
    const res = await getImagesProjectsByService(idServ);
    if(typeof(res)==='string'){
      setGallery(<p>{res}</p>)
    }else{
      setGallery(<ShowImagesService images={res} nameService={nameService} 
                idService={idServ} namepage={namepage} />)
    }
  }

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize, false);
    updateGallery(services[0]._id);
  }, [])

  useEffect(() => {
    updateGallery(idService);
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

  const selectService = (idServ:string, name:string) => {
    setNameService(name);
    setIdService(idServ);
  }

  return(
    <>
      <div className={`${util.u_margin_bottom_md} ${util.u_margin_bottom_sm} flex items-center pb-10`}>
        <div className='w-20'>
          <ChevronLeftIcon onClick={Previous}
            className="w-12 h-12 cursor-pointer text-yellow-950" />
        </div>

        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 w-full'>
          {showServices.map((service: any) => (            
            <div key={service._id} className={`p-3 cursor-pointer ${ittc.imagentitulotextocard} ${service._id===idService? 
                    'bg-yellow-950': 'bg-white'}`} 
                onClick={() => selectService(service._id, service.name)}
            >
              <img className={`${ittc.imagentitulotextocard__imagen} w-full`}
                src={service.logo} alt="logo"  />
              <p className={`${font.heading5}`}>{service.name}</p>
            </div>
          ))}
        </div>

        <div className='w-20'>
          <ChevronRightIcon onClick={Next}
            className="w-12 h-12 cursor-pointer text-yellow-950" />
        </div>
      </div>
      {gallery}
    </>
  )
}