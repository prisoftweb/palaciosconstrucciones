import font from '@/app/sass/base/_typography.module.scss'
import util from "@/app/sass/base/_utilities.module.scss";
import base from "@/app/sass/base/_base.module.scss";
import img from  "@/app/sass/components/_imagen.module.scss";
//import { getSliders } from '../api/RouteSliders';
import { getSlidersBySegement } from '../api/RouteSliders';
import ViewSlider from '@/components/sliders/ViewSlider';
import Header from '@/components/Header';
import { getImagesProjectsByService } from "@/app/api/RouteServices"
import GalleryProjects from '@/components/ceillings/GalleryProjects';
import { getServices } from '../api/RouteServices';
import SliderServices from '@/components/services/SliderServices';

export const dynamic = 'force-dynamic';
export default async function Frontages() {
  let sliders;
  let slider;
  try {
    //sliders = await getSliders();
    sliders = await getSlidersBySegement('frontages');
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

  let gallery;
  try {
    const res = await getImagesProjectsByService('657150e1e35e810019bfa56a');
    if(typeof(res)==='string'){
      gallery = <p>{res}</p>
    }else{
      gallery = <GalleryProjects gallery={res} />
    }
  } catch (error) {
    gallery = <p>Ocurrio un problema al consultar galeria..</p>
  }

  let services;
  let showServices;
  try {
    services = await getServices();
    if(typeof(services)==='string'){
      showServices = <p>{services}</p>
    }else{
      showServices = <SliderServices services={services} />
    }
  } catch (error) {
    showServices = <p>Error al consultar servicios...</p>
  }

  return(
    <>
      <Header />
      {slider}
      <section id="section-plafon" className={`p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 ${base.section}`}>
        <div className='flex flex-wrap mt-5 items-center'>
          <div className={`${util.u_margin_bottom_sm} w-full md:w-1/2 flex justify-center md:justify-end pr-5`}>
            <img src="/img/services/fachadas-main.jpg" alt="Fachadas estructurales" />
          </div>
          <div className={`${util.u_margin_bottom_sm} w-full md:w-1/2`}>
            <p className={`${font.subtitle} ${util.u_margin_top_md_}`}>Fachadas estructurales</p>
            <p className={`${font.subtitle_thin}`}>Para la industria o comercios</p>
            <p className={`${font.headingspecial}`}>Fachadas resistentes a la intemperie con materiales modernos</p>            
          </div>
        </div>
        <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>
          Nuestro equipo de trabajo realiza todo tipo de fachadas con materiales durock y glassrey para exterior, resistente a la intemperie 
        </p>
        <h4 className={`${font.headingspecial2} ${util.u_margin_bottom_sm}`}>
          Los Servicios de Fachadas estructurales que ofrecemos en Palaciosconstrucciones son los siguientes
        </h4>
        <div className={`${util.u_margin_bottom_md} shrink w-full grid gap-20 md:gap-3 justify-center sm:justify-center sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 mt-10`}>            
          <div className="shrink flex flex-col w-full justify-center pr-10 mr-10">
              <img
                  className={`${img.icono} ${util.u_margin_bottom_sm}`}
                  src="img/iconos/fachada.png"
                  alt="fachada"
              />
              <div className="shrink w-full pr-10 mr-10">
                  <h2 className={font.heading5}>
                      Fachadas estructurales
                  </h2>
                  <p className={`${font.heading4} ${util.u_margin_bottom_sm}`}>
                      Realizamos una gran variedad de fachadas estructurales para la industria y comercios, con materiales durock y glassrey 
                  </p>              
              </div>
              <img
                  className={`${img.imagen} shrink w-full ${util.u_margin_bottom_sm}`}
                  src="img/services/fachadas.jpg"
                  alt="Fachadas"
              />
          </div>
          <div className="shrink flex flex-col w-full  pr-10 mr-10">
              <img
                  className={`${img.icono} ${util.u_margin_bottom_sm}`}
                  src="img/iconos/durock.png"
                  alt="durock"
              />
              <div className="shrink w-full pr-10 mr-10">
                  <h2 className={font.heading5}>
                      Muros de durock
                  </h2>
                  <p className={`${font.heading4} ${util.u_margin_bottom_sm}`}>
                      Construcción de muros de durock para exterior, resistente a la intemperie para hacer fachadas estructurales de todo tipo
                  </p>              
              </div>
              <img
                  className={`${img.imagen} shrink w-full ${util.u_margin_bottom_sm}`}
                  src="img/services/durock.jpg"
                  alt="Durock"
              />
          </div>
          
          <div className="shrink flex flex-col w-full  pr-10 mr-10">
              <img
                  className={`${img.icono} ${util.u_margin_bottom_sm}`}
                  src="img/iconos/steelframing.png"
                  alt="glassrey"
              />
              <div className="shrink w-full pr-10 mr-10">
                  <h2 className={font.heading5}>
                      Muros de Glassrey
                  </h2>
                  <p className={`${font.heading4} ${util.u_margin_bottom_sm}`}>
                      Al igual que el durock, realizamos instalacion de panel de yeso para exteriores, resistente a la intemperie para hacer fachadas 
                  </p>              
              </div>
              <img
                  className={`${img.imagen} shrink w-full ${util.u_margin_bottom_sm}`}
                  src="img/services/glassrey.jpg"
                  alt="glassrey"
              />
          </div>
          <div className="shrink flex flex-col w-full  pr-10 mr-10">
              <img
                  className={`${img.icono} ${util.u_margin_bottom_sm}`}
                  src="img/iconos/steelframing.png"
                  alt="duela sintetica"
              />
              <div className="shrink w-full pr-10 mr-10">
                  <h2 className={font.heading5}>
                      Duela sintetica o deck
                  </h2>
                  <p className={`${font.heading4} ${util.u_margin_bottom_sm}`}>
                      El DECK tiene ventajas de instalación, mantenimiento, limpieza, durabilidad y resistencia contra la madera, en Palacios construcciones  acondicionamos espacios al aire libre para cubrir terraza, patios, roof garden, etc
                  </p>              
              </div>
              <img
                  className={`${img.imagen} shrink w-full ${util.u_margin_bottom_sm}`}
                  src="img/services/duela-sintetica.jpg"
                  alt="steelframing"
              />
          </div>
        </div>    
        {/* <h4 className={`${font.headingspecial2} ${util.u_margin_bottom_sm}`}>
          Fachadas estructurales
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>
          Galería de imágenes de los servicios de Fachadas que ofrecemos en Palacios Construcciones
        </p>              
        {gallery} */}
        <h4 className={`${font.headingspecial2} ${util.u_margin_bottom_sm}`}>
          Galeria de imagenes de Fachadas
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>
          Puedes visitar nuestra galería de imágenes por los servicios que ofrecemos en Palacios Construcciones, en las cuales podrás ver a detalle los proyectos realizados a nuestros clientes
        </p>              
        {showServices}
      </section>
    </>
  )
}