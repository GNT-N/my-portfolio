"use client";
import React from "react";
import Image from "next/image";
import { Navigation } from "../../components/nav";
import { initReactI18next, useTranslation } from "react-i18next";
import Home from "../../../../public/la_clunysoise/website/Home.png";
import Actus from "../../../../public/la_clunysoise/website/Actus.png";
import Form1 from "../../../../public/la_clunysoise/website/Form1.png";
import Form_Time from "../../../../public/la_clunysoise/website/Form_clock.png";
import Form_Date from "../../../../public/la_clunysoise/website/Form_date.png";
import Post_ambu from "../../../../public/la_clunysoise/website/Post_ambu.png";

const logos = [
  "html5",
  "css3",
  "javascript",
  "php",
  "sql",
  "twig",
  "bootstrap",
  "symfony",
  "laragon",
  "github",
];

export default function posts() {
  const { t } = useTranslation("en");
  const projectsLa_Clunysoise_websiteTitleHTML = {
    __html: t("projects.La_Clunysoises_website.Title"),
  };
  const projectsLa_Clunysoise_websiteDescriptionHTML = {
    __html: t("projects.La_Clunysoises_website.Description"),
  };
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 ">
        <div className="mx-auto lg:mx-0">
          <h2
            className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mt-5"
            dangerouslySetInnerHTML={projectsLa_Clunysoise_websiteTitleHTML}
          />
          <p
            className="mt-4 text-zinc-400"
            dangerouslySetInnerHTML={
              projectsLa_Clunysoise_websiteDescriptionHTML
            }
          />
        </div>

        <div className="w-full h-px bg-zinc-800" />
        <section className="mx-auto text-center">
          <div className="inline-grid grid-cols-10 mt-0 gap-5">
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
            src={Home}
            alt="Login Screen"
            className="rounded-xl "
            width={1200}
          />
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="justify-center w-full gap-8 sm:mt-0 lg:gap-16 flex">
          <Image
            src={Actus}
            alt="Actus screen"
            className="rounded-xl"
            width={1200}
          />
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="justify-center w-full gap-8 sm:mt-0 lg:gap-16 flex">
          <Image
            src={Post_ambu}
            alt="Actus screen"
            className="rounded-xl"
            width={1200}
          />
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="justify-center w-full gap-8 sm:mt-0 lg:gap-16 flex">
          <Image
            src={Form1}
            alt="Form screen"
            className="rounded-xl"
            width={1200}
          />
        </div>
        <div className="justify-center w-full gap-8 sm:mt-0 lg:gap-16 flex">
          <Image
            src={Form_Date}
            alt="Selected date screen"
            className="rounded-xl hover:scale-125  
						duration-150 ease-in-out"
            width={250}
          />
          <Image
            src={Form_Time}
            alt="Selected time screen"
            className="rounded-xl hover:scale-125  
						duration-150 ease-in-out"
            width={250}
          />
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="w-full h-px" />
      </div>
    </div>
  );
}
