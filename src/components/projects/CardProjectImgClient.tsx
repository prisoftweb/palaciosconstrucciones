import Link from "next/link"

export default function CardProjectImgClient({href, imgProj, imgClient, title}: 
                            {href:string, imgProj:string, imgClient:string, title:string}){
  return(
    <div className='relative'>
      <Link href={href}>
        <img src={imgProj} className="w-full" />
        <img src={imgClient} alt="logo cliente" 
          className="absolute top-2 left-10 w-1/2" />
        <p className="absolute top-1/2 left-10 text-xl text-yellow-950 font-bold">
          {title}</p>
      </Link>
    </div>
  )
}