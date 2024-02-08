import { getIssues } from "@/app/api/RouteReviews";
import FormReview from "@/components/Reviews/FormReview";
import { getProjectsByClient } from "@/app/api/RouteProyects";
import Header from "@/components/Header";
import base from "@/app/sass/base/_base.module.scss";

export const dynamic = 'force-dynamic';
export default async function ReviewClient({ params }: { params: { id: string } }){
  let projects;
  
  if(!params.id){
    return <h1 className="text-center text-red-500">Error cliente no encontrado...</h1>
  }
  
  try {
    projects = await getProjectsByClient(params.id);
    if(typeof(projects)==='string'){
      return <h1 className="text-center text-red-500">{projects}</h1>
    }
    if(!projects || projects.length === 0){
      return <h1 className="text-center text-red-500">No se encontraron proyectos..</h1>
    }
  } catch (error) {
    return <h1 className="text-center text-red-500">Error al consultar los proyectos..</h1>
  }

  let issues;
  try {
    issues = await getIssues();
    if(typeof(issues)==='string'){
      return <h1 className="text-center text-red-500">{issues}</h1>
    }
    if(!issues || issues.length === 0){
      return <h1 className="text-center text-red-500">No se encontraron issues..</h1>
    }
  } catch (error) {
    return <h1 className="text-center text-red-500">Error al consultar los issues..</h1>
  }

  return(
    <>
      <Header />
      <section id="section-plafon" className={`p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 ${base.section}`}>
        <div className="flex justify-center mt-32">
          <FormReview issues={issues} projects={projects} />
        </div>
      </section>
    </>
  )
}