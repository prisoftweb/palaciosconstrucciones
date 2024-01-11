import { getIssues } from "@/app/api/RouteReviews";
import FormReview from "@/components/Reviews/FormReview";
import { getProjects } from "@/app/api/RouteProyects";
import Header from "@/components/Header";

export default async function Reviews(){
  
  let projects;
  try {
    projects = await getProjects();
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
      <div className="flex justify-center mt-32">
        <FormReview issues={issues} projects={projects} />
      </div>
    </>
  )
}