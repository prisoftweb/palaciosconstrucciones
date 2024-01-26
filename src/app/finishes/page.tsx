import font from '@/app/sass/base/_typography.module.scss';
import util from "@/app/sass/base/_utilities.module.scss";
import base from "@/app/sass/base/_base.module.scss";
import { getSlidersBySegement } from '../api/RouteSliders';
import ViewSlider from '@/components/sliders/ViewSlider';
import Header from '@/components/Header';
import Card from '@/components/finishes/Card';
import { getServices, getServicesByCategory } from '../api/RouteServices';
import SliderServices from '@/components/services/SliderServices';

export const dynamic = 'force-dynamic';
export default async function Finishes() {

  let servicesByCat;
  let showServicesByCat;
  try {
    servicesByCat = await getServicesByCategory('Acabados');
    if(typeof(servicesByCat)==='string'){
      showServicesByCat = <p>{servicesByCat}</p>
    }else{
      showServicesByCat = <></>
    }
  } catch (error) {
    showServicesByCat = <p>Error al consultar servicios por categoria...</p>
  }

  let services;
  let showServices;
  try {
    services = await getServices();
    if(typeof(services)==='string'){
      showServices = <p>{services}</p>
    }else{
      showServices = <SliderServices services={services} name={servicesByCat[0].name} id={servicesByCat[0]._id} />
    }
  } catch (error) {
    showServices = <p>Error al consultar servicios...</p>
  }
  

  let sliders;
  let slider;
  try {
    sliders = await getSlidersBySegement('finishes');
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
  
  return(
    <>
      <Header />
      {slider}
      <section id="section-plafon" className={`${base.section} ${util.u_margin_bottom_md}`}>
        <p className={`${font.subtitle} ${util.u_margin_top_md_}`}>Acabados</p>
        <p className={`${font.subtitle_thin}`}>Cualquier acabado nosotros los aplicamos</p>
        <p className={`${font.headingspecial} ${util.u_margin_bottom_sm} mt-5`}>ACABADOS EN SAN LUIS POTOSI DE REMODELACIONES, 
            PASTA, TEXTURIZADOS, PISOS Y MAS. </p>
        <div className={`${util.u_margin_bottom_md} w-full grid gap-30 md:gap-20 md:grid-cols-2 xl:grid-cols-3 mt-5`}>
          <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>En Palacios Construcciones nos especializamos en la transformación de espacios mediante servicios de construcción de pasta texturizada, instalación de pisos y muros cerámicos de todo tipo</p>
          <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>Realizamos la colocación de pisos epóxicos, laminados y de madera. Nuestro equipo altamente capacitado se dedica a ofrecer resultados excepcionales, asegurando que su hogar o lugar de trabajo refleje su estilo único </p>
          <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>Y cumpla con los más altos estándares de calidad. Ya sea que busque agregar textura a sus paredes, instalar pisos resistentes y estéticamente atractivos <a className={`${font.heading4} ${font.heading4__underline}`} href="/contact">¡Contáctenos
            </a> ahora para comenzar a transformar su espacio! </p>
        </div>
        <div className={`grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 w-full ${util.u_margin_bottom_md}`}>
          {servicesByCat.map((service: any) => (            
            <Card key={service._id} image={service.logo} text1={service.name} text2={service.description} />                      
          ))}
        </div>
        <h4 className={`${font.headingspecial2} ${util.u_margin_bottom_sm}`}>
          Galeria de imagenes de acabados en construccion
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>
          Puedes visitar nuestra galería de imágenes por los servicios que ofrecemos en Palacios Construcciones, en las cuales podrás ver a detalle los proyectos realizados a nuestros clientes
        </p>              
        {showServices}
      </section>
    </>
  )
}