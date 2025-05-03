'use client'
import Header from "@/components/Header"
import font from '@/app/sass/base/_typography.module.scss';
import util from "@/app/sass/base/_utilities.module.scss";
import base from "@/app/sass/base/_base.module.scss";
import img from  "@/app/sass/components/_imagen.module.scss";
import { useState, useEffect } from "react";
import typography from "@/app/sass/base/_typography.module.scss";
import ViewSlider from "../sliders/ViewSlider";
import { getSlidersBySegement } from "@/app/api/RouteSliders";

export default function RegulationComponent() {
  const [width, setWidth] = useState<number>(0);
  const [slider, setSlider] = useState<any>();

  const handleResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize, false);
  }, [])

  let heightArrow = 9;
  let heightText=20;

  useEffect(() => {
    const fetch = async () => {
      let sliders;
      try {
        sliders = await getSlidersBySegement('regulations');
        if(typeof(sliders) !== 'string'){
          if(sliders.length > 0){
            setSlider(sliders);
          }
        }else{
          return <h1 className="text-center text-red-500">{sliders}</h1>
        }
      } catch (error) {
        return <h1 className=" text-center text-red-500">Error al consulta sliders</h1>
      }
    }
    fetch();
  }, []);
  

  width < 300? (heightArrow=(35), heightText=(15) ): (width < 400? (heightArrow=(55), heightText=(19)): 
      (width < 500? (heightArrow=(70), heightText=(25)): (width < 600? (heightArrow=(85), heightText=(25)): 
        (width < 700? (heightArrow=(95), heightText=(25)): (width < 800? (heightArrow=(110), heightText=(30)): 
          (width < 1000? (heightArrow=(130), heightText=(35)): (width < 1200? (heightArrow=(170), heightText=(40)): 
            (width < 1400? (heightArrow=(190), heightText=(40)): 
              (width < 1600? (heightArrow=(220), heightText=(40)): (heightArrow=(270), heightText=(45)))))))))))

  return(
    <>
      <Header />
      {/* <div className="pt-20 mt-20">
        <div className="flex justify-center relative w-full">
          <img src={'/img/personal-team-palacios.jpg'} alt="slider" className={`${img.imagefull} w-full h-auto`}/>
          <p className={`absolute ${font.titlespecial} top:0`}>{'Reglamento interno'}</p>

          <p className={`w-2/3 absolute ${font.subtitlespecial}`} 
            style={{top:`${(3 * heightText)}px`}} 
            key={0}>{'Jornada de Trabajo y Horarios'}</p>
          <p className={`w-2/3 absolute ${font.subtitlespecial}`} 
            style={{top:`${(4 * heightText)}px`}} 
            key={1}>{'Días y lugar de pago'}</p>
          <p className={`w-2/3 absolute ${font.subtitlespecial}`} 
            style={{top:`${(5 * heightText)}px`}} 
            key={2}>{'Derechos del trabajador'}</p>
          <p className={`w-2/3 absolute ${font.subtitlespecial}`} 
            style={{top:`${(6 * heightText)}px`}} 
            key={3}>{'Conducta y disciplina'}</p>

        </div>
      </div> */}

      {slider && <ViewSlider sliders={slider} />}

      <section id="section-plafon" className={`${base.section} `}>
        <p className={`${font.subtitle} ${util.u_margin_top_md}`}>Capitulo I. Disposiciones Generales</p>
        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          ARTÍCULO 1. OBJETIVO DEL REGLAMENTO
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          Este reglamento tiene por objetivo establecer las normas y disposiciones internas para 
          regular las relaciones laborales entre la empresa y sus trabajadores, asegurando 
          un ambiente de trabajo seguro, respetuoso y eficiente.
        </p>

        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          ARTÍCULO 2. ÁMBITO DE APLICACIÓN
        </h4>        
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          El presente reglamento es aplicable a todos los empleados de la empresa de Palacios Construcciones.
        </p>

        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          ARTÍCULO 3. CONOCIMIENTOS DEL REGLAMENTO
        </h4>
        <p className={`${font.headingspecial} ${util.u_margin_bottom_sm} mt-5`}>
          
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          Es responsabilidad de todos los empleados conocer y cumplir las disposiciones establecidas en este reglamento.
        </p>

        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          ARTÍCULO 4. MODIFICACIONES DEL REGLAMENTO
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          La empresa se reserva el derecho de modificar el reglamento cuando sea necesario y 
          estará disponible para su consulta.
        </p>

        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          ARTÍCULO 5. INTERPRETACIÓN
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          Cualquier duda sobre interpretación de este reglamento será resuelta por el área de Recursos Humanos de la
          empresa.
        </p>

      </section>

      <section id="section-plafon" className={`${base.section} `}>
        <p className={`${font.subtitle} ${util.u_margin_top_md}`}>
          Capitulo II. Jornada de Trabajo y Horarios
        </p>
        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          CAPITULO II. JORNADA DE TRABAJO Y HORARIOS
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          1. La jornada laboral es de 6 días a la semana.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          2. La jornada de trabajo es la siguiente para todo el personal de Palacios Construcciones.
        </p>
          <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-11 mt-5`}>
            a) Lunes a viernes de 08:00 am a 18:00 pm
          </p>
          <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-11 mt-5`}>
            b) Sábado de 08:30 am a 13:00 pm
          </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          3. Todos los trabajadores tendrán derecho a una hora de comida, la cual se tomará a partir 
          de 4 horas después de su hora de entrada.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          4. Los empleados deberán cumplir con el horario establecido. Cualquier cambio deberá 
          ser autorizado y notificado por el Director General.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          5. En caso de que el cliente de Palacios Construcciones asigne otro horario, 
          se hará excepción para que los trabajadores puedan acoplarse a los horarios que establezcan.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          6. Cuando la empresa requiera que el personal preste sus servicios después de su horario 
          laboral se considerara extraordinario y el personal debe estar de acuerdo en trabajar 
          tiempo extra en caso de ser requerido.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          7. Las horas extras serán asignadas bajo previa autorización.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          8. El control de asistencia de todos los trabajadores será mediante la aplicación de FISCOCLIC
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          9. El trabajador tiene responsabilidad de registrar sus entradas y salidas, sin excepción.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          10. El trabajador tiene la obligación de presentarse en su área de trabajo con su 
          indumentaria completa y equipado con la herramienta necesaria para desempeñar 
          su trabajo correspondiente.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          11. En caso de que el trabajador no se presente en su área de trabajo sin previo 
          aviso se tomará como falta injustificada.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          12. Si el trabajador necesita suspender sus labores durante su horario laboral, 
          deberá ser con previa autorización, por causas justificadas y avisar a los 
          departamentos correspondientes su retiro y motivo.
        </p>

      </section>

      <section id="section-plafon" className={`${base.section} `}>
        <p className={`${font.subtitle} ${util.u_margin_top_md}`}>
          Capitulo III. Días y lugar de pago
        </p>
        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          Capitulo III. Días y lugar de pago
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          1. Los sueldos y salarios de cada trabajador serán asignados por el Gerente de 
          la empresa de acuerdo al “tabulador de sueldos”.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          2. El pago de sueldos y salarios será pagado mediante transferencia a la cuenta 
          que el trabajador asigno previamente.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          3. El trabajador tendrá la obligación de tramitar su cuenta para que le pueda generar 
          su pago de nómina en tiempo y forma.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          4. La cuenta (clave interbancaria) deberá ser personal.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          5. La cuenta clave del trabajador deberá ser compartida al área correspondiente.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          6. El pago se efectuará los días viernes.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          7. En caso de que existan situaciones extraordinarias por parte de la empresa, 
          el pago podrá efectuarse hasta el día sábado.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          8. El pago comprenderá los días trabajados, séptimo día proporcional a días 
          trabajados, tiempo extra en caso de existir, bonos y/o compensaciones que la 
          empresa pueda destinar según sus políticas internas y prima vacacional en caso de 
          tener derecho.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          9. En caso de ser trabajador foráneo el pago también comprenderá viáticos.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          10. Si el trabajador tiene derecho a vacaciones y son autorizadas, 
          también serán reflejadas en su pago de nómina.
        </p>
      </section>

      <section id="section-plafon" className={`${base.section} `}>
        <p className={`${font.subtitle} ${util.u_margin_top_md}`}>
          Capitulo IV. Permisos y licencias
        </p>
        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          Capitulo IV. Permisos y licencias
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          1. Los trabajadores tienen derecho a permiso en caso de emergencia familiar, 
          enfermedad o tramites personales importantes, siempre y cuando estos sean 
          solicitados y aprobados previamente por el director general.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          2. Los permisos por enfermedad deberán justificarse con comprobante medico
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          3. Dichos permisos serán otorgados sin goce de sueldo y pagados acordes a la 
          incapacidad otorgada mediante el IMSS. En caso de lo contrario el director 
          será el encargado de autorizarlo.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          4. Las condiciones de los permisos podrán ser consultadas con el área de Recursos Humanos.
        </p>
      </section>

      <section id="section-plafon" className={`${base.section} `}>
        <p className={`${font.subtitle} ${util.u_margin_top_md}`}>
          Capítulos V. Derechos del trabajador
        </p>
        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          Capítulos V. Derechos del trabajador
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          1. Todos los trabajadores tendrán derecho a gozar de un día de descanso 
          a la semana y días festivos establecidos por la ley.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          2. En caso de que se requiera de los servicios de los trabajadores en días 
          festivos el Director General será el encargado de autorizar el día como 
          tiempo extra y será un acuerdo mutuo entre empresa y trabajador.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          3. Los trabajadores tienen derecho a vacaciones anuales conforme 
          a la antigüedad y lo establecido por la ley.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          4. La programación de vacaciones deberá ser acorde a la política establecida dentro de la empresa.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          5. Todos los trabajadores tienen derecho a recibir un trato respetuoso y 
          digno por parte de sus superiores y compañeros.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          6. Derecho a recibir remuneración y beneficios acordados desde su 
          ingreso de manera puntual y completa.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          7. Todos los trabajadores tendrán derecho a participar en las 
          prestaciones y beneficios ofrecidos por la empresa.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          8. Derecho a un ambiente laboral seguro, donde se cumplan las normativas de seguridad e higiene.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          9. Derecho a la confidencialidad de sus datos personales.
        </p>
      </section>

      <section id="section-plafon" className={`${base.section} `}>
        <p className={`${font.subtitle} ${util.u_margin_top_md}`}>
          Capítulo VI. Obligaciones de los trabajadores
        </p>
        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          Capítulo VI. Obligaciones de los trabajadores
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          1. Los trabajadores deben presentarse puntualmente a su jornada laboral.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          2. Cumplir con sus deberes laborales de manera eficiente.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          3. Respetar a sus superiores y compañeros de trabajo, 
          manteniendo un ambiente de respeto y colaboración.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          4. Cumplir con las normas de seguridad e higiene en el trabajo y 
          asistir a las capacitaciones que se les impongan.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          5. Cuidar y mantener en buen estado los equipos, herramientas y demás bienes de la empresa.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          6. Cumplir con los horarios establecidos y justificar cualquier ausencia o retraso.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          7. Informar a la empresa sobre cualquier cambio en su situación que pueda 
          afectar su relación laboral.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          8. Informar de inmediato a sus superiores sobre cualquier situación 
          que represente un riesgo por salud o seguridad.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          9. Dar aviso inmediato al patrón, salvo caso fortuito o de fuerza mayor, 
          de las causas justificadas que le impidan concurrir a su trabajo.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          10. Observar buenas costumbres durante el servicio.
        </p>
      </section>

      <section id="section-plafon" className={`${base.section} `}>
        <p className={`${font.subtitle} ${util.u_margin_top_md}`}>
          Capitulo VII. Conducta y disciplina
        </p>
        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          Capitulo VII. Conducta y disciplina
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          1. Los trabajadores deben mantener una conducta respetuosa en todo momento.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          2. No se permite el uso de leguaje ofensivo, discriminatorio o abusivo.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          3. Esta prohibido realizar cualquier actividad ilícita o inapropiada en el lugar de trabajo.
        </p>
      </section>

      <section id="section-plafon" className={`${base.section} `}>
        <p className={`${font.subtitle} ${util.u_margin_top_md}`}>
          Capitulo VIII. Sanciones disciplinarias
        </p>
        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          Capitulo VIII. Sanciones disciplinarias
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          1. Las faltas cometidas por los trabajadores serán sancionadas de acuerdo 
          con la gravedad de la falta. Las sanciones pueden incluir:
        </p>
          <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-11 mt-5`}>
            1.2 Amonestación verbal por faltas leves
          </p>
          <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-11 mt-5`}>
            1.3 Amonestación escrita (Actas administrativas), 
            cuando se cometa la misma falta en reiteradas ocasiones.
          </p>
            <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-24 mt-5`}>
              a) Los motivos por los cuales se puede levantar un acta administrativa son los siguientes:
            </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                i. Actos que propicien violencia, contra el Director, colegas, 
                familiares del Director, o clientes y proveedores de Palacios Construcciones. 
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                ii. La agresión física o verbal a cualquier miembro de la empresa. 
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                iii. Perjudicar intencionalmente los materiales, herramienta y equipo, 
                provocados por el trabajador durante su desempeño de sus actividades.
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                iv. No cumplir con su perfil de puesto asignado en Palacios Construcciones.
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                v. Acumular más de cuatro (4) faltas injustificadas en un periodo de 30 días.
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                vi. Desobediencia injustificada a órdenes de su jefe directo.
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                vii. Desobediencia injustificada a órdenes del Director.
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                viii. El uso excesivo del teléfono celular en horario laboral a excepción 
                que se requiera para desempeñar sus labores; así como cuando estén desempeñando 
                actividades en equipos de elevación o equipos y herramientas que puedan 
                poner en riesgo su vida y su integridad. 
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                ix. El robo, fraude o mal uso de los recursos de la empresa.
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                x. Divulgar información confidencial sin autorización.
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                xi. Cometer actos de acoso sexual, laboral o cualquier tipo de discriminación.
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                xii. Consumir o estar bajo los efectos de drogas o alcohol en el horario laboral.
              </p>
          <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-11 mt-5`}>
            1.4 Suspensión temporal del empleo y sueldo. En caso de faltas moderadas.
          </p>
          <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-11 mt-5`}>
            1.5 Terminación laboral en caso de faltas graves que perjudiquen a la empresa o a sus empleados.
          </p>    
            <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-24 mt-5`}>
              A Se considera faltas graves: 
            </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                a). La ausencia injustificada durante 4 consecutivos.
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                b). La falsificación de documentos o información.
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                c). El robo, fraude o mal uso de los recursos de la empresa.
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                d). La agresión física o verbal a cualquier miembro de la empresa.
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                e). Divulgar información confidencial sin autorización
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                f). Cometer actos de acoso sexual, laboral o cualquier tipo de discriminación.
              </p>
              <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-32 mt-5`}>
                g). Consumir o estar bajo los efectos de drogas o alcohol en el horario laboral.
              </p>
      </section>

      <section id="section-plafon" className={`${base.section} `}>
        <p className={`${font.subtitle} ${util.u_margin_top_md}`}>
          Capitulo IX. Prohibiciones
        </p>
        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          Capitulo IX. Prohibiciones
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          1. Queda prohibido la inserción de bebidas alcohólicas y/o estupefacientes en 
          cualquier área de trabajo y durante su horario laboral.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          2. Queda prohibido presentarse a trabajar bajo efectos del alcohol y/o estupefacientes.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          3. Queda prohibido manejar vehículos de la empresa bajo efectos de alcohol.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          4. Queda prohibido consumir bebidas alcohólicas dentro de los vehículos.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          5. Trabajadores foráneos (obras fuera de San Luis Potosí):
        </p>
          <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-11 mt-5`}>
            a) En caso de estar trabajando de manera foránea (obras fuera de SLP), 
            queda prohibido también ingerir bebidas alcohólicas y/o 
            estupefacciones dentro de la casa donde se les esté brindando el hospedaje.
          </p>
          <p className={`${font.heading4} ${util.u_margin_bottom_sm} pl-11 mt-5`}>
            b) Queda prohibido para trabajadores foráneos la inserción de personas ajenas 
            a la empresa dentro de la casa donde se brinda el hospedaje.
          </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          6. Esta prohibido faltar al respeto a sus compañeras (os) dentro y fuera de su área de trabajo.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          7. En caso de que al trabajador incumpla en cualquiera de estas prohibiciones será 
          causa de amonestación según la capitulo VIII – SANCIONES DICIPLINARIAS.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          8. Ejecutar cualquier acto que pueda poner en peligro su propia seguridad, 
          la de sus compañeros de trabajo o la de terceras personas, 
          así como la de los establecimientos o lugares en que el trabajo se desempeñe.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          9. Portar armas de cualquier clase durante las horas de trabajo, 
          salvo que la naturaleza de éste lo exija. Se exceptúan de esta 
          disposición las punzantes y punzo-cortantes que formen parte de 
          las herramientas o útiles propios del trabajo.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          10. Usar los útiles y herramientas suministrados por el patrón, 
          para objeto distinto de aquél a que están destinados.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          11. Hacer cualquier clase de propaganda en las horas de trabajo.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          12. Acosar sexualmente a cualquier persona o realizar actos inmorales en los lugares de trabajo.
        </p>
      </section>

      <section id="section-plafon" className={`${base.section} `}>
        <p className={`${font.subtitle} ${util.u_margin_top_md}`}>
          Capitulo X. Resolución de conflictos
        </p>
        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          Capitulo X. Resolución de conflictos
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          1. Cualquier conflicto se intentará resolver de forma amistosa y 
          haciendo uso de la comunicación efectiva.
        </p>
      </section>

      <section id="section-plafon" className={`${base.section} `}>
        <p className={`${font.subtitle} ${util.u_margin_top_md}`}>
          Capitulo XI. Herramienta y equipo
        </p>
        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          Capitulo XI. Herramienta y equipo
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          1. La empresa proporcionara al trabajador equipos de gran tamaño o 
          capacidad para utilizar en el área de trabajo correspondiente.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          2. El trabajador será encargado de adquirir su propia herramienta 
          para desempeñar sus actividades en su área de trabajo.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          3. La empresa asignara ciertos vehículos para uso exclusivo de ciertos 
          trabajos y dichos vehículos serán asignados al personal que la empresa convenga.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          4. Los vehículos serán asignados al trabajador bajo una carta responsiva.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          5. La empresa otorgara al personal administrativo las herramientas y 
          papelería necesaria para desarrollo de sus actividades.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          6. El trabajador deberá ser responsable del cuidado de los equipos y 
          herramientas que asigne la empresa.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          7. El personal que tenga asignado o utilice algún vehículo propiedad de la 
          empresa Debra conservarlo lo mas limpio posible y abstenerse de realizarle 
          alguna modificación sin previo aviso.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          8. En caso de que el vehículo presente fallas, deberá ser notificada al 
          área correspondiente para su atención.
        </p>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          9. Los equipos y herramientas deberán ser utilizados de manera segura para evitar accidentes.
        </p>
      </section>

      <section id="section-plafon" className={`${base.section} `}>
        <p className={`${font.subtitle} ${util.u_margin_top_md}`}>
          Capitulo XII. Términos finales
        </p>
        <h4 className={`${typography.headingspecial2} ${util.u_margin_bottom_sm} mt-5`}>
          Capitulo XII. Términos finales
        </h4>
        <p className={`${font.heading4} ${util.u_margin_bottom_sm} mt-5`}>
          1. Este reglamento estará en vigencia a partir de su fecha de aprobación 
          y será aplicable a todos los trabajadores de la empresa.
        </p>
      </section>
    </>
  )
}
