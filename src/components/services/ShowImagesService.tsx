import font from '@/app/sass/base/_typography.module.scss'
import Link from 'next/link'

export default function ShowImagesService({images, nameService, idService, namepage}: 
                          {images:any, nameService:string, idService:string, namepage:string}){
  
  const gallery: any[] = []; 
  
  let index=0;
  images.map((project:any) => {
    project.images.map((image: any) => {
      if(image.services.name===nameService && !image.panoramic){
        gallery.push({
          photo: image.photo,
          index,
          _id: image._id
        })
        index++;
      }
    })
  })

  return(
    <>
      <p className={`${font.subtitle} my-12 `}>Galeria de proyectos de {nameService}</p>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 mb-5 w-full'>
        {gallery.map((image) => (
          <Link key={image._id} href={`services/${idService}?title=${nameService}&&index=${image.index}&&category=${namepage}`}>
            <div>
              <img src={image.photo} alt={nameService} className="w-full" />
            </div>
          </Link>
        ))}
        {/* {images.map((project:any) => (
          project.images.map((image:any) => (
            ((image.services.name===nameService && !image.panoramic) ? 
              <Link key={image._id} href={`services/${idService}?title=${nameService}&&index=${0}&&category=${namepage}`}>
                <div>
                  <img src={image.photo} alt={nameService} className="w-full" />
                </div>
              </Link>: '')
          ))
        ))} */}
      </div>
    </>
  )
}