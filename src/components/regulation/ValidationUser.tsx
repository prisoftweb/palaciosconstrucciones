'use client'
import RegulationComponent from "@/components/regulation/RegulationComponent"
import { useState } from "react"
import Header from "@/components/Header";
import font from '@/app/sass/base/_typography.module.scss';
import util from "@/app/sass/base/_utilities.module.scss";
import base from "@/app/sass/base/_base.module.scss";
import Balancer from "react-wrap-balancer";
import typography from "@/app/sass/base/_typography.module.scss";
import Button from "../Button";
import Input from "../Input";

export default function ValidationUser() {
  const [isUser, setIsUser] = useState<boolean>(false);
  const [code, setCode] = useState<string>('');

  const validation = () => {
    console.log('validation');
    if(code==='Palacios2025'){
      setIsUser(true);
    }else{
      window.location.replace('/');
    }
  }

  return (
    <div>
      <Header />
      {isUser? (
        <RegulationComponent />
      ): (
        <div className="flex flex-col mt-28">
        <div className="flex-1 mt-5 justify-self-center">
          <h1
              className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-6xl font-bold tracking-[-0.02em] text-transparent opacity-1 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          >
              <Balancer>¡Acceso de empleados!</Balancer>          
          </h1>
          <p
            className={`${typography.heading4} ${typography.heading4__center} ${util.u_margin_bottom_sm} mt-10 animate-fade-up text-center`} style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
          >
            <Balancer>
              Esta seccion es unicamente para empleados de la compania. <br /> Por favor ingrese su numero de empleado para poder ver el contenido de la pagina!
            </Balancer>
          </p>
          {/* <h4 className={`${typography.headingspecial2} ${typography.headingspecial2__center} ${util.u_margin_bottom_sm}`}>
            ¡Gracias por elegirnos y confiar en nosotros!
          </h4> */}
        </div>

        <div className="flex justify-center gap-x-3 mb-5">
          {/* <Input autoFocus value={code} onChange={(e) => setCode(e.target.value)} ></Input> */}
          <input className="shadow appearance-none border border-gray-300 rounded w-68 py-2 px-3 
              text-gray-500 leading-tight text-2xl font-medium focus:ring-1 focus:ring-blue-600"
              autoFocus value={code} onChange={(e) => setCode(e.target.value)} />
          <Button type="button" onClick={() => validation()}>Aceptar</Button>
        </div>

        {/* <section id="section-plafon" className={`${base.section} pt-20 mt-20 `}>
          <h1 className={`${font.headingspecial} ${util.u_margin_bottom_sm} mt-5`}>Esta seccion es unicamente para empleados de la compania</h1>
          <h2 className={`${font.headingspecial} ${util.u_margin_bottom_sm} mt-5`}>Por favor ingrese su numero de empleado para poder ver el contenido de la pagina!</h2>
          <input type="text" autoFocus className="w-44 h-11 text-black p-2 outline-none border border-slate-500 rounded-md mr-3" value={code} onChange={(e) => setCode(e.target.value)} />
          <button className="w-44 h-11 bg-blue-600 hover:bg-blue-400 text-white rounded-md" onClick={validation}>Aceptar</button>
          <Button type="button" onClick={validation}>Aceptar</Button>
        </section> */}
      </div>
      )}
    </div>
  )
}
