import footer from '@/app/sass/layout/_footer.module.scss';
import typography from '@/app/sass/base/_typography.module.scss';

export default function Footer(){
  return (
    <>
      <footer className={footer.footer}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={`${footer.wave} invisible md:visible`}>
        <path fill="#0075C9" fillOpacity="1" d="M0,96L34.3,96C68.6,96,137,96,206,85.3C274.3,75,343,53,411,42.7C480,32,549,32,617,64C685.7,96,754,160,823,192C891.4,224,960,224,1029,192C1097.1,160,1166,96,1234,90.7C1302.9,85,1371,139,1406,165.3L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">      
        </path>
      </svg>
        <div className={footer.logobox}>
          <a href="/" className={footer.logobox__logohead}>
            <img
              srcSet="img/logo-palaciosconstrucciones-isologo.svg 1x, logo-palaciosconstrucciones-isologo.svg 2x"
              alt="logotipo palacios construcciones"
              className={footer.logobox__logobig}
            />
          </a>
          <br/>
          <a
            //className="apersonalizado"
            className={typography.apersonalizado}
            href="https://api.whatsapp.com/send?phone=524442422520&text=Hola"
            target="_blank"
            >444 242 2520
          </a>
          <br/>
          <a className={typography.apersonalizado} href="mailto:palaciostablaroca@hotmail.com"
            >palaciostablaroca@hotmail.com
          </a>
          <p className={footer.logobox__text}>&copy; Palaciosconstrucciones 2024</p>
          {/* <p className="logo-box__copy"> */}
          <p className={footer.logobox__copy}>
            <a className={footer.logobox__copy} href="https://prisoft.com.mx/" target="_blank"
              >Creado por Prisoft
            </a>
          </p>
        </div>
        {/* <ul className={footer.navfoot}>          
          <li className={footer.navfoot__item}>
            <a href="privacidad.html" className={footer.navfoot__link}
              >Privacidad</a>
          </li>
          <li className={footer.navfoot__item}>
            <a href="proyectos.html" className={footer.navfoot__link}>Obras</a>
          </li>
          <li className={footer.navfoot__item}>
            <a
              href="vivienda.html"
              target="_blank"
              className={footer.navfoot__link}
              >Vivienda
            </a>
          </li>
          <li className={footer.navfoot__item}>
            <a href="contacto.html" className={footer.navfoot__link}>Contacto</a>
          </li>
        </ul> */}
        <div className={footer.saltolinea}>
          <div className={footer.navbox2__divider_text}>Servicios</div>
          <ul className={footer.navfoot}>
            <li className={footer.navfoot__item}>
              <a href="/paintings" className={footer.navfoot__link}
              >Pintura</a>
            </li>
            <li className={footer.navfoot__item}>
              <a href="/wallsyceilings" className={footer.navfoot__link}
              >Muros</a>
            </li>
            <li className={footer.navfoot__item}>
              <a href="/frontages" className={footer.navfoot__link}
                >Fachadas</a
              >
            </li>
            <li className={footer.navfoot__item}>
              <a href="/finishes" className={footer.navfoot__link}
                >Acabados</a
              >
            </li>
          </ul>
        </div>
        <div className={footer.saltolinea}>
          <div className={footer.navbox2__divider_text}>Palacios</div>
          <ul className={footer.navfoot}>
            <li className={footer.navfoot__item}>
              <a href="/about" className={footer.navfoot__link}
              >Nosotros</a>
            </li>
            <li className={footer.navfoot__item}>
              <a href="/services" className={footer.navfoot__link}
              >Servicios</a>
            </li>
            <li className={footer.navfoot__item}>
              <a href="/projects" className={footer.navfoot__link}
                >Proyectos</a
              >
            </li>
            <li className={footer.navfoot__item}>
              <a href="/contact" className={footer.navfoot__link}
                >Contáctanos</a
              >
            </li>
          </ul>
        </div>
        <div className={footer.saltolinea}>
        <div className={footer.navbox2__divider_text}>Redes</div>
        <ul className={footer.navfoot}>
          <li className={footer.navfoot__item}>
            <a
              href="https://www.facebook.com/palaciosconstruccionesoficial"
              target="_blank"
              className={footer.navfoot__link}
            >
              <img
                src="img/redes-sociales/facebook.svg"
                alt="facebook palacios construcciones"
                className={footer.redesociales__icon}
              />
            </a>
          </li>
          <li className={footer.navfoot__item}>
            <a
              href="http://linkedin.com/company/palaciosconstruccionesoficial/"
              target="_blank"
              className={footer.navfoot__link}
            >
              <img
                src="img/redes-sociales/linkedin.svg"
                alt="linkedin palacios construcciones"
                className={footer.redesociales__icon}
              />
            </a>
          </li>
          <li className={footer.navfoot__item}>
            <a
              href="http://instagram.com/palaciosconstruccionesoficial"
              target="_blank"
              className={footer.navfoot__link}
            >
              <img
                src="img/redes-sociales/instagram.svg"
                alt="instagram palacios construcciones"
                className={footer.redesociales__icon}
              />
            </a>
          </li>
          <li className={footer.navfoot__item}>
            <a
              href="https://www.tiktok.com/@palaciosconstrucciones"
              target="_blank"
              className={footer.navfoot__link}
            >
              <img
                src="img/redes-sociales/tiktok.svg"
                alt="tiktok palacios construcciones"
                className={footer.redesociales__icon}
              />
            </a>
          </li>
         
        </ul>
        </div>        
      </footer>
    </>
  )
}