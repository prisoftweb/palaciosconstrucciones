import font from '@/app/sass/base/_typography.module.scss'
import { getSliders } from '../api/RouteSliders';
import ViewSlider from '@/components/sliders/ViewSlider';
import Header from '@/components/Header';
import Card from '@/components/finishes/Card';

export default async function Finishes() {
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
  
  return(
    <>
      <Header />
      {slider}
      <p className={`${font.subtitle}`}>Acabados</p>
      <p className={`${font.subtitle_thin}`}>Cualquier acabado nosotos los aplicamos</p>
      <p className={`${font.headingspecial} mt-5`}>ACABADOS EN SAN LUIS POTOSI DE REMODELACIONES, 
          PASTA, TEXTURIZADOS, PISOS Y MAS. </p>
      <p className={`${font.heading4} mt-5`}>Acabados en general en remodelaciones, pasta, 
          texturizados, instalación de pisos y muros cerámicos, 
          instalación de pisos epóxicos e instalación de piso laminado y madera</p>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-10 w-full'>
        <Card image='/card1.png' text1='Pastas en muros & pastas texturizadas' 
          text2='Aplicado de todo pasta y basecoat en muros de tablaroca y durock, 
          aplicado de pastas texturizadas'/>
        <Card image='/card2.png' text1='Acabados en remodelaciones' 
          text2='Acabados en remodelaciones aplicando pastas, pisos y pinturas de cualquier tipo'/>
        <Card image='/card3.png' text1='Instalacion de pisos y muros' 
          text2='Instalacion de pisos y muros ceramicos, porcelanato, vinilico y de marmol'/>
        <Card image='/card4.png' text1='Instalacion de pisos laminados y madera' 
          text2='Instalacion de pisos laminados, duela de madera y madera'/>
        <Card image='card5.png' text1='Pisos epoxicos' 
          text2='Recubirmientos epoxicos antiderrapantes, anticorrosivos y pisos industriales'/>
      </div>
      {/* <div className={`${ImageStyle.imagentitulotextocard}`} >
        <img src="/nuevoIcono.jpg" alt="icono" />
        <p>Pastas en muros & pastas texturizadas</p>
        <p>Aplicado de todo pasta y basecoat en muros de tablaroca y durock, 
            aplicado de pastas texturizadas</p>
      </div> */}
    </>
  )
}