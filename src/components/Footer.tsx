import footer from '@/app/sass/layout/_footer.module.scss';
import typography from '@/app/sass/base/_typography.module.scss';

export default function Footer(){
  return(
    <>
      <footer className={footer.footer}>
        <div className={footer.logobox}>
          <a href="index.html" className={footer.logobox__logohead}>
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
        <ul className={footer.navfoot}>
          {/* <li className="navfoot__item"> */}
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
        </ul>

        <ul className={footer.navfoot}>
          <li className={footer.navfoot__item}>
            <a
              href="https://www.facebook.com/"
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
              href="https://www.instagram.com"
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
              href="https://www.youtube.com"
              target="_blank"
              className={footer.navfoot__link}
            >
              <img
                src="img/redes-sociales/youtube.svg"
                alt="youtube palacios construcciones"
                className={footer.redesociales__icon}
              />
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}