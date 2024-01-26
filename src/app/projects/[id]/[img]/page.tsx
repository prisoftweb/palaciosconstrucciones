import { getProject } from "@/app/api/RouteProyects";
import SliderOneImage from "@/components/SliderOneImage";

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
  
  let img=0;
  project.images.map((image:any, index:number) => {
    if(image._id === params.img) img = index;
  })

  return(
    <>
      <SliderOneImage indexImage={img} sliders={project.images} linkReturn={`/projects/${project._id}`}
            title={project.subtitle} logo={project.client? project.client.logo: '/public/logo.jpg'} />
    </>
  )
}