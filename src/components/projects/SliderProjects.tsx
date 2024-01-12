"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import Link from "next/link";
import font from '@/app/sass/base/_typography.module.scss'

export default function SliderProjects({projects, idProject}: {projects:any, idProject:string}){
  
  const [filter, setFilter] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  //const numberProjects = 4;
  const filtered = projects.filter((project:any) => project._id !== idProject)

  const [width, setWidth] = useState<number>(window.innerWidth);
  const [numberProjects, setNumberProjects] = useState<number>(width<640? 1: (width<768? 2: (width<1024? 3: 4)));
  
  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, [])

  useEffect(() => {
    setNumberProjects(width<640? 1: (width<768? 2: (width<1280? 3: 4)));
  }, [width])

  useEffect(() => {
    const timer = setTimeout(() => {
      if(index >= filtered.length - 1){
        setIndex(0);
      }else{
        setIndex(index + 1);
      }
    }, 5000);

    let count = filtered.length - (index + numberProjects);
    
    if(count < 0){
      count = Math.abs(count);
      const arr1 = filtered.slice(index, index + numberProjects);
      const arr2 = filtered.slice(0, count);
      setFilter([...arr1, ...arr2]);
    }else{
      setFilter(filtered.slice(index, index + numberProjects));
    }

    return () => clearTimeout(timer);
  }, [index])

  const Previous = () => {
    if(index > 0){
      setIndex(index -1);
    }else{
      setIndex(filtered.length -1);
    }
  }

  const Next = () => {
    if(index < filtered.length - 1){
      setIndex(index+1)
    }else{
      setIndex(0);
    }
  }

  return(
    <>
      <h1 className={`${font.subtitle} text-4xl my-5 font-semibold`}>Otros proyectos</h1>
      <div className="flex items-center">
        <div className='w-20'>
          <ChevronLeftIcon onClick={Previous}
            className="w-12 h-12 cursor-pointer text-yellow-950" />
        </div>

        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10'>
          {filter.map((project: any) => (
            <Link key={project._id} href={`/${project._id}`}>
              <div className=''>
                <img src={project.images[0].photo} alt="image" className="w-full" />
                <p className={`${font.subtitle_project}`}>{project.title}</p>
              </div>
            </Link>
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