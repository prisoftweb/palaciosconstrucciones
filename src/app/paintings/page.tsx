import font from '@/app/sass/base/_typography.module.scss'
import { getSliders } from '../api/RouteSliders';
import ViewSlider from '@/components/sliders/ViewSlider';
import Header from '@/components/Header';
import { getServices } from '../api/RouteServices';
import SliderServices from '@/components/services/SliderServices';

export default async function Paintigns(){
  
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
      <div className="flex flex-wrap">
        <div className="w-full sm:w-2/3 p-5">
          <p className={`${font.subtitle}`}>Aplicado de pinturas</p>
          <p className={`${font.subtitle_thin}`}>Gran variedad de aplicados de tipos de pinturas</p>
          <p className={`${font.headingspecial2}`}>APLICADO DE PINTURAS EN NAVES INDUSTRIALES, EPOXICA, DE ACEITE Y DE AGUA</p>
        </div>
        <div className="w-full sm:w-1/3 p-5">
          <img src="/paint.png" alt="image paint" />
        </div>
      </div>
      <p className={`${font.heading2}`}>Puedes visitar nuestra galeria de imagenes de pinturas, 
          en las cuales podras ver a detalle algunos de los proyectos
          realizados a nuestros clientes, detalle de todo tipo de cortes y cambios en pintura.
      </p>
      {showServices}
    </>
  )
}