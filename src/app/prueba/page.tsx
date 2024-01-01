//import navigation from '@/app/sass/navigation.module.scss'
//import header from '@/app/sass/layout/_header.module.scss'
import mainSCSS from '@/app/sass/main.module.scss'
export default function Prueba(){
  return(
    <>
      <header className={mainSCSS.header}>
        <nav className={mainSCSS.menu}>
          <a href="index.html" className="logo-box__logohead">
            <img
              srcSet="img/logo-palaciosconstrucciones-isologo.svg 1x, img/logo-palaciosconstrucciones-isologo.svg 2x"
              alt="logotipo palaciosconstrucciones"
              className="logo-box__logo"
            />
          </a>

          <ul className="navegator navegator__links">
            <li className={mainSCSS.navegator__item}>
              <a
                className="navegator__a navegator__a--notshow navegator__a--notshowmini"
                href="#section-musica"
                >Nosotros
              </a>
            </li>          
            <li className="navegator__item">
              <a
                className="navegator__a navegator__a--notshow"
                href="#section-instrumentos"
                >Servicios
              </a>
            </li>
            <li className="navegator__item">
              <a className="navegator__a navegator__a--notshow" href="#section-equipo"
                >Proyectos
              </a>
            </li>
            <li className="navegator__item">
              <a className="navegator__a navegator__a--notshow" href="#section-costos"
                >Clientes
              </a>
            </li>
            <li className="navegator__item">
              <a
                className="navegator__a navegator__a--notshow navegator__a--notshow3"
                href="#section-contactanos"
                >Contáctanos
              </a>
            </li>
          </ul>
          <div className="vinietamenu__list--phone vinietamenu__list--head">          
            <a
              className="vinietamenu__list--text"
              href="https://api.whatsapp.com/send?phone=524442422520&text=Hola"
              target="_blank"
              >444-242-2520
            </a>
          </div>
        </nav>
        <div className="navigation">
          <input type="checkbox" className="navigation__checkbox" id="navi-toogle" />
          <label htmlFor="navi-toogle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation navigation__nav">
            <ul className="naveburguer naveburguer__list">
              <li className="naveburguer__item">
                <a className="naveburguer__a" href="#section-musica">Nosotros</a>
              </li>
              <li className="naveburguer__item">
                <a className="naveburguer__a" href="#section-instrumentos"
                  >Servicios
                </a>
              </li>
              <li className="naveburguer__item">
                <a className="naveburguer__a" href="#section-equipo">Proyectos</a>
              </li>
              <li className="naveburguer__item">
                <a className="naveburguer__a" href="#section-costos">Clientes</a>
              </li>
              <li className="naveburguer__item">
                <a className="naveburguer__a" href="#section-contactanos"
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