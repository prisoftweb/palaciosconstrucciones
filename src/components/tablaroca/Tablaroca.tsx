
import typography from "@/app/sass/base/_typography.module.scss";
import ittc from "@/app/sass/components/_imagentitulotextocard.module.scss";
import utilities from "@/app/sass/base/_utilities.module.scss";
import hg from "@/app/sass/layout/_headergrid.module.scss";
import img from  "@/app/sass/components/_imagen.module.scss";
import base from "@/app/sass/base/_base.module.scss";
import SliderServices from "../ceillings/SliderServices";
import ViewSlider from "../sliders/ViewSlider";
import { getServices } from '@/app/api/RouteServices';
import { getSliders } from "@/app/api/RouteSliders";

export default async function Tablaroca(){
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
    
    
    return (
        <>
        {slider}
        <section className={`${base.section} ${utilities.u_margin_top_md2}`}>
            <></>
            <h3 className={`${typography.heading4}`}>.</h3>
            <h3 className={`${typography.subtitle} ${utilities.u_margin_top_md_}`}>
                Tablaroca
            </h3>
            <h3 className={`${typography.subtitle_thin}`}>
                Todo tipo de muros
            </h3>        
            <h4 className={`${typography.headingspecial2} ${utilities.u_margin_bottom_sm}`}>
                Muros de tablaroca, muros de durock, fahcadas estructurales en S.L.P. y Mexico
            </h4>
            <p className={`${typography.heading4} ${utilities.u_margin_bottom_md}`}>
                Nuestros servicios de tablaroca se detallan en los siguientes servicios:
            </p>              
            <div className={`flex flex-col lg:flex-row ${utilities.u_margin_bottom_md}`}>
                <div className="shrink  flex flex-col lg:flex-row w-full lg:w-1/3  pr-10 mr-10" >
                    <div className={`${utilities.u_margin_bottom_md} shrink w-full grid gap-20 md:gap-3 justify-center sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 mt-40`}>
                        <p className={`${typography.heading5} ${typography.heading5__light} ${utilities.u_margin_bottom_sm} col-start-1 col-end-3 row-start-2 justify-self-center z-10`}>
                            Mayor durabilidad
                        </p>
                        <p className={`${typography.heading5} ${typography.heading5__light} ${utilities.u_margin_bottom_sm} col-start-2 row-start-3 justify-self-left z-10`}>
                            Fachadas modernas
                        </p>
                        <img
                        className={`${img.imagenvertical} shrink w-full col-start-1 col-span-2 row-start-2 row-span-3 ${utilities.u_margin_bottom_sm}`}
                        src="img/services/fachaleta.jpg"
                        alt="Fachada principal"
                    />
                        <p className={`${typography.heading5} ${typography.heading5__light} ${utilities.u_margin_bottom_sm} col-start-1 row-start-3 justify-self-center z-10`}>
                            Mejores costos
                        </p>
                        <p className={`${typography.heading5} ${typography.heading5__light} ${utilities.u_margin_bottom_sm} col-start-2 row-start-4 justify-self-left z-10`}>
                            Menor mantenimiento
                        </p>
                        <p className={`${typography.heading5} ${typography.heading5__light} ${utilities.u_margin_bottom_sm} col-start-1 row-start-4 justify-self-center z-10`}>
                            Trabajo garantizado
                        </p>
                    </div>
                    
                </div>
                <div className={`${utilities.u_margin_bottom_md} shrink w-full lg:w-2/3 grid gap-20 md:gap-3 justify-center sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 mt-10`}>            
                    <div className="shrink flex flex-col w-full  pr-10 mr-10">
                        <img
                            className={`${img.icono} ${utilities.u_margin_bottom_sm}`}
                            src="img/iconos/tablaroca.png"
                            alt="tablaroca"
                        />
                        <div className="shrink w-full pr-10 mr-10">
                            <h2 className={typography.heading5}>
                                Muros de tablaroca
                            </h2>
                            <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
                                Construcción de todo tipo muros de Tablaroca para la industria, comercial y particular
                            </p>              
                        </div>
                        <img
                                className={`${img.imagen} shrink w-full ${utilities.u_margin_bottom_sm}`}
                                src="img/services/tablarocamuro.jpg"
                                alt="tablaroca muro"
                            />
                    </div>
                    <div className="shrink flex flex-col w-full  pr-10 mr-10">
                        <img
                            className={`${img.icono} ${utilities.u_margin_bottom_sm}`}
                            src="img/iconos/durock.png"
                            alt="durock"
                        />
                        <div className="shrink w-full pr-10 mr-10">
                            <h2 className={typography.heading5}>
                                Muros de durock
                            </h2>
                            <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
                            Construcción de todo tipo muros de durock para interior y exterior
                            </p>              
                        </div>
                        <img
                            className={`${img.imagen} shrink w-full ${utilities.u_margin_bottom_sm}`}
                            src="img/services/durock.jpg"
                            alt="Durock"
                        />
                    </div>
                    <div className="shrink flex flex-col w-full  pr-10 mr-10">
                        <img
                            className={`${img.icono} ${utilities.u_margin_bottom_sm}`}
                            src="img/iconos/fachada.png"
                            alt="fachada"
                        />
                        <div className="shrink w-full pr-10 mr-10">
                            <h2 className={typography.heading5}>
                                Fachadas estructurales
                            </h2>
                            <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
                                Realizamos una gran variedad de tipo de fachadas estructurales de durock para el exterior
                            </p>              
                        </div>
                        <img
                            className={`${img.imagen} shrink w-full ${utilities.u_margin_bottom_sm}`}
                            src="img/services/fachadas.jpg"
                            alt="Fachadas"
                        />
                    </div>
                    <div className="shrink flex flex-col w-full  pr-10 mr-10">
                        <img
                            className={`${img.icono} ${utilities.u_margin_bottom_sm}`}
                            src="img/iconos/steelframing.png"
                            alt="steelframing"
                        />
                        <div className="shrink w-full pr-10 mr-10">
                            <h2 className={typography.heading5}>
                                Steelframe
                            </h2>
                            <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
                            Construccion estilo steelframing para toda la construccion de muros
                            </p>              
                        </div>
                        <img
                            className={`${img.imagen} shrink w-full ${utilities.u_margin_bottom_sm}`}
                            src="img/services/steelframing.jpg"
                            alt="steelframing"
                        />
                    </div>
                </div>    
            </div>
            <h4 className={`${typography.headingspecial2} ${utilities.u_margin_bottom_sm}`}>
                Galeria de imagenes de muros de tablaroca y durock
            </h4>
            <p className={`${typography.heading4} ${utilities.u_margin_bottom_md}`}>
                Puedes visiatar nuestra galeria de imagenes, en las cuales podras ver a detalle algunos de los proyectos realizados a nuestros clientes
            </p>              
                        
        </section> 
        {showServices}
    </>
    )
}