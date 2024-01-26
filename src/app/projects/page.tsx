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
        <h3 className={`${typography.subtitle_thin}`}>
          Portafolio de obras
        </h3>
        <p className={`${typography.heading4} ${utilities.u_margin_bottom_md} mt-4`}>
          ¡Descubre la excelencia en cada proyecto! en Palacios Construcciones estamos emocionados de presentarte nuestro portafolio de obras de construcción, un testimonio visual de nuestra dedicación, calidad y habilidades en la transformación de espacios. A continuación, te presentamos algunos de nuestros proyectos más destacados
        </p>
        <ListProyects projects={projects} />
      </section>
    </>
  )
}