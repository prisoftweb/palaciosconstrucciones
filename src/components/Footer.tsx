import footer from '@/app/sass/layout/_footer.module.scss';
import typography from '@/app/sass/base/_typography.module.scss';

export default function Footer(){
  return(
    <>
      <footer className={footer.footer}>
        <div className={footer.logobox}>
          <a href="index.html">
            <img
              src="img/logo-pianomusik-vertical.png"
              alt="logotipo pianomusik"
              //className="logo-box__logobig" />
              className={footer.logobox__logobig} />
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
          <p className={footer.logobox__text}>&copy; Pianomusik 2023</p>
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
            <a href="privacidad-pianomusik.html" className={footer.navfoot__link}
              >Privacidad</a>
          </li>
          <li className={footer.navfoot__item}>
            <a href="cursos-de-musica.html" className={footer.navfoot__link}>Cursos</a>
          </li>
          <li className={footer.navfoot__item}>
            <a
              href="https://www.youtube.com/c/CarmenPalacios"
              target="_blank"
              className={footer.navfoot__link}
              >Marca personal
            </a>
          </li>
          <li className={footer.navfoot__item}>
            <a href="contacto-pianomusik.html" className={footer.navfoot__link}>Contacto</a>
          </li>
        </ul>

        <ul className={footer.navfoot}>
          <li className={footer.navfoot__item}>
            <a
              href="https://www.facebook.com/pianomusik.slp/"
              target="_blank"
              className={footer.navfoot__link}
            >
              <img
                src="img/redes-sociales/facebook.svg"
                alt="facebook pianomusik"
                className={footer.redesociales__icon}
              />
            </a>
          </li>
          <li className={footer.navfoot__item}>
            <a
              href="https://www.instagram.com/pianomusikslp"
              target="_blank"
              className={footer.navfoot__link}
            >
              <img
                src="img/redes-sociales/instagram.svg"
                alt="instagram pianomusik"
                className={footer.redesociales__icon}
              />
            </a>
          </li>
          <li className={footer.navfoot__item}>
            <a
              href="https://www.youtube.com/pianomusikslp"
              target="_blank"
              className={footer.navfoot__link}
            >
              <img
                src="img/redes-sociales/youtube.svg"
                alt="youtube pianomusik"
                className={footer.redesociales__icon}
              />
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}