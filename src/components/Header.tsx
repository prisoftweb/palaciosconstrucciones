import styles from '@/app/sass/layout/_header.module.scss';
import menu from '@/app/sass/layout/_nav.module.scss';
import menNav from '@/app/sass/layout/_menav.module.scss';
import footer from '@/app/sass/layout/_footer.module.scss';
import vinietamenu from '@/app/sass/layout/vinietamenu.module.scss';
import NavBurguer from './NavBurguer';

export default function Header(){

  return(
    <>
      {/* <img srcSet="next.svg 1x, next.svg 2x" alt="next" /> */}
      {/* <header className="header"> */}
      <header className={`${styles.header} fixed top-0 z-50 w-full`}>
        <nav className={`${menu.menu} bg-white opacity-80`}>
          {/* <a href="index.html" className="logo-box__logohead"> */}
          <a href="/" className={`${footer.logobox__logohead}`}>
            <img
              srcSet="/img/logo-palaciosconstrucciones-horizontal.svg 1x, logo-palaciosconstrucciones-horizontal.svg 2x"
              //className={footer.logo-box__logo}
              className={`${footer.logobox}`}
              //style={{width:'100px'}}
            />
          </a>
          <ul className={`${menNav.navegator} ${menNav.navegator__links}`}>
            {/* <li className="navegator__item"> */}
            {/* <li className={menNav.naveburguer__item}> */}
            <li className={menNav.navegator__item}>
              <a
                className={`${menNav.navegator__a} ${menNav.navegator__a__notshow} ${menNav.navegator__a__notshowmini}`}
                href="/#section-nosotros"
                >Nosotros
              </a>
            </li>          
            {/* <li className="navegator__item"> */}
            <li className={menNav.navegator__item}>
              <a
                className={`${menNav.navegator__a} ${menNav.navegator__a__notshow}`}
                href="/#section-servicios"
                >Servicios
              </a>
            </li>
            <li className={menNav.navegator__item}>
              <a className={`${menNav.navegator__a} ${menNav.navegator__a__notshow}`} href="/#section-proyectos"
                >Proyectos
              </a>
            </li>
            <li className={menNav.navegator__item}>
              <a className={`${menNav.navegator__a} ${menNav.navegator__a__notshow}`} href="/#section-clientes"
                >Clientes
              </a>
            </li>
            <li className={menNav.navegator__item}>
              <a
                // className="navegator__a navegator__a--notshow navegator__a--notshow3"
                className={`${menNav.navegator__a} ${menNav.navegator__a__notshow} ${menNav.navegator__a__notshow3}`}
                href="/#section-contactanos"
                >Contáctanos
              </a>
            </li>
          </ul>
          <div className={`${vinietamenu.vinietamenu__list__phone} ${vinietamenu.vinietamenu__list__head}`}>
            <a
              className={vinietamenu.vinietamenu__list__text}
              href="https://api.whatsapp.com/send?phone=524442422520&text=Hola"
              target="_blank"
              >444-242-2520
            </a>
          </div>
        </nav>
        <NavBurguer />
      </header>
    </>
  )
}