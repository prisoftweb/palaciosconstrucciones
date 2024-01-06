import { getClients, getTestimonios } from "../api/RouteClients"
import SliderClients from "@/components/clients/SliderClients";
import SliderReviews from "@/components/clients/SliderReviews";
import { getProjects } from "../api/RouteProyects";

export default async function Clients({hola}: {hola:''}){
  
  let clients;
  try {
    clients = await getClients();
    if(typeof(clients)==='string') 
      return <h1 className="text-center text-4xl text-red-500">Error al consultar clientes..</h1>
  } catch (error) {
    return <h1 className="text-center text-4xl text-red-500">Error al obtener clientes..</h1>
  }
  
  let reviews;
  try {
    reviews = await getTestimonios();
    if(typeof(reviews)==='string') 
      return <h1 className="text-center text-4xl text-red-500">Error al consultar testimonios..</h1>
  } catch (error) {
    return <h1 className="text-center text-4xl text-red-500">Error al obtener testimonios..</h1>
  }

  let projects;
  try {
    projects = await getProjects();
    if(typeof(projects)==='string'){
      return <h1 className="text-2xl text-center text-red-500">Error al consultar proyecto</h1>
    }
  } catch (error) {
    return <h1 className="text-2xl text-center text-red-500">
      Error al obtener los proyectos!!
    </h1>
  }
  
  return(
    <>      
      <SliderClients clients={clients} />
      <SliderReviews reviews={reviews} />
    </>
  )
}