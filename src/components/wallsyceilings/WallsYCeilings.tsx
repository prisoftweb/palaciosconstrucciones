
import typography from "@/app/sass/base/_typography.module.scss";
import ittc from "@/app/sass/components/_imagentitulotextocard.module.scss";
import utilities from "@/app/sass/base/_utilities.module.scss";
import hg from "@/app/sass/layout/_headergrid.module.scss";
import img from  "@/app/sass/components/_imagen.module.scss";
import base from "@/app/sass/base/_base.module.scss";
import SliderServices from "../services/SliderServices";
import ViewSlider from "../sliders/ViewSlider";
import { getServices, getServicesByCategory } from '@/app/api/RouteServices';
import { getSlidersBySegement } from "@/app/api/RouteSliders";

export default async function Tablaroca(){
    
    let servicesByCat:any;
    let showServicesByCat;
    try {
        servicesByCat = await getServicesByCategory('Muros y plafones');
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
        let indexSlider:number = 0;
        if(servicesByCat){
            services.map((service:any, index:number) => {
            if(service._id === servicesByCat[0]._id){
                indexSlider = index;
            }
            })
        }
        showServices = <SliderServices services={services} namepage="wallsyceilings" indexSlider={indexSlider} />
      }
    } catch (error) {
      showServices = <p>Error al consultar servicios...</p>
    }
  
    let sliders;
    let slider;
    try {
      sliders = await getSlidersBySegement('tablaroca');
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
    
    
    return (
        <>
        {slider}
        <section className={`${base.section} ${utilities.u_margin_top_md2}`}>
            <></>
            <div className='flex flex-wrap mt-5 items-center'>
                <div className={`${utilities.u_margin_bottom_sm} w-full md:w-1/2 flex justify-center md:justify-end pr-5`}>
                    <img src="/plafon.png" alt="ceilings image" />
                </div>
                <div className={`${utilities.u_margin_bottom_sm} w-full md:w-1/2`}>
                    <p className={`${typography.subtitle} ${utilities.u_margin_top_md_}`}>Plafones</p>
                    <p className={`${typography.subtitle_thin}`}>Plafones en SLP</p>
                    <p className={`${typography.headingspecial}`}>Diversidad de plafones ciegos, reticulados en San Luis Potos&Iacute;</p>
                    <p className={`${typography.heading4}`}>Esquema del armado de un plafon ciego</p>
                </div>
            </div>
            <h3 className={`${typography.heading4}`}>.</h3>
            <h3 className={`${typography.subtitle} ${utilities.u_margin_top_md_}`}>
                Muros de Tablaroca
            </h3>
            <h3 className={`${typography.subtitle_thin}`}>
                Todo tipo de muros
            </h3>        
            <h4 className={`${typography.headingspecial2} ${utilities.u_margin_bottom_sm}`}>
                Muros de tablaroca, muros de durock y glassrey en San Luis Potosi y todo Mexico
            </h4>
            <p className={`${typography.heading4} ${utilities.u_margin_bottom_md}`}>
                Nuestros servicios de muros y plafones se detallan en los siguientes servicios:
            </p>              
            <div className={`flex flex-col lg:flex-row ${utilities.u_margin_bottom_md}`}>
                <div className="shrink  flex flex-col lg:flex-row w-full lg:w-1/3  pr-10 mr-10" >
                    <div className={`${utilities.u_margin_bottom_md} shrink w-full grid gap-20 md:gap-3 justify-center sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 mt-40`}>
                        <p className={`${typography.heading5} ${typography.heading5__light} ${utilities.u_margin_bottom_sm} col-start-1 col-end-3 row-start-2 justify-self-center`}>
                            Mayor durabilidad
                        </p>
                        <p className={`${typography.heading5} ${typography.heading5__light} ${utilities.u_margin_bottom_sm} col-start-2 row-start-3 justify-self-left`}>
                            Fachadas modernas
                        </p>
                        <img
                        className={`${img.imagenvertical} shrink w-full col-start-1 col-span-2 row-start-2 row-span-3 ${utilities.u_margin_bottom_sm}`}
                        src="img/services/fachaleta.jpg"
                        alt="Fachada principal"
                    />
                        <p className={`${typography.heading5} ${typography.heading5__light} ${utilities.u_margin_bottom_sm} col-start-1 row-start-3 justify-self-center`}>
                            Mejores costos
                        </p>
                        <p className={`${typography.heading5} ${typography.heading5__light} ${utilities.u_margin_bottom_sm} col-start-2 row-start-4 justify-self-left`}>
                            Menor mantenimiento
                        </p>
                        <p className={`${typography.heading5} ${typography.heading5__light} ${utilities.u_margin_bottom_sm} col-start-1 row-start-4 justify-self-center`}>
                            Trabajo garantizado
                        </p>
                    </div>
                    
                </div>
                <div className={`${utilities.u_margin_bottom_md} shrink w-full lg:w-2/3 grid gap-20 md:gap-3 justify-center sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 mt-10`}>            
                    
                    <div className={`${utilities.u_margin_bottom_md} shrink flex flex-col justify-start md:justify-center w-full pr-10 mr-10 `}>
                        <img
                            className={`${img.icono} ${utilities.u_margin_bottom_sm}`}
                            src="img/iconos/tablaroca.png"
                            alt="tablaroca"
                        />
                        <div className="shrink w-full justify-center pr-10 mr-10">
                            <h2 className={typography.heading5}>
                                Muros de tablaroca
                            </h2>
                            <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
                                Muros de tablaroca con diseños originales, en Palacios Construcciones creamos muebles, arcos, columnas con calidad y cumpliendo sus necesidades y expectativas
                            </p>              
                        </div>
                        <img
                                className={`${img.imagenservices} shrink w-full ${utilities.u_margin_bottom_sm}`}
                                src="img/services/tablarocamuros.jpg"
                                alt="tablaroca muro"
                            />
                    </div>
                    <div className={`${utilities.u_margin_bottom_md} shrink flex flex-col w-full  pr-10 mr-10`}>
                        <img
                            className={`${img.icono} ${utilities.u_margin_bottom_sm}`}
                            src="img/iconos/steelframing.png"
                            alt="steelframing"
                        />
                        <div className="shrink w-full pr-10 mr-10">
                            <h2 className={typography.heading5}>
                                Steel Framing
                            </h2>
                            <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
                                Construccion steel framing con una rapida construccion, barrera contra el ruido, un aislamiento térmico sin precedentes y todo esto a un bajo costo
                            </p>              
                        </div>
                        <img
                            className={`${img.imagenservices} shrink w-full ${utilities.u_margin_bottom_sm}`}
                            src="img/services/steelframing.jpg"
                            alt="steelframing"
                        />
                    </div>
                    <div className={`${utilities.u_margin_bottom_md} shrink flex flex-col w-full  pr-10 mr-10`}>
                        <img
                            className={`${img.icono} ${utilities.u_margin_bottom_sm}`}
                            src="img/iconos/fachada_.png"
                            alt="plafon-ciego"
                        />
                        <div className="shrink w-full pr-10 mr-10">
                            <h2 className={typography.heading5}>
                                Plafones ciegos
                            </h2>
                            <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
                                Con años de experiencia en la industria, hemos completado con éxito numerosos proyectos de plafones ciegos, demostrando nuestra habilidad y compromiso con la excelencia
                            </p>              
                        </div>
                        <img
                            className={`${img.imagenservices} shrink w-full ${utilities.u_margin_bottom_sm}`}
                            src="img/services/hermosos-detalles-informacion-sobre-hoteles.jpg"
                            alt="plafon-ciego"
                        />
                    </div>
                    
                    <div className={`${utilities.u_margin_bottom_md} shrink flex flex-col w-full  pr-10 mr-10`}>
                        <img
                            className={`${img.icono} ${utilities.u_margin_bottom_sm}`}
                            src="img/iconos/plafon.png"
                            alt="steelframing"
                        />
                        <div className="shrink w-full pr-10 mr-10">
                            <h2 className={typography.heading5}>
                                Plafon reticulado
                            </h2>
                            <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
                                Nuestro equipo altamente capacitado se encarga de la instalación precisa y eficiente de sistemas de plafón reticulado, garantizando la durabilidad y estabilidad de la obra
                            </p>              
                        </div>
                        <img
                            className={`${img.imagenservices} shrink w-full ${utilities.u_margin_bottom_sm}`}
                            src="img/services/plafon-reticulado.jpg"
                            alt="plafon-reticulado"
                        />
                    </div>
                    <div className={`${utilities.u_margin_bottom_md} shrink flex flex-col w-full  pr-10 mr-10`}>
                        <img
                            className={`${img.icono} ${utilities.u_margin_bottom_sm}`}
                            src="img/iconos/fachada.png"
                            alt="cajillos-decorativos"
                        />
                        <div className="shrink w-full pr-10 mr-10">
                            <h2 className={typography.heading5}>
                                Plafones decorativos
                            </h2>
                            <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
                                Los plafones son una excelente opción para re decorar tu techo. Atrévete a crear un espacio moderno y fresco con los cajillos decorativos que creamos con la mejor calidad en Palacios Construcciones
                            </p>              
                        </div>
                        <img
                            className={`${img.imagenservices} shrink w-full ${utilities.u_margin_bottom_sm}`}
                            src="img/services/cajillos-decorativos.jpg"
                            alt="cajillos-decorativos"
                        />
                    </div>
                    <div className={`${utilities.u_margin_bottom_md} shrink flex flex-col w-full  pr-10 mr-10`}>
                        <img
                            className={`${img.icono} ${utilities.u_margin_bottom_sm}`}
                            src="img/iconos/lambrines.png"
                            alt="lambrines"
                        />
                        <div className="shrink w-full pr-10 mr-10">
                            <h2 className={typography.heading5}>
                                Lambrines
                            </h2>
                            <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
                                Los lambrines o recubrimientos de muros son para engrosar, aislar o recubrir un muro, para cumplir ciertos requerimientos acústicos o térmicos así como para componer errores en la construcción de muros
                            </p>              
                        </div>
                        <img
                            className={`${img.imagenservices} shrink w-full ${utilities.u_margin_bottom_sm}`}
                            src="img/services/lambrines.jpg"
                            alt="lambrines"
                        />
                    </div>
                    
                </div>    
            </div>
            <h4 className={`${typography.headingspecial2} ${utilities.u_margin_bottom_sm}`}>
                Servicios de muros de tablaroca y plafones
            </h4>
            <p className={`${typography.heading4} ${utilities.u_margin_bottom_md}`}>
            Puedes visitar nuestra galería de imágenes por los servicios que ofrecemos en Palacios Construcciones, en las cuales podrás ver a detalle los proyectos realizados a nuestros clientes
            </p>              
            {showServices}                
        </section> 
    </>
    )
}