import util from "@/app/sass/base/_utilities.module.scss";

export default function GalleryProjects({gallery}: {gallery:any}){
  return(
    <>
      <div className={`grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 mb-5 w-full ${util.u_margin_bottom_md}`}>
        {gallery.map((project: any) => (
          project.images.map((image:any) => (
            <div key={image._id} className=''>
              <img src={image.photo} alt={'image'} className="w-full" />
            </div>
          ))
        ))}
      </div>
    </>
  )
}