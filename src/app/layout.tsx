import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Gonot Nicolas",
    description: "Portfolio Web Developper Freelance",

    icons: {
        shortcut: "/favicon.png",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-KDHLKKWH');
                        `,
                    }}
                />
                {/* End Google Tag Manager */}

                {/* Google Analytics */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-5PG59341DB"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-5PG59341DB');
          `,
                    }}
                />
                {/* Fin de Google Analytics */}

                <meta property="og:image" content="favicon.png" />
                <meta name="description" content={metadata.description ?? ""} />
                <meta name="author" content="Gonot Nicolas" />
                <link rel="canonical" href="gonot-nicolas.com" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="keywords"
                    content="
                        Web Development, 
                        Développeur web, 
                        Portfolio, 
                        Freelance, 
                        
                        Indépendant, 
                        Web, 
                        Website, 
                        Siteweb,

                        Gonot Nicolas,
                        gonot nicolas,
                        Nicolas Gonot, 
                        nicolas gonot,
                        gonot-nicolas,
                        nicolas-gonot, 
                        
                        HTML, 
                        CSS, 
                        Javascript, 
                        Typescript, 
                        Bootstrap, 
                        Tailwind, 
                        Symfony, 
                        Jquerry, 
                        PHP, 
                    "
                />
                <meta name="robots" content="index, follow" />
            </head>
            <body className={inter.className}>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-KDHLKKWH"
                        height="0"
                        width="0"
                        style={{ display: "none", visibility: "hidden" }}
                    ></iframe>
                </noscript>
                {/* End Google Tag Manager (noscript) */}
                {children}
            </body>
        </html>
    );
}
