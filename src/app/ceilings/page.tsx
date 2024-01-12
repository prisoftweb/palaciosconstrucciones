import font from '@/app/sass/base/_typography.module.scss'
import { getSliders } from '../api/RouteSliders';
import ViewSlider from '@/components/sliders/ViewSlider';
import Header from '@/components/Header';
import { getImagesProjectsByService } from "@/app/api/RouteServices"
import GalleryProjects from '@/components/ceillings/GalleryProjects';
import { getServices } from '../api/RouteServices';
import SliderServices from '@/components/ceillings/SliderServices';

export default async function Ceilings() {
  let sliders;
  let slider;
  try {
    sliders = await getSliders();
    if(typeof(sliders) !== 'string'){
      slider = <ViewSlider sliders={sliders} />
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
      <div className='flex flex-wrap mt-5'>
        <div className='w-full md:w-1/2'>
          <img src="/plafon.png" alt="ceilings image" />
        </div>
        <div className='w-full md:w-1/2'>
          <p className={`${font.subtitle}`}>Plafones</p>
          <p className={`${font.subtitle_thin}`}>Plafones en SLP</p>
          <p className={`${font.headingspecial}`}>DIVERSIDAD DE PLAFONES CIEGOS, ARTICULADOS EN SAN LUIS POTOS&Iacute;</p>
          <p className={`${font.heading4}`}>Esquema del armado de un plafon ciego</p>
        </div>
      </div>
      <p className={`${font.heading4} mt-5`}>
        Nuestro equipo de trabajo realiza todo tipo de plafones en diferentes obras, 
        se pueden hacer en resibidores, habitaciones, hoteles, etc
      </p>
      {gallery}
      {showServices}
    </>
  )
}