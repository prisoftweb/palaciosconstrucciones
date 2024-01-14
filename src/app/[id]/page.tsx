import { getProject, getProjects } from "../api/RouteProyects"
import SliderProjects from "@/components/projects/SliderProjects";
import Card_2p from "@/components/projects/Card_2p";
import ImageLink from "@/components/projects/ImageLink";
import Header from "@/components/Header";
import font from '@/app/sass/base/_typography.module.scss'

export default async function Project({ params }: { params: { id: string } }){
  let project;
  const id = params.id;
  try {
    project = await getProject(id);
    if(typeof(project)==='string'){
      return <h1 className="text-2xl text-center text-red-500">{project}</h1>
    }
  } catch (error) {
    return <h1 className="text-2xl text-center text-red-500">
      Error al obtener proyecto!!
    </h1>
  }
  
  let projects;
  try {
    projects = await getProjects();
    if(typeof(projects)==='string'){
      return <h1 className="text-2xl text-center text-red-500">{project}</h1>
    }
  } catch (error) {
    return <h1 className="text-2xl text-center text-red-500">
      Error al obtener los proyectos!!
    </h1>
  }

  let services: string[] = [];
  
  project.images.map((service:any) => {
    if(!services.includes(service.services.name) && services.length < 4){
      services.push(service.services.name);
    }
  })
  
  return (
    <>
      <Header />
      <div className="p-3 sm:p-5 md:p-7 lg:p-8 xl:p-10 mt-20">
        <div className="relative">
          <img src={project.images[0].photo} alt="image" className="w-full" 
              style={{filter:'blur(0.3px) brightness(45%)'}} />
          <h1 className={`absolute top-1/2 left-1/3 text-xl ${font.subtitle} font-bold`}>{project.title}</h1>
          {services.map((serv:string, index:number) => (
            <p className={`absolute right-10 font-semibold ${font.heading4}`} style={{top:`${(index * 25)+ 50}px`}} key={index}>{serv}</p>
          ))}
        </div>
        
        <div className="flex justify-between flex-wrap mt-5">
          <div>
            <p className={`${font.subtitle_thin} text-lg lg:text-3xl `}>{project.subtitle}</p>
          </div>
          <div className="mt-3 sm:mt-0">
            <p className={`${font.subtitle_thin} tetx-lg lg:text-3xl mb-5`}>Proyecto con</p>
            <img src={project.client? project.client.logo: '/public/logo.jpg'} alt="logo cliente" className="w-40" />
          </div>
        </div>

        <div className='grid gap-4 justify-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10'>
          <Card_2p styleDiv="mt-3" styleP1={`${font.tabBlue} text-sm sm:text-base md:text-lg lg:text-xl text-center`} 
            styleP2={`${font.heading4_center} mt-2 text-xs sm:text-sm text-center md:text-base lg:text-lg`} text1="AÑO" text2={project.year} />
          <Card_2p styleDiv="mt-3" styleP1={`${font.tabBlue} text-sm sm:text-base md:text-lg lg:text-xl text-center`} 
            styleP2={`${font.heading4_center} mt-2 text-xs sm:text-sm text-center md:text-base lg:text-lg`} text1="UBICACION" text2={project.address} />
          <Card_2p styleDiv="mt-3" styleP1={`${font.tabBlue} text-sm sm:text-base md:text-lg lg:text-xl text-center`} 
            styleP2={`${font.heading4_center} mt-2 text-xs sm:text-sm text-center md:text-base lg:text-lg`} text1="CLIENTE" text2={project.client? project.client.name: ''} />
          <Card_2p styleDiv="mt-3" styleP1={`${font.tabBlue} text-sm sm:text-base md:text-lg lg:text-xl text-center`} 
            styleP2={`${font.heading4_center} mt-2 text-xs sm:text-sm lg:text-lg md:text-base whitespace-pre`} text1="DETALLES" text2={project.features} />
        </div>

        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10'>
          {project.images.map((image: any) => (
            <ImageLink key={image._id} href={`/${id}/${image._id}`} photo={image.photo} />
          ))}
        </div>

        <SliderProjects projects={projects} idProject={project._id} />
      </div>
    </>
  )
}