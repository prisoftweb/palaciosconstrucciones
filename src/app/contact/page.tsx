import font from '@/app/sass/base/_typography.module.scss'
import util from "@/app/sass/base/_utilities.module.scss";
import base from "@/app/sass/base/_base.module.scss";

import FormContact from '@/components/contact/FormContact';
import Header from '@/components/Header';
import Balancer from 'react-wrap-balancer';

export default async function Contact() {
    return (
        <>
            <Header />
            <section id="section-contact" className={`${base.section} ${util.u_margin_bottom_md} ${util.u_margin_top_lg} `}>
                <div className="flex-1 mt-5 justify-self-center max-w-7xl">
                    <h1
                        className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-6xl font-bold tracking-[-0.02em] text-transparent opacity-1 drop-shadow-sm md:text-7xl md:leading-[5rem]"
                    >
                        <Balancer>¡Contáctenos y envíanos tus comentarios!</Balancer>          
                    </h1>
                    <p
                        className={`${font.heading4} ${font.heading4__center} ${util.u_margin_bottom_sm} mt-10 animate-fade-up text-center`} style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
                        >
                        <Balancer>
                            Nuestro equipo estará encantado de ponerse en contacto contigo para discutir tus ideas, responder a tus preguntas y proporcionarte un presupuesto personalizado. En Palacios Construcciones cada proyecto es único y estamos emocionados de ser tu socio en este viaje constructivo.
                        </Balancer>
                    </p>
                    <h4 className={`${font.headingspecial2} ${font.headingspecial2__center} ${util.u_margin_bottom_sm}`}>
                        ¡Completa el formulario hoy y déjanos ser parte de la construcción de tu éxito!
                    </h4>
                </div>
                <FormContact />
            </section>
        </>
    )
}