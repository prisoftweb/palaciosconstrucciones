import { getProjects } from "./api/RouteProyects"
import ListProyects from "@/components/projects/ListProjects";
import Header from "@/components/Header";

export default async function Home() {
  let projects;
  try {
    projects = await getProjects();
    if(typeof(projects)==='string'){
      return <h1>{projects}</h1>
    }
  } catch (error) {
    return <h1>Error al consultar proyectos!!</h1>
  }
  return (
    <>
      <Header />
      <div className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
        <div>
          <h1 className="text-yellow-950 text-3xl">Proyectos</h1>
        </div>
        <ListProyects projects={projects} />
      </div>
    </>
  )
}
