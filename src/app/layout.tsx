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
            <body className={inter.className}>{children}</body>
        </html>
    );
}
