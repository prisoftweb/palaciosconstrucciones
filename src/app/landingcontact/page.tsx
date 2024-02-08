'use client'
import font from '@/app/sass/base/_typography.module.scss'
import util from "@/app/sass/base/_utilities.module.scss";
import base from "@/app/sass/base/_base.module.scss";
import Return from "@/components/shared/icons/return";
import Balancer from 'react-wrap-balancer';
import React, { } from "react";
import Header from '@/components/Header';

export default async function LandingContact() {
    return (
        <>
            <div className={`${base.section}  w-screen md:max-w-7xl max-w-4xl ${util.u_margin_top_hg} ${util.u_margin_bottom_md}`}>
                <h1
                    className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-7xl font-bold tracking-[-0.02em] text-transparent opacity-1 drop-shadow-sm md:text-8xl md:leading-[6.8rem]"

                >
                    <Balancer>Nos comunicaremos contigo pronto</Balancer>
                </h1>
                <p
                    className="mt-10 animate-fade-up text-center text-3xl text-gray-500 opacity-1 md:text-4xl"
                    style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
                >
                    <Balancer>
                        Nuestro equipo estará encantado de ponerse en contacto contigo para discutir tus comentarios, responder a tus preguntas y proporcionarte la informacion solicitada. En Palacios Construcciones cada proyecto es único y estamos emocionados de contribuir en tu proyecto. Tiempo de espera promedio de 24 horas si deseas respuesta inmediata da click 
                        <a href="https://api.whatsapp.com/send?phone=524442422520&text=Buen dia, envie mis datos en el formulario de contacto de su pagina web"
                        target="_blank">  aqui, ¡Gracias!  </a>
                    </Balancer>
                </p>
                <div
                    className="mx-auto mt-10 flex animate-fade-up items-center justify-center space-x-5 opacity-1"
                    style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
                >
                    <a
                        className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-2xl text-gray-600 shadow-md transition-colors hover:border-gray-800"
                        href="/"
                        rel="noopener noreferrer"
                    >
                        <Return />
                        <p>
                            <span className="hidden sm:inline-block">Regresar a </span> Pagina{" "}                        
                        </p>
                    </a>
                </div>
            </div>                        
        </>
    )
}