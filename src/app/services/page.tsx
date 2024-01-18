import { getServices } from "../api/RouteServices";
import Card from "@/components/services/Card";
import Header from "@/components/Header";
import utilities from '@/app/sass/base/_utilities.module.scss';
import base from '@/app/sass/base/_base.module.scss'
import typography from '@/app/sass/base/_typography.module.scss';

export const dynamic = 'force-dynamic';
export default async function Services(){
  
  let services;
  try {
    services = await getServices();
    if(typeof(services)==='string')
      return <h1 className="text-center text-red-500 text-4xl">{services}</h1>
  } catch (error) {
    return <h1 className="text-center text-red-500 text-4xl">Error al obtener los servicios..</h1>
  }
  
  return(
    <>
      <Header />
      <section className={`${base.section} ${utilities.u_margin_top_md2}`}>
        <h3 className={`${typography.subtitle} ${utilities.u_margin_top_md_} pt-8`}>
          Servicios
        </h3>
        <p className={`${typography.heading4} ${utilities.u_margin_bottom_md} mt-4`}>
          Nuestros servicios son los siguientes:
        </p>
        <div className='w-full grid gap-4 md:grid-cols-2 xl:grid-cols-3 mt-10'>
          {services.map((service:any) => (
            <Card service={service} />
          ))}
        </div>
      </section>
    </>
  )
}