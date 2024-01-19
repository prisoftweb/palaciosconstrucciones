import font from '@/app/sass/base/_typography.module.scss'
import util from "@/app/sass/base/_utilities.module.scss";
import base from "@/app/sass/base/_base.module.scss";
//import { getSliders } from '../api/RouteSliders';
import { getSlidersBySegement } from '../api/RouteSliders';
import ViewSlider from '@/components/sliders/ViewSlider';
import Header from '@/components/Header';
import { getImagesProjectsByService } from "@/app/api/RouteServices"
import GalleryProjects from '@/components/ceillings/GalleryProjects';
import { getServices } from '../api/RouteServices';
import SliderServices from '@/components/services/SliderServices';

export const dynamic = 'force-dynamic';
export default async function Ceilings() {
  let sliders;
  let slider;
  try {
    //sliders = await getSliders();
    sliders = await getSlidersBySegement('ceilings');
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
            <img src="/plafon.png" alt="ceilings image" />
          </div>
          <div className={`${util.u_margin_bottom_sm} w-full md:w-1/2`}>
            <p className={`${font.subtitle} ${util.u_margin_top_md_}`}>Plafones</p>
            <p className={`${font.subtitle_thin}`}>Plafones en SLP</p>
            <p className={`${font.headingspecial}`}>Diversidad de plafones ciegos, reticulados en San Luis Potos&Iacute;</p>
            <p className={`${font.heading4}`}>Esquema del armado de un plafon ciego</p>
          </div>
        </div>
        <p className={`${font.heading4} ${util.u_margin_bottom_md}`}>
          Nuestro equipo de trabajo realiza todo tipo de plafones en diferentes obras, 
          se pueden hacer en resibidores, habitaciones, hoteles, etc
        </p>
        {gallery}
        {showServices}
      </section>
    </>
  )
}