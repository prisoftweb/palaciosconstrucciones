import { getImagesProjectsByService } from "@/app/api/RouteServices"
import SliderOneImage from "@/components/SliderOneImage";


export default async function GalleryServices({searchParams, params}: 
                    {searchParams:{title:string, index:string, category:string}, params:{id:string}}){

  let sliders: any[] = [];

  try {
    const res = await getImagesProjectsByService(params.id);
    if(typeof(res)==='string'){
      return <h1 className="text-center text-red-500">{res}</h1>
    }else{
      res.map((project: any) => {
        project.images.map((image:any) => {
          if(image.services.name===searchParams.title){
            sliders.push({
              photo: image.photo,
            })
          }
        })
      })
    }
  } catch (error) {
    return <h1 className=" text-center text-red-500">Error al consultar slider</h1>
  }

  return (
    <>
      <SliderOneImage indexImage={searchParams.index? parseInt(searchParams.index): 0} 
            sliders={sliders} logo="" title={searchParams.title} 
            linkReturn={searchParams.category? `/${searchParams.category}`: '/'} />
    </>
  )
}