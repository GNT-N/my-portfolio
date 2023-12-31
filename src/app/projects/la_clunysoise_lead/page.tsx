"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Navigation } from "../../components/nav";
import Trello from "../../../../public/la_clunysoise/lead/Trello.png";

const logos = ["vercel", "github", "trello", "google-drive", "google-meet"];

export default function posts() {
  const { t } = useTranslation("en");
  const projectsLa_Clunysoise_leadTitleHTML = {
    __html: t("projects.La_Clunysoises_lead.Title"),
  };
  const projectsLa_Clunysoise_leadDescriptionHTML = {
    __html: t("projects.La_Clunysoises_lead.Description"),
  };
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-center">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="mx-auto lg:mx-0">
          <h2
            className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mt-5"
            dangerouslySetInnerHTML={projectsLa_Clunysoise_leadTitleHTML}
          />
          <p
            className="mt-4 text-zinc-400"
            dangerouslySetInnerHTML={projectsLa_Clunysoise_leadDescriptionHTML}
          />
        </div>

        <div className="w-full h-px bg-zinc-800" />
        <section className="mx-auto text-center">
          <div className="inline-grid grid-cols-5 mt-0 gap-10">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={`/logos/${logo}.svg`}
                alt={`Logo ${logo}`}
                className="w-10 h-10 inline-block"
              />
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-zinc-800" />
        <div className="justify-center w-full gap-8 sm:mt-0 lg:gap-16 flex">
          <Image
            src={Trello}
            alt="Actus screen"
            className="rounded-xl"
            width={1200}
          />
        </div>
        <div className="container flex items-center justify-center px-4 mx-auto">
          <div className="w-full">Trello Dashboard</div>
        </div>

        <div className="w-full h-px bg-zinc-800" />
        <div className="w-full h-px" />
      </div>
    </div>
  );
}
