import font from '@/app/sass/base/_typography.module.scss'

export default function ShowImagesService({images}: {images:any}){
  return(
    <>
      <p className={`${font.subtitle}`}>Galeria de proyectos de </p>
      <p className={`${font.subtitle_thin}`}>Aplicado de pintura</p>
      {/* <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 w-full'>
        {showServices.map((service: any) => (
          <div className=''>
            <img src={service.logo} alt="logo" className="w-full" />
          </div>
        ))}
      </div> */}
    </>
  )
}