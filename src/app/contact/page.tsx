import font from '@/app/sass/base/_typography.module.scss'
import util from "@/app/sass/base/_utilities.module.scss";
import base from "@/app/sass/base/_base.module.scss";

import FormContact from '@/components/contact/FormContact';
import Header from '@/components/Header';

export default async function Contact() {
    return (
        <>
            <Header />
            <section id="section-contact" className={`${base.section} ${util.u_margin_bottom_md} ${util.u_margin_top_lg} `}>
                <h3 className={`${font.subtitle} ${util.u_margin_top_md_}`}>
                    Contactanos
                </h3>
                <h3 className={`${font.subtitle_thin} ${util.u_margin_bottom_sm}`}>
                    Dejanos tus datos
                </h3> 
                <p className={`${font.heading4} ${util.u_margin_bottom_md} mt-4`}>
                    Nuestro equipo estará encantado de ponerse en contacto contigo para discutir tus ideas, responder a tus preguntas y proporcionarte un presupuesto personalizado. En Palacios Construcciones cada proyecto es único y estamos emocionados de ser tu socio en este viaje constructivo.
                </p>
                <p className={`${font.heading4} ${util.u_margin_bottom_md} mt-4`}>
                    ¡Completa el formulario hoy y déjanos ser parte de la construcción de tu éxito!
                </p>
                <FormContact />
            </section>
        </>
    )
}