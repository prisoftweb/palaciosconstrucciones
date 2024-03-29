import Script from "next/script";

export const GTMscript = () => (
    
    <>
        <Script>{`window.dataLayer = window.dataLayer || [];`}</Script>
        <Script strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-PPTRZ8L9')
            `}
        </Script>        
    </>
);

export const GTMnoscript = () => (
    // <>
    //     <noscript>
    //         <iframe 
    //             src="https://www.googletagmanager.com/ns.html?id=GTM-PPTRZ8L9"
    //             height="0" 
    //             width="0" 
    //             style="display:none;visibility:hidden">
    //         </iframe>
    //     </noscript>
    // </>

    <noscript
        dangerouslySetInnerHTML={{
            __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PPTRZ8L9"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
        }}
    />
);