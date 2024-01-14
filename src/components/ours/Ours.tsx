import typography from "@/app/sass/base/_typography.module.scss";
import ittc from "@/app/sass/components/_imagentitulotextocard.module.scss";
import utilities from "@/app/sass/base/_utilities.module.scss";
import hg from "@/app/sass/layout/_headergrid.module.scss";
import img from  "@/app/sass/components/_imagen.module.scss";
import base from "@/app/sass/base/_base.module.scss";

export default function Ours(){
    return (
        <>
        <img
            className={hg.headergrid__imagen}
            srcset="img/personal-team-palacios.jpg 1x, img/personal-team-palacios.jpg 2x"
            alt="Personal de palacios construcciones"
        />
        <section className={base.section}>
            <></>
            <h3 className={`${typography.heading4}`}>.</h3>
            <h3 className={`${typography.subtitle} ${utilities.u_margin_top_md_}`}>
                Nuestra
            </h3>
            <h3 className={`${typography.subtitle_thin}`}>
                Historia
            </h3>        
            <h4 className={`${typography.headingspecial2} ${utilities.u_margin_bottom_sm}`}>
                Mas de 15 AÑOS de experiencia
            </h4>
            <p className={`${typography.heading4} ${utilities.u_margin_bottom_md}`}>
                Desde el año 2008 incursionamos en el mundo de la construcción realizando muros de tablaroca hasta hacer mas de 20 servicios relacionados con la construcción industrial, comercial y particular
            </p>              
            <div className={`flex flex-col md:flex-row ${utilities.u_margin_bottom_md}`}>
                <div className="shrink  flex flex-col lg:flex-row w-full lg:w-1/2  pr-10 mr-10">
                    <div className="shrink  w-full lg:w-3/5  pl-5 pr-10 mr-10">
                        <h3 className={`${typography.subtitle} ${utilities.u_margin_top_md_}`}>
                            Nuestra
                        </h3>
                        <h3 className={`${typography.subtitle_thin}`}>
                            Mision
                        </h3>        
                        <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
                            Aplicar de manera efectiva sistemas modernos de acabados y obra civil en la industria de la construcción.
                        </p>              
                    </div>
                    <img
                            className={`${img.imagen} shrink w-full lg:w-2/5 ${utilities.u_margin_bottom_sm}`}
                            src="img/mision-lg.jpg"
                            alt="Misison"
                        />
                </div>
                <div className="shrink  flex flex-col lg:flex-row w-full lg:w-1/2  pr-10 mr-10">
                    <div className="shrink  w-full lg:w-3/5  pl-5 pr-10 mr-10">
                        <h3 className={`${typography.subtitle} ${utilities.u_margin_top_md_}`}>
                            Vision
                        </h3>
                        <h3 className={`${typography.subtitle_thin}`}>
                            2026
                        </h3>        
                        <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
                    Somos líderes en nuestro sector, brindamos confianza y seguridad a nuestros clientes con nuestro personal certificado ya que utilizamos sistemas innovadores alternos en acabados, que nos hacen ser una empresa sostenible.
                        </p>
                    </div>
                    <img
                        className={`${img.imagen} shrink w-full lg:w-2/5 ${utilities.u_margin_bottom_sm}` }
                        src="img/vision-lg.jpg"
                        alt="Vision"
                    />
                </div>
            </div>
        </section> 
        <section className={base.section}>
            <div>
                <h3 className={`${typography.heading4}`}>.</h3>
                <h3 className={`${typography.subtitle} ${utilities.u_margin_top_md_}`}>
                    Nuestros
                </h3>
                <h3 className={`${typography.subtitle_thin}`}>
                    Valores
                </h3>        
                <h4 className={`${typography.headingspecial2} ${utilities.u_margin_bottom_sm}`}>
                    Valores de Palacios Construcciones
                </h4>

                <p className={`${typography.heading4} ${utilities.u_margin_bottom_sm}`}>
                    Tenemos valores bien definidos y comportamientos que apoyan la Misión, Visión y Objetivos
                </p>              
            </div>
            <div className="shrink w-full  grid gap-12 justify-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 mt-10">
                <div className={`${ittc.imagentitulotextocard} `}>
                    <img
                        className={ittc.imagentitulotextocard__imagen}
                        src="img/valores/compromiso.jpg"
                        alt="Compromiso valores"
                    />
                    <div>
                        <h2 className={typography.heading5}>Compromiso</h2>
                        <h4 className={typography.heading4}>
                            Cuáles son tus objetivos al optimizar tu sitio web. 
                        </h4>
                    </div>
                </div>
                <div className={ittc.imagentitulotextocard}>
                    <img
                        className={ittc.imagentitulotextocard__imagen}
                        src="img/valores/integridad.jpg"
                        alt="Integridad valores"
                    />
                    <div>
                        <h2 className={typography.heading5}>Integridad</h2>
                        <h4 className={typography.heading4}>
                            Ser congruente entre lo que se dice y lo que se hace.
                            Tomar decisiones basados en los valores de la empresa.
                        </h4>
                    </div>
                </div>
                <div className={ittc.imagentitulotextocard}>
                    <img
                        className={ittc.imagentitulotextocard__imagen}
                        src="img/valores/honestidad.jpg"
                        alt="Honestidad valores"
                    />
                    <div>
                        <h2 className={typography.heading5}>Honestidad</h2>
                        <h4 className={typography.heading4}>
                            Predicar con el ejemplo.
                            Influir de manera positiva en las demas personas
                        </h4>
                    </div>
                </div>
                <div className={`${ittc.imagentitulotextocard} `}>
                    <img
                        className={ittc.imagentitulotextocard__imagen}
                        src="img/valores/liderazgo.jpg"
                        alt="Liderazgo valores"
                    />
                    <div>
                        <h2 className={typography.heading5}>Liderazgo</h2>
                        <h4 className={typography.heading4}>
                            Predicar con el ejemplo.
                            Influir de manera positiva en las demas personas.
                        </h4>
                    </div>
                </div>
                <div className={ittc.imagentitulotextocard}>
                    <img
                        className={ittc.imagentitulotextocard__imagen}
                        src="img/valores/trabajo-equipo.jpg"
                        alt="Trabajo en equipo valores"
                    />
                    <div>
                        <h2 className={typography.heading5}>Trabajo en equipo</h2>
                        <h4 className={typography.heading4}>
                            Aceptar otras ideas
                            Llegar a acuerdos en común
                        </h4>
                    </div>
                </div>
                <div className={ittc.imagentitulotextocard}>
                    <img
                        className={ittc.imagentitulotextocard__imagen}
                        src="img/valores/responsabilidad.jpg"
                        alt="Responsabilidad valores"
                    />
                    <div>
                        <h2 className={typography.heading5}>Responsabilidad</h2>
                        <h4 className={typography.heading4}>
                            Seguir las políticas organizacionales
                            Cumplir con los compromisos personales y de la empresa.
                        </h4>
                    </div>
                </div>
                <div className={ittc.imagentitulotextocard}>
                    <img
                        className={ittc.imagentitulotextocard__imagen}
                        src="img/valores/mejora-continua.jpg"
                        alt="Mejora continua valores"
                    />
                    <div>
                        <h2 className={typography.heading5}>Mejora continua</h2>
                        <h4 className={typography.heading4}>
                            Aceptar retos e ideas de otros
                            No conformarse con lo alcanzado, siempre buscar más
                        </h4>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}