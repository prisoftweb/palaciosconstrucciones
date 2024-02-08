import font from '@/app/sass/base/_typography.module.scss'
import util from "@/app/sass/base/_utilities.module.scss";
import base from "@/app/sass/base/_base.module.scss";
import { getSlidersBySegement } from '../api/RouteSliders';
import ViewSlider from '@/components/sliders/ViewSlider';
import Header from '@/components/Header';
import { getServices, getServicesByCategory } from '../api/RouteServices';
import SliderServices from '@/components/services/SliderServices';
import Card from '@/components/finishes/Card';

export const dynamic = 'force-dynamic';
export default async function Paintigns(){
  
  let servicesByCat:any;
  let showServicesByCat;
  
  try {
    servicesByCat = await getServicesByCategory('Pinturas');
    if(typeof(servicesByCat)==='string'){
      showServicesByCat = <p>{servicesByCat}</p>
    }else{
      showServicesByCat = <></>
    }
  } catch (error) {
    showServicesByCat = <p>Error al consultar servicios por categoria...</p>
  }

  let sliders;
  let slider;
  try {
    sliders = await getSlidersBySegement('paintings');
    if(typeof(sliders) !== 'string'){
      if(sliders.length > 0){
        slider = <ViewSlider sliders={sliders} />
      }else{
        slider = <></>
      }
    }else{
      return <h1 className="text-center text-red-500">{sliders}</h1>
    }
  } catch (error) {
    return <h1 className=" text-center text-red-500">Error al consulta sliders</h1>
  }

  let services;
  let showServices;
  try {
    services = await getServices();
    if(typeof(services)==='string'){
      showServices = <p>{services}</p>
    }else{

      let indexSlider:number = 0;
      if(servicesByCat){
        services.map((service:any, index:number) => {
          if(service._id === servicesByCat[0]._id){
            indexSlider = index;
          }
        })
      }
      showServices = <SliderServices services={services} namepage='paintings' indexSlider={indexSlider} />
    }
  } catch (error) {
    showServices = <p>Error al consultar servicios...</p>
  }
  
  return(
    <>
      <Header />
      {slider}
      <section id="section-plafon" className={`${base.section}`}>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-2/3">
            <p className={`${font.subtitle} ${util.u_margin_top_md}`}>Aplicado de pinturas</p>
            <p className={`${font.subtitle_thin} ${util.u_margin_bottom_md}`}>Gran variedad de aplicados de tipos de pinturas</p>
            <p className={`${font.headingspecial2}`}>APLICADO DE PINTURAS EN NAVES INDUSTRIALES, EPOXICA, DE ACEITE Y DE AGUA</p>
          </div>
          <div className="w-full sm:w-1/3">
            <img src="/paint.png" alt="image paint" />
          </div>
        </div>
        <div className={`${util.u_margin_bottom_md} w-full grid gap-30 md:gap-20 md:grid-cols-2 xl:grid-cols-3  mt-5`}>
          <div className="shrink flex flex-col w-full  pr-10 mr-10">
            <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>Para la aplicacion de la pintura existen diferentes metodos, utilizamos metodos tradicionales como son aplicacion de pintura con brocha, rodillo y pistola aerográfica, tambien utilizamos metodos con equipo profesional como Pulverización de aire.</p>
            <img
              className={`shrink w-full ${util.u_margin_bottom_sm}`}
              src='/img/more/maquina-pintar.jpg'
              alt='Pulverización de aire'
            />
          </div>
          <div className="shrink flex flex-col w-full  pr-10 mr-10">
            <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>En Palacios construcciones aplicamos una gran variedad de pinturas, aplicamos pintura en naves industriales, pintura epóxica para pisos y estacionamientos, pintura base aceite y pintura base agua para viviendas, oficinas, muros y plafones</p>
            <img
              className={`shrink w-full ${util.u_margin_bottom_sm}`}
              src='/img/more/pinturas.jpg'
              alt='Tipos de pinturas'
            />
          </div>
          <div className="shrink flex flex-col w-full  pr-10 mr-10">

            <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>Estamos ubicados en San Luis Potosi Mexico, pero podemos realizar tu proyecto de aplicacion de pintura o acabados en cualquier parte de Mexico, comunicate con nosotros, llena la informacion solicitada y realiza tu siguiente cotizacion 
              <a className={`${font.heading4} ${font.heading4__underline}`} href="https://www.palaciosconstrucciones.mx/contact" target="_blank"
                > aqui
              </a>
            </p>
            <img
              className={`shrink w-full ${util.u_margin_bottom_sm}`}
              src='/img/more/ubicacion-pinturas.jpg'
              alt='Ubicacion de servicio de pintura'
            />
          </div>
        </div>

        <h4 className={`${font.headingspecial2} ${util.u_margin_bottom_sm}`}>
          Nuestros servicios de pintura:
        </h4>
        <div className={`grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 w-full ${util.u_margin_bottom_md}`}>
          {servicesByCat.map((service: any) => (            
            <Card key={service._id} image={service.logo} text1={service.name} text2={service.description} />                      
          ))}
        </div>
        <h4 className={`${font.headingspecial2} ${util.u_margin_bottom_sm}`}>
          Galeria de imagenes de aplicacion de pintura
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>
          Puedes visitar nuestra galería de imágenes por los servicios que ofrecemos en Palacios Construcciones, en las cuales podrás ver a detalle los proyectos realizados a nuestros clientes
        </p>              
        {showServices}
      </section>
    </>
  )
}