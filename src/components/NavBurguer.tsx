"use client"

import navigation from '@/app/sass/layout/_navigation.module.scss';
import menBurguer from '@/app/sass/layout/_menuburguer.module.scss';
import { useState } from 'react';

export default function NavBurguer(){
  
  const [showMen, setShowMen] = useState(false);

  return(
    <>
      <div className={navigation.navigation}>
        <input type="checkbox" className={navigation.navigation__checkbox} id="navi-toogle" 
          checked={showMen} onChange={() => {setShowMen(!showMen)}} />
        <label htmlFor="navi-toogle" className={navigation.navigation__button}>
          <span className={navigation.navigation__icon}>&nbsp;</span>
        </label>
        <div className={navigation.navigation__background}>&nbsp;</div>
        <nav className={`${navigation} ${navigation.navigation__nav}`}>
          <ul className={`${menBurguer.naveburguer} ${menBurguer.naveburguer__list}`}>
            <li className={menBurguer.naveburguer__item}>
              <a onClick={() => setShowMen(false)} className={menBurguer.naveburguer__a} href="/#section-nosotros">Nosotros</a>
            </li>
            <li className={menBurguer.naveburguer__item}>
              <a onClick={() => setShowMen(false)} className={menBurguer.naveburguer__a} href="/#section-servicios"
                >Servicios
              </a>
            </li>
            <li className={menBurguer.naveburguer__item}>
              <a onClick={() => setShowMen(false)} className={menBurguer.naveburguer__a} href="/#section-proyectos">Proyectos</a>
            </li>
            <li className={menBurguer.naveburguer__item}>
              <a onClick={() => setShowMen(false)} className={menBurguer.naveburguer__a} href="/#section-clientes">Clientes</a>
            </li>
            <li className={menBurguer.naveburguer__item}>
              <a onClick={() => setShowMen(false)} className={menBurguer.naveburguer__a} href="/#section-contactanos"
                >Contáctanos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}