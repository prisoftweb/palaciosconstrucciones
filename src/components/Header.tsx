import styles from '@/app/sass/layout/_header.module.scss';
import menu from '@/app/sass/layout/_nav.module.scss';
import menNav from '@/app/sass/layout/_menav.module.scss';
import navigation from '@/app/sass/layout/_navigation.module.scss';
import menBurguer from '@/app/sass/layout/_menuburguer.module.scss';
import footer from '@/app/sass/layout/_footer.module.scss';
import vinietamenu from '@/app/sass/layout/vinietamenu.module.scss';

export default function Header(){
  return(
    <>
      {/* <img srcSet="next.svg 1x, next.svg 2x" alt="next" /> */}
      {/* <header className="header"> */}
      <header className={`${styles.header} fixed top-0 z-50 `}>
        <nav className={`${menu.menu} bg-white opacity-80`}>
          {/* <a href="index.html" className="logo-box__logohead"> */}
          <a href="index.html" className={footer.logobox__logohead}>
            <img
              srcSet="img/logo-palaciosconstrucciones-horizontal.svg 1x, logo-palaciosconstrucciones-horizontal.svg 2x"
              //className={footer.logo-box__logo}
              className={footer.logobox}
            />
          </a>
          {/* <img srcSet="next.svg 1x, next.svg 2x" alt="next" /> */}
          {/* <ul className="navegator navegator__links"> */}
          <ul className={`${menNav.navegator} ${menNav.navegator__links}`}>
            {/* <li className="navegator__item"> */}
            <li className={menNav.naveburguer__item}>
              <a
                // className="navegator__a navegator__a--notshow navegator__a--notshowmini"
                className={`${menNav.navegator__a} ${menNav.navegator__a__notshow} ${menNav.navegator__a__notshowmini}`}
                href="#section-nosotros"
                >Nosotros
              </a>
            </li>          
            {/* <li className="navegator__item"> */}
            <li className={menNav.navegator__item}>
              <a
                //className="navegator__a navegator__a--notshow"
                className={`${menNav.navegator__a} ${menNav.navegator__a__notshow}`}
                href="#section-servicios"
                >Servicios
              </a>
            </li>
            <li className={menNav.navegator__item}>
              {/* <a className="navegator__a navegator__a--notshow" href="#section-equipo" */}
              <a className={`${menNav.navegator__a} ${menNav.navegator__a__notshow}`} href="#section-proyectos"
                >Proyectos
              </a>
            </li>
            <li className={menNav.navegator__item}>
              {/* <a className="navegator__a navegator__a--notshow" href="#section-costos" */}
              <a className={`${menNav.navegator__a} ${menNav.navegator__a__notshow}`} href="#section-clientes"
                >Clientes
              </a>
            </li>
            <li className={menNav.navegator__item}>
              <a
                // className="navegator__a navegator__a--notshow navegator__a--notshow3"
                className={`${menNav.navegator__a} ${menNav.navegator__a__notshow} ${menNav.navegator__a__notshow3}`}
                href="#section-contactanos"
                >Contáctanos
              </a>
            </li>
          </ul>
          {/* <div className="vinietamenu__list--phone vinietamenu__list--head">           */}
          <div className={`${vinietamenu.vinietamenu__list__phone} ${vinietamenu.vinietamenu__list__head}`}>
            <a
              //className="vinietamenu__list--text"
              className={vinietamenu.vinietamenu__list__text}
              href="https://api.whatsapp.com/send?phone=524442422520&text=Hola"
              target="_blank"
              >444-242-2520
            </a>
          </div>
        </nav>
        <div className={navigation.navigation}>
          <input type="checkbox" className={navigation.navigation__checkbox} id="navi-toogle" />
          <label htmlFor="navi-toogle" className={navigation.navigation__button}>
            <span className={navigation.navegator__icon}>&nbsp;</span>
          </label>
          <div className={navigation.navigation__background}>&nbsp;</div>
          <nav className={`${navigation} ${navigation.navigation__nav}`}>
            <ul className={`${menBurguer.naveburguer} ${menBurguer.naveburguer__list}`}>
              <li className={menBurguer.naveburguer__item}>
                <a className={menBurguer.naveburguer__a} href="#section-nosotros">Nosotros</a>
              </li>
              <li className={menBurguer.naveburguer__item}>
                <a className={menBurguer.naveburguer__a} href="#section-servicios"
                  >Servicios
                </a>
              </li>
              <li className={menBurguer.naveburguer__item}>
                <a className={menBurguer.naveburguer__a} href="#section-proyectos">Proyectos</a>
              </li>
              <li className={menBurguer.naveburguer__item}>
                <a className={menBurguer.naveburguer__a} href="#section-clientes">Clientes</a>
              </li>
              <li className={menBurguer.naveburguer__item}>
                <a className={menBurguer.naveburguer__a} href="#section-contactanos"
                  >Contáctanos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}