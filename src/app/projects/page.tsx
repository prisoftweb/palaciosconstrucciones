import { getProjects } from "../api/RouteProyects";
import Header from "@/components/Header";
import utilities from '@/app/sass/base/_utilities.module.scss';
import base from '@/app/sass/base/_base.module.scss'
import typography from '@/app/sass/base/_typography.module.scss';
import ListProyects from "@/components/projects/ListProjects";

export const dynamic = 'force-dynamic';
export default async function Projects(){
  
  let projects;
  try {
    projects = await getProjects();
    if(typeof(projects)==='string')
      return <h1 className="text-center text-red-500 text-4xl">{projects}</h1>
  } catch (error) {
    return <h1 className="text-center text-red-500 text-4xl">Error al obtener proyectos..</h1>
  }

  return(
    <>
      <Header />
      <section className={`${base.section} ${utilities.u_margin_top_md2}`}>
        <h3 className={`${typography.subtitle} ${utilities.u_margin_top_md_} pt-8`}>
          Proyectos
        </h3>
        <p className={`${typography.heading4} ${utilities.u_margin_bottom_md} mt-4`}>
          Nuestros proyectos son los siguientes:
        </p>
        <ListProyects projects={projects} />
      </section>
    </>
  )
}