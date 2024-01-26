import { getServices } from "../api/RouteServices";
import Card from "@/components/services/Card";
import Header from "@/components/Header";
import util from '@/app/sass/base/_utilities.module.scss';
import base from '@/app/sass/base/_base.module.scss'
import font from '@/app/sass/base/_typography.module.scss';

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
      <section className={`${base.section} ${util.u_margin_top_md2}`}>
        <h3 className={`${font.subtitle} ${util.u_margin_top_md_} pt-8`}>
          Nuestros servicios
        </h3>
        <h3 className={`${font.subtitle_thin} ${util.u_margin_bottom_sm}`}>
          Servicios de construccion
        </h3>
        <div className={`${util.u_margin_bottom_md} w-full grid gap-30 md:gap-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-5`}>
          <div className={`${util.u_margin_bottom_sm} shrink flex flex-col w-full`}>
            <h2 className={font.heading5}>
              Pinturas
            </h2>            
            <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>¡Transforma tus espacios con nuestra amplia gama de servicios de pintura, adaptados a tus necesidades y exigencias! En Palacios Construcciones, nos enorgullece ofrecer una variedad de soluciones de pintura que van desde las versátiles pinturas vinílicas hasta las resistentes pinturas epóxicas e industriales.</p>
            <img
              className={`shrink w-full ${util.u_margin_bottom_sm}`}
              src='/img/services/mano-sosteniendo-pincel-manchado.jpg'
              alt='Servicios de pintura'
            />
          </div>
          <div className={`${util.u_margin_bottom_sm} shrink flex flex-col w-full`}>
            <h2 className={font.heading5}>
              Acabados
            </h2>            
            <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>¡Haz de tus espacios un testimonio de elegancia y funcionalidad con nuestra gama completa de servicios de acabados! nos enorgullece ofrecer soluciones integrales de pasta texturizada, basecoat y readymix. Ademas de instalacion de pisos de madera, porcelanatos, pisos epóxicos e industriales y pisos laminados.</p>
            <img
              className={`shrink w-full ${util.u_margin_bottom_sm}`}
              src='/img/services/reparacion-trabajador-mantenimiento-servicio.jpg'
              alt='Servicios de acabados'
            />
          </div>
          
          <div className={`${util.u_margin_bottom_sm} shrink flex flex-col w-full`}>
            <h2 className={font.heading5}>
              Fachadas estructurales
            </h2>            
            <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>Dale un nuevo aspecto a tu edificio con nuestras fachadas estructurales. Ofrecemos soluciones que no solo mejoran la estética, sino que también añaden resistencia y funcionalidad a la estructura. Agrega textura y estilo a tus espacios con la instalación de muros de durock, glassrey, duela sintetica y mucho mas.
            </p>
            <img
              className={`shrink w-full ${util.u_margin_bottom_sm}`}
              src='/img/services/vista-angulo-esquina-techo-plateado-luces-lampara-blancas-rodeadas-paredes-grises.jpg'
              alt='Servicio de fachadas estructurales'
            />            
          </div>
          <div className={`${util.u_margin_bottom_sm} shrink flex flex-col w-full`}>
            <h2 className={font.heading5}>
              Muros y plafones
            </h2>            
            <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>Añade un elemento decorativo y funcional a tus techos con la instalación de plafones ciegos, reticulados y decorativos. Hacemos muros de tablaroca para crear divisiones internas, renovar espacios o agregar detalles arquitectónicos con la resistencia y durabilidad del steelframing si se requiere.
            </p>
            <img
              className={`shrink w-full ${util.u_margin_bottom_sm}`}
              src='/img/services/hombres-tiro-completo-trabajando-juntos.jpg'
              alt='Ubicacion de servicio de pintura'
            />
          </div>
        </div>
        <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>¡Convierte tus proyectos en realidad con nuestra extensa gama de más de 20 servicios de construcción! En Palacios Construcciones, nos enorgullece ser tu socio integral en la creación, renovación y transformación de espacios, ofreciendo una amplia variedad de servicios para satisfacer todas tus necesidades constructivas</p>
        <div className='w-full grid gap-4 md:grid-cols-2 xl:grid-cols-3 mt-10'>
          {services.map((service:any) => (
            <Card service={service} key={service._id} />
          ))}
        </div>
      </section>
    </>
  )
}