import { getProjects } from "./api/RouteProyects"
import typography from "@/app/sass/base/_typography.module.scss";
import util from "@/app/sass/base/_utilities.module.scss";
import video from "@/app/sass/components/_video.module.scss";
import footer from '@/app/sass/layout/_footer.module.scss';
import img from "@/app/sass/components/_imagen.module.scss";
import button from '@/app/sass/components/_button.module.scss';
import icontitutext from "@/app/sass/components/_iconotitulotexto.module.scss";
import base from "@/app/sass/base/_base.module.scss";
import ListProyects from "@/components/projects/ListProjects";
import ListSliders from "@/components/sliders/ListSliders";
import Header from "@/components/Header";
import FormContact from "@/components/contact/FormContact";
import Clients from "./clients/page";

export const dynamic = 'force-dynamic';
export default async function Home() {
  let projects;
  try {
    projects = await getProjects();
    if(typeof(projects)==='string'){
      return <h1>{projects}</h1>
    }
  } catch (error) {
    return <h1>Error al consultar proyectos!!</h1>
  }
  return (
    <> 
      <Header />
      <ListSliders />
      <section id="section-nosotros" className={`${util.u_margin_bottom_md} ${util.u_margin_top_lg} ${base.section} flex flex-col`}>
        <div className={`flex flex-col md:flex-row`}>
          <div className="shrink  flex flex-col lg:flex-row w-full lg:w-1/2  pr-10 mr-10">
            <div className="shrink  w-full lg:w-3/5  pl-5 pr-10 mr-10">
              <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm}`}>
                Mision
              </h4>
              <p className={`${typography.heading4} ${util.u_margin_bottom_sm}`}>
              Aplicar de manera efectiva sistemas modernos de acabados y obra civil en la industria de la construcción.
              </p>              
            </div>
            <img
                  className={`${img.imagen} shrink w-full lg:w-2/5 ${util.u_margin_bottom_sm}`}
                  src="img/mision-lg.jpg"
                  alt="Misison"
                />
          </div>
          <div className="shrink  flex flex-col lg:flex-row w-full lg:w-1/2  pr-10 mr-10">
            <div className="shrink  w-full lg:w-3/5  pl-5 pr-10 mr-10">
              <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm}`}>
                Vision
              </h4>
              <p className={`${typography.heading4} ${util.u_margin_bottom_sm}`}>
            Somos líderes en nuestro sector, brindamos confianza y seguridad a nuestros clientes con nuestro personal certificado ya que utilizamos sistemas innovadores alternos en acabados, que nos hacen ser una empresa sostenible.
              </p>
            </div>
            <img
              className={`${img.imagen} shrink w-full lg:w-2/5 ${util.u_margin_bottom_sm}` }
              src="img/vision-lg.jpg"
              alt="Vision"
            />
          </div>
        </div>
        <div className={`${button.button__normal} ${util.u_margin_bottom_sm}`}>
            <a                            
            className={`${button.button__text}`}
            href="/nosotros"              
            >Saber mas...
            </a>
        </div>
        <div className={`flex flex-col-reverse lg:flex-row`}>
          <video className="shrink w-full lg:w-1/2 pl-5 pr-5 rounded-lg" autoPlay muted loop>
            <source src="img/pexels_videos_2048246 (1080p).mp4" type="video/mp4" />          
            El navegador no es compatible
          </video>
          <div className="container flex-1 mt-5 pl-5">
            <h3 className={`${typography.subtitle} ${util.u_margin_top_md_}`}>
              Conocenos
            </h3>
            <h3 className={`${typography.subtitle_thin}`}>
              Palacios construcciones
            </h3>
            <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm}`}>
              Tablaroca, acabados, fachadas, plafones, steel framing y pintura
            </h4>
            <p className={`${typography.heading4} ${util.u_margin_bottom_sm}`}>
              Cualquier servicio de construccion de esta categoria en Palacios Construcciones podemos ayudarte.
            </p>
            <div className={`${button.button__normal} ${util.u_margin_bottom_sm}`}>
              <a                            
                className={`${button.button__text}`}
                href="/nosotros"              
                >Saber mas...
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="section-servicios" className={`${util.u_margin_bottom_md} ${base.section} flex flex-col sm:flex-row`}>
        <div className="shrink  w-full md:w-1/3  pl-5 pr-10 mr-10">
          <h3 className={`${typography.subtitle} ${util.u_margin_top_md_}`}>
            Nuestros
          </h3>
          <h3 className={`${typography.subtitle_thin}`}>
            Servicios
          </h3>
          <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm}`}>
          Servicios de tablaroca y acabados
          </h4>
          <h4 className={`${typography.heading4} ${util.u_margin_bottom_sm}`}>
          Servicios de acabados de la construccion en San Luis Potosi y en cualquier estado de la republica.
            <br /><br />Construccion de muros de tablaroca, durock, plafones ciegos, plafones reticulados y fachadas estructurales ademas de pisos, pasta texturizada y pintura industrial y residencial, etc.
            <br /><br />Tenemos precios a su capacidad y nos enfocamos
            en acabados profesional y duraderos, usando materiales de calidad.
          </h4>
          <div className={`${button.button__normal} ${util.u_margin_bottom_sm}`}>
            <a                            
              className={`${button.button__text}`}
              href="/nosotros"              
              >Saber mas...
            </a>
          </div>
        </div>
        <div className="shrink w-full md:w-2/3 grid gap-12 justify-center sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 mt-10 px-5">
          {/* <div className="servicios__carac01y02"> */}
          <div className={icontitutext.iconotitulotexto}>
            <a className="asinstyle" href="/tablaroca">
              <img
                className={icontitutext.iconotitulotexto__imagen}
                src="img/services/tablaroca.jpg"
                alt="Tablaroca"
              />
            </a>
            <a className="asinstyle" href="/tablaroca">
              <h2 className={`${typography.heading5} `}>Tablaroca</h2>
            </a>
            <h4 className={typography.heading4}>
              Servicios de muros de tablaroca y durock, fachadas estructurales, steel framing, limpieza y lavado de muros tilt-up  son algunos de nuestros servicios
            </h4>
            <div className={`${button.button__normal} ${util.u_margin_bottom_sm}`}>
              <a                            
                className={`${button.button__text}`}
                href="/tablaroca"              
                >Saber mas...
              </a>
            </div>
          </div>
          <div className={icontitutext.iconotitulotexto}>
            <a className="asinstyle" href="/finishes">
              <img
                className={icontitutext.iconotitulotexto__imagen}
                src="img/services/finishes.jpg"
                alt="Acabados"
              />
            </a>
            <a className="asinstyle" href="/finishes">
              <h2 className={`${typography.heading5} `}>Acababados</h2>
            </a>
            <h4 className={typography.heading4}>
            Acabados en general en remodelaciones, pasta, texturizados, instalación de pisos y muros cerámicos, instalación de pisos epóxicos e instalación de piso laminado y madera.
            </h4>
            <div className={`${button.button__normal} ${util.u_margin_bottom_sm}`}>
              <a                            
                className={`${button.button__text}`}
                href="/finishes"              
                >Saber mas...
              </a>
            </div>
          </div>
          
          {/* <div className="servicios__carac01y02"> */}
          <div className={icontitutext.iconotitulotexto}>
            <a className="asinstyle" href="/ceilings">
              <img
                className={icontitutext.iconotitulotexto__imagen}
                src="img/services/ceiling.jpg"
                alt="Plafones"
              />
            </a>
            <a className="asinstyle" href="/ceilings">
              <h2 className={`${typography.heading5} `}>Plafones</h2>
            </a>
            <h4 className={typography.heading4}>
              Servicios de lambrines, plafones ciegos, plafones decorativos, plafones reticulados, fachadas estructurales y mas.
            </h4>
            <div className={`${button.button__normal} ${util.u_margin_bottom_sm}`}>
              <a                            
                className={`${button.button__text}`}
                href="/ceilings"              
                >Saber mas..
              </a>
            </div>
          </div>

          <div className={icontitutext.iconotitulotexto}>
            <a className="asinstyle" href="/paintings">
              <img
                className={icontitutext.iconotitulotexto__imagen}
                src="img/services/painting.jpg"
                alt="Pintura"
              />
            </a>

            <a className="asinstyle" href="/paintings">
              <h2 className={`${typography.heading5} `}>Pintura</h2>
            </a>

            <h4 className={typography.heading4}>
              Servicios de pintura en San Luis Potosi, pintura en naves industriales, pintura epóxica, pintura de aceite y pintura de agua para vivienda residencial y oficinas
            </h4>
            <div className={`${button.button__normal} ${util.u_margin_bottom_sm}`}>
              <a                            
                className={`${button.button__text}`}
                href="/paintings"              
                >Saber mas...
              </a>
            </div>
            
          </div>        
        </div>
      </section>
      <section id="section-proyectos" className={`p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 ${base.section}`}>
        <h3 className={`${typography.subtitle} ${util.u_margin_top_md_}`}>
          Proyectos
        </h3>
        <h3 className={`${typography.subtitle_thin}`}>
          Obras de construccion
        </h3>
        <ListProyects projects={projects} />
      </section>
      <section id="section-clientes" className={`p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 ${base.section}`}>
        <h3 className={`${typography.subtitle} ${util.u_margin_top_md_}`}>
          Nuestros
        </h3>
        <h3 className={`${typography.subtitle_thin}`}>
          Clientes
        </h3>      
        <h4 className={typography.heading4}>
          Nuestros clientes satisfechos con nuestros servicios de construccion
        </h4>  
        <Clients />
      </section>
      <section id="section-contactanos" className={`p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 ${base.section}`}>
        {/* <h3 className={`${typography.subtitle} ${util.u_margin_top_md_}`}>
          Contactanos
        </h3>
        <h3 className={`${typography.subtitle_thin} ${util.u_margin_bottom_sm}`}>
          Dejanos tus datos
        </h3>         */}
        <div className={`${util.u_margin_bottom_md} flex flex-col-reverse  sm:flex-row`}>
          {/* <div className="shrink  w-full flex justify-center md:w-1/3 sm:mt-32 mt-5 sm:mt-0  pl-5 pr-10 mr-10"> */}
          <div className="shrink  w-full flex justify-center md:w-1/3 mt-5 sm:mt-10  pl-5 pr-10 mr-10">
            <div className={footer.logobox}>
                <a href="" className={footer.logobox__logohead}>
                    <img
                    srcSet="img/logo-palaciosconstrucciones-principal.png 1x, logo-palaciosconstrucciones-principal.png 2x"
                    alt="logotipo palacios construcciones"
                    className={footer.logobox__logohuge}
                    />
                </a>
                <br/>
                <p className={footer.logobox__text}>Cda. Monreal #120</p>
                <p className={footer.logobox__text}>Col. Gral. I Martinez</p>
                <p className={footer.logobox__text}>San Luis Potosi, S.L.P.</p>
                <p className={footer.logobox__text}>Mexico, CP. 78360</p>
                {/* <p className="logo-box__copy"> */}
                <div className={`${button.button__normal} ${util.u_margin_bottom_sm} mt-5`}>
                    <a                            
                    className={`${button.button__text}`}
                    href="https://api.whatsapp.com/send?phone=524442422520&text=Hola"
                    target="_blank"
                    >444-242-2520
                    </a>
                </div>          
            </div>
        </div>
        <div className="shrink  w-full md:w-2/3  pr-10">
          <h3 className={`${typography.subtitle} ${util.u_margin_top_md_}`}>
            Contactanos
          </h3>
          <h3 className={`${typography.subtitle_thin} ${util.u_margin_bottom_sm}`}>
            Dejanos tus datos
          </h3> 
          <FormContact />
        </div>
        </div>
      </section>
    </>
  )
}
