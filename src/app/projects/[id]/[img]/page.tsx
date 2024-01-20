import { getProject } from "@/app/api/RouteProyects";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Header from "@/components/Header";

export default async function ShowImage({params}: {params: {id: string, img:string}}){
  
  let project;
  try {
    project = await getProject(params.id);
    if(typeof(project)==='string'){
      return <h1 className="text-center text-red-500 text-2xl">{project}</h1>
    }
  } catch (error) {
    return <h1 className="text-center text-red-500 text-2xl">Error al obtener proyecto</h1>
  }
  
  let img;
  project.images.map((image:any) => {
    if(image._id === params.img) img = image.photo;
  })

  return(
    <>
      <Header />
      <div className="p-3">
        <div className="flex justify-between flex-wrap">
          <div>
            <p className="text-yellow-950 text-lg lg:text-3xl">{project.subtitle}</p>
          </div>
          <div className="mt-3 sm:mt-0">
            <p className="text-yellow-950 tetx-lg lg:text-3xl">Proyecto con</p>
            <img src={project.client? project.client.logo: '/public/logo.jpg'} alt="logo cliente" className="w-40" />
          </div>
        </div>

        <div className="relative">
          <img src={img} alt="image proyect" className="w-full" />
          <Link href={`/${params.id}`}>
            <XMarkIcon className="w-12 h-12 text-red-500 absolute top-2 right-12" />
          </Link>
        </div>
      </div>
    </>
  )
}