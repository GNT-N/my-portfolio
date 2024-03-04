"use client";
import React, { useEffect, useRef } from "react";
import { Navigation } from "../components/nav";
import Grid_logos from "../components/grid_logos";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next, useTranslation } from "react-i18next";

i18n.use(initReactI18next)
    .use(Backend)
    .init({
        backend: {
            loadPath: "/translation/{{ lng }}/translation.json",
        },
        lng: "en",
        fallbackLng: ["en", "fr", "vn"],
    });

const changeLanguage = (selectedLang: string | undefined) => {
    i18n.changeLanguage(selectedLang);
};

const logos = [
    "html5",
    "css3",
    "javascript",
    "php",
    "twig",
    "sql",
    "typescript",
    "bootstrap",
    "jquery",
    "tailwind",
    "symfony",
    "react",
    "npm",
    "node-js",
    "next-js",
    "webpack",
    "chrome",
    "firefox",
    "safari",
    "github",
    "vercel",
    "laragon",
    "terminal",
    "vscode",
    "sublime",
    "canva",
    "trello",
    "figma",
    "discord",
    "google-meet",
    "google-drive",
    "google-logo-docs",
];

export default function Skills() {
    const skillBarsRef = useRef<null | DOMRect>(null);

    useEffect(() => {
        const skillbarsDiv = document.querySelector(".skillbars");
        if (skillbarsDiv) {
            skillBarsRef.current = skillbarsDiv.getBoundingClientRect();
        }
    }, []);

    const { t } = useTranslation("en", { useSuspense: false });

    return (
        <div className="skills_page bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="flex items-center justify-center px-4 mx-auto">
                <Grid_logos logos={logos} skillBarsRef={skillBarsRef} />
                <div className="skills-bars">
                    <div>
                        <p className="text-center text-white text-3xl">
                            <b>{t("skills.Title_Languages")}</b>
                        </p>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: "100%" }}
                            >
                                HTML
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: "90%" }}
                            >
                                CSS
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: "70%" }}
                            >
                                JavaScript
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: "60%" }}
                            >
                                PHP
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: "50%" }}
                            >
                                JSX
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: "70%" }}
                            >
                                Twig
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: "60%" }}
                            >
                                Typescript
                            </div>
                        </div>
                        <p className="text-center text-white text-3xl mt-5">
                            <b>{t("skills.Title_Frameworks")}</b>
                        </p>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: "90%" }}
                            >
                                Bootstrap
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: "80%" }}
                            >
                                Tailwind
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: "70%" }}
                            >
                                Jquery
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: "70%" }}
                            >
                                REACT
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: "70%" }}
                            >
                                NextJS
                            </div>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-fill"
                                style={{ width: "60%" }}
                            >
                                Symfony
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
