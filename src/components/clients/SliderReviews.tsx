"use client"
import button from '@/app/sass/components/_button.module.scss';
import font from '@/app/sass/base/_typography.module.scss'
import util from "@/app/sass/base/_utilities.module.scss";
import base from "@/app/sass/base/_base.module.scss";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import typography from '@/app/sass/base/_typography.module.scss'
//import Link from "next/link";

export default function SliderReviews({reviews}: {reviews:any}){
  const [showReviews, setShowReviews] = useState<any[]>(reviews);
  const [index, setIndex] = useState(0);
  
  const [width, setWidth] = useState<number>(0);
  const [numberReviews, setNumberReviews] = useState<number>(width<640? 1: (width<768? 2: (width<1024? 3: 4)));
  
  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, false);
  }, [])

  useEffect(() => {
    setNumberReviews(width<640? 1: (width<768? 2: (width<1280? 3: 4)));
  }, [width])

  useEffect(() => {
    const timer = setTimeout(() => {
      if(index >= reviews.length - 1){
        setIndex(0);
      }else{
        setIndex(index + 1);
      }
    }, 5000);

    let count = reviews.length - (index + numberReviews);
    
    if(count < 0){
      count = Math.abs(count);
      //const arr1 = reviews.slice(index, index + numberReviews);
      const arr1 = reviews.slice(index);
      if(count >= index){
        count = index;
      }
      const arr2 = reviews.slice(0, count);
      if(arr2.length === 0){
        setShowReviews(arr1);
      }else{
        setShowReviews([...arr1, ...arr2]);
      }
    }else{
      setShowReviews(reviews.slice(index, index + numberReviews));
    }

    return () => clearTimeout(timer);
  }, [index])

  const Previous = () => {
    if(index > 0){
      setIndex(index -1);
    }else{
      setIndex(reviews.length -1);
    }
  }

  const Next = () => {
    if(index < reviews.length - 1){
      setIndex(index+1)
    }else{
      setIndex(0);
    }
  }

  return(
    <>
    {/* <img src="img/clients/default.jpg" alt="prueba" /> */}
    <section className={`${util.u_margin_top_md2}`}>
      <h1 className={`${typography.subtitle} ${util.u_margin_top_md_}`}>Testimonios clientes</h1>
      <h3 className={`${typography.subtitle_thin}`}>
        Agregar tu opinion
      </h3>        
      <p className={`${typography.heading4} ${util.u_margin_bottom_md}`}>
      Tu opinión es importante para nosotros, ya que nos ayuda a mejorar nuestros servicios de construccion. Le agradeceríamos que se tomara un minuto para dejar una reseña.
      </p>              
      <div className={`${button.button__normal} ${util.u_margin_bottom_sm}`}>
              <a                            
                className={`${button.button__text}`}
                href="/reviews"              
                >Pon tu opinion
              </a>
            </div>
      <div className="flex items-center">
        <div className='w-20'>
          <ChevronLeftIcon onClick={Previous}
            className="w-12 h-12 cursor-pointer text-yellow-950" />
        </div>

        <div className='w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10'>
          {showReviews.map((review: any) => (
            <div className='flex flex-col items-center' key={review._id}>
              <img src={review.photo} alt="logo" className="w-1/3 rounded-full" />
              <p className={`text-sm px-2 ${typography.nameReview}`}>{review.name}</p>
              <p className={`px-2 ${typography.review}`}>{review.review}</p>
            </div>
          ))}
        </div>

        <div className='w-20'>
          <ChevronRightIcon onClick={Next}
            className="w-12 h-12 cursor-pointer text-yellow-950" />
        </div>
      </div>
    </section>
    </>
  )  
}
