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
import Balancer from "react-wrap-balancer";

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
      <ListSliders segment="index" />
      <section id="section-nosotros" className={`${util.u_margin_bottom_md} ${util.u_margin_top_lg} ${base.section} flex flex-col`}>
        <div className={`flex flex-col md:flex-row`}>
          <div className="shrink  flex flex-col lg:flex-row w-full lg:w-1/2   mr-10">
            <div className="shrink  w-full lg:w-3/5   mr-10">
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
          <div className="shrink  flex flex-col lg:flex-row w-full lg:w-1/2   mr-10">
            <div className="shrink  w-full lg:w-3/5   mr-10">
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
            href="/about"              
            >Saber mas...
            </a>
        </div>
        <div className={`flex flex-col-reverse lg:flex-row justify-center`}>
          <video className="shrink w-full lg:w-1/2 pr-5 rounded-lg" autoPlay muted loop>
            <source src="img/pexels_videos_2048246 (1080p).mp4" type="video/mp4" />          
            El navegador no es compatible
          </video>
          <div className="container flex-1 mt-5 justify-self-center">
            {/* <h3 className={`${typography.subtitle} ${util.u_margin_top_md_}`}>
              Conocenos
            </h3>
            <h3 className={`${typography.subtitle_thin}`}>
              Palacios construcciones
            </h3> */}
            <h1
              className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-6xl font-bold tracking-[-0.02em] text-transparent opacity-1 drop-shadow-sm md:text-7xl md:leading-[5rem]"

          >
              <Balancer>Conoce los servicios de Palacios Construcciones</Balancer>          
            </h1>
            <p
              className={`${typography.heading4} ${typography.heading4__center} ${util.u_margin_bottom_sm} mt-10 animate-fade-up text-center`} style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
            >
              <Balancer>
                Cualquier servicio de construccion de esta categoria en Palacios Construcciones podemos ayudarte.
                  <a href="https://api.whatsapp.com/send?phone=5244424225200&text=Buen dia, puse una opinion en el proyecto"
                  target="_blank">  ¡Gracias!  </a>
              </Balancer>
            </p>
            <h4 className={`${typography.headingspecial2} ${typography.headingspecial2__center} ${util.u_margin_bottom_sm}`}>
              Tablaroca, acabados, fachadas, plafones, steel framing y pintura
            </h4>
            {/* <p className={`${typography.heading4} ${util.u_margin_bottom_sm}`}>
              Cualquier servicio de construccion de esta categoria en Palacios Construcciones podemos ayudarte.
            </p> */}
            <div className={`${button.button__normal} ${util.u_margin_bottom_sm} justify-self-center`}>
              <a                            
                className={`${button.button__text}`}
                href="/services"              
                >Saber mas...
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="section-servicios" className={`${util.u_margin_bottom_md} ${base.section} flex flex-col sm:flex-row`}>
        <div className="shrink  w-full md:w-1/3   mr-10">
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
              href="/services"              
              >Saber mas...
            </a>
          </div>
        </div>
        <div className="shrink w-full md:w-2/3 grid gap-12 justify-center sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 mt-10 px-5">
          {/* <div className="servicios__carac01y02"> */}
          <div className={icontitutext.iconotitulotexto}>
            <a className="asinstyle" href="/wallsyceilings">
              <img
                className={`${icontitutext.iconotitulotexto__imagen} rounded-full`}
                src="img/services/tablaroca.jpg"
                alt="Tablaroca"
              />
            </a>
            <a className="asinstyle" href="/wallsyceilings">
              <h2 className={`${typography.heading5} `}>Muros y plafones</h2>
            </a>
            <h4 className={typography.heading4}>
              Servicios de muros de tablaroca y durock, steel framing, lambrines, plafones ciegos, plafones decorativos, plafones reticulados ademas de limpieza y lavado de muros tilt-up.
            </h4>
            <div className={`${button.button__normal} ${util.u_margin_bottom_sm}`}>
              <a                            
                className={`${button.button__text}`}
                href="/wallsyceilings"              
                >Saber mas...
              </a>
            </div>
          </div>
          <div className={icontitutext.iconotitulotexto}>
            <a className="asinstyle" href="/finishes">
              <img
                className={`${icontitutext.iconotitulotexto__imagen} rounded-full`}
                src="img/services/finishes.jpg"
                alt="Acabados"
              />
            </a>
            <a className="asinstyle" href="/finishes">
              <h2 className={`${typography.heading5} `}>Acabados</h2>
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
            <a className="asinstyle" href="/frontages">
              <img
                className={`${icontitutext.iconotitulotexto__imagen} rounded-full`}
                src="img/services/frontages.jpg"
                alt="Fachadas"
              />
            </a>
            <a className="asinstyle" href="/frontages">
              <h2 className={`${typography.heading5} `}>Fachadas</h2>
            </a>
            <h4 className={typography.heading4}>
              Realizamos una gran variedad de fachadas estructurales para la industria y comercios, con materiales durock y glassrey para el exterior, resistente a la intemperie  
            </h4>
            <div className={`${button.button__normal} ${util.u_margin_bottom_sm}`}>
              <a                            
                className={`${button.button__text}`}
                href="/frontages"              
                >Saber mas..
              </a>
            </div>
          </div>

          <div className={icontitutext.iconotitulotexto}>
            <a className="asinstyle" href="/paintings">
              <img
                className={`${icontitutext.iconotitulotexto__imagen} rounded-full`}
                src="img/services/painting.jpg"
                alt="Pintura"
              />
            </a>

            <a className="asinstyle" href="/paintings">
              <h2 className={`${typography.heading5} `}>Pintura</h2>
            </a>

            <h4 className={typography.heading4}>
              Servicios de pintura aplicando diferentes metodos para pintar, aplicamos una gran variedad de pinturas en naves industriales, pisos, vivienda residencial y oficinas
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
        {/* <h3 className={`${typography.subtitle} ${util.u_margin_top_md_}`}>
          Proyectos
        </h3>
        <h3 className={`${typography.subtitle_thin}`}>
          Obras de construccion
        </h3>
        <p className={`${typography.heading4} ${util.u_margin_bottom_md} mt-4`}>
          ¡Descubre la excelencia en cada proyecto! en Palacios Construcciones estamos emocionados de presentarte nuestro portafolio de obras de construcción, un testimonio visual de nuestra dedicación, calidad y habilidades en la transformación de espacios. A continuación, te presentamos algunos de nuestros proyectos más destacados
        </p> */}
        <div className="flex-1 mt-5 justify-self-center">

          <h1
              className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-6xl font-bold tracking-[-0.02em] text-transparent opacity-1 drop-shadow-sm md:text-7xl md:leading-[5rem]"

          >
              <Balancer>Conoce nuestras Obras de construccion</Balancer>          
          </h1>
          <p
            className={`${typography.heading4} ${typography.heading4__center} ${util.u_margin_bottom_sm} mt-10 animate-fade-up text-center`} style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
          >
            <Balancer>
              ¡Descubre la excelencia en cada proyecto! en Palacios Construcciones estamos emocionados de presentarte nuestro portafolio de obras de construcción, un testimonio visual de nuestra dedicación, calidad y habilidades en la transformación de espacios. A continuación, te presentamos algunos de nuestros proyectos más 
                <a href="https://api.whatsapp.com/send?phone=5244424225200&text=Buen dia, puse una opinion en el proyecto"
                target="_blank"> destacados </a>
            </Balancer>
          </p>
          <h4 className={`${typography.headingspecial2} ${typography.headingspecial2__center} ${util.u_margin_bottom_sm}`}>
              En todos los segmentos tanto particular como industrial
          </h4>
        </div>
        <ListProyects projects={projects} />
      </section>
      <section id="section-clientes" className={`p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 ${base.section}`}>
        <h3 className={`${typography.subtitle} ${util.u_margin_top_md_}`}>
          Nuestros
        </h3>
        <h3 className={`${typography.subtitle_thin}`}>
          Clientes
        </h3>      
        <div className="shrink flex flex-col lg:flex-row w-full">
          <p className={`${typography.heading4} ${util.u_margin_bottom_md} mt-4 shrink  w-full lg:w-1/2 mr-12`}>
            Te invitamos a explorar más sobre nuestra colaboración con estas destacadas constructoras y otros proyectos que han dejado una marca distintiva en la industria de la construcción. Estamos comprometidos con la excelencia y ansiosos por ser tu socio en futuros proyectos innovadores.
          </p>
          <p className={`${typography.heading4} ${util.u_margin_bottom_md} shrink  w-full lg:w-1/2 mt-4`}>
            <a className={`${typography.heading4} ${typography.heading4__underline}`} href="/contact"
                > Contáctanos
              </a> para discutir cómo podemos contribuir al éxito de tu próxima obra. ¡en Palacios Construcciones cada proyecto es una oportunidad para destacarnos!
          </p>        
        </div>
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
          {/* <div className="shrink  w-full flex justify-center md:w-1/3 sm:mt-32 mt-5 sm:mt-0   mr-10"> */}
          <div className="shrink  w-full flex justify-center md:w-1/3 mt-5 sm:mt-10  mr-10">
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
        <div className="shrink  w-full md:w-2/3  ">        
          <div className="flex-1 mt-5 justify-self-center">
            <h1
                className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-6xl font-bold tracking-[-0.02em] text-transparent opacity-1 drop-shadow-sm md:text-7xl md:leading-[5rem]"
            >
                <Balancer>¡Ponte en Contacto con Nosotros!</Balancer>          
            </h1>
            <p
              className={`${typography.heading4} ${typography.heading4__center} ${util.u_margin_bottom_sm} mt-10 animate-fade-up text-center`} style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
            >
              <Balancer>
                ¿Tienes alguna pregunta, comentario o sugerencia? ¡Estamos aquí para ayudarte! No dudes en ponerte en contacto con nosotros a través del siguiente formulario:
              </Balancer>
            </p>
            <h4 className={`${typography.headingspecial2} ${typography.headingspecial2__center} ${util.u_margin_bottom_sm}`}>
            Dejanos tus datos!
            </h4>
          </div>
          {/* <h3 className={`${typography.subtitle} ${util.u_margin_top_md_}`}>
            Contáctanos
          </h3>
          <h3 className={`${typography.subtitle_thin} ${util.u_margin_bottom_sm}`}>
            Dejanos tus datos
          </h3>  */}
          <FormContact />
        </div>
        </div>
      </section>
    </>
  )
}
