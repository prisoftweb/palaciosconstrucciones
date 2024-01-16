import font from '@/app/sass/base/_typography.module.scss'
import util from "@/app/sass/base/_utilities.module.scss";

export default function ShowImagesService({images, service}: {images:any, service:string}){
  return(
    <>
      <p className={`${font.subtitle} `}>Galeria de proyectos de {service}</p>
      <p className={`${font.subtitle_thin} `}>Aplicado de pintura</p>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 mb-5 w-full'>
        {images.map((project:any) => (
          project.images.map((image:any) => (
            (image.services.name===service? 
              <div key={image._id} className=''>
                <img src={image.photo} alt={service} className="w-full" />
              </div>: '')
          ))
        ))}
        {/* {images.map((project: any) => (
          project.images.map((image:any) => (
            <div key={image._id} className=''>
              <img src={image.photo} alt={service} className="w-full" />
            </div>
          ))
        ))} */}
      </div>
    </>
  )
}