import Link from "next/link"
import font from '@/app/sass/base/_typography.module.scss'
import img from  "@/app/sass/components/_imagen.module.scss";

export default function CardProjectImgClient({href, imgProj, imgClient, title}: 
                            {href:string, imgProj:string, imgClient:string, title:string}){
  return(
    <div className='relative'>
      <Link href={href}>
        <img src={imgProj} className={`${img.imagegallery} w-full`}/>
        <img src={imgClient} alt="logo cliente" 
          className="absolute top-2 left-10 w-1/2 z-0" />
        <p className={`absolute top-1/2 left-1/3 text-xl z-0 ${font.subtitle_project} font-bold`}>
          {title}</p>
      </Link>
    </div>
  )
}