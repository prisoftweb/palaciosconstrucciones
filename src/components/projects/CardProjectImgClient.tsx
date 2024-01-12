import Link from "next/link"
import font from '@/app/sass/base/_typography.module.scss'

export default function CardProjectImgClient({href, imgProj, imgClient, title}: 
                            {href:string, imgProj:string, imgClient:string, title:string}){
  return(
    <div className='relative'>
      <Link href={href}>
        <img src={imgProj} className="w-full" style={{filter:'blur(0.3px) brightness(45%)'}} />
        <img src={imgClient} alt="logo cliente" 
          className="absolute top-2 left-10 w-1/2" />
        <p className={`absolute top-1/2 left-1/3 text-xl ${font.subtitle_project} font-bold`}>
          {title}</p>
      </Link>
    </div>
  )
}