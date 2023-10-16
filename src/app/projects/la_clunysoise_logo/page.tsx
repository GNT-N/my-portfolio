"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Navigation } from "../../components/nav";
import Carte from "../../../../public/la_clunysoise/logo/carte.png";
import Logo from "../../../../public/la_clunysoise/logo/logo.png";
import Colors from "../../../../public/la_clunysoise/logo/colors.png";

const logos = ["canva"];

export default function posts() {
  const { t } = useTranslation("en");
  const projectsLa_Clunysoise_logoTitleHTML = {
    __html: t("projects.La_Clunysoises_logo.Title"),
  };
  const projectsLa_Clunysoise_logoDescriptionHTML = {
    __html: t("projects.La_Clunysoises_logo.Description"),
  };
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-center h-screen">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 ">
        <div className="mx-auto lg:mx-0">
          <h2
            className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mt-5"
            dangerouslySetInnerHTML={projectsLa_Clunysoise_logoTitleHTML}
          />
          <p
            className="mt-4 text-zinc-400"
            dangerouslySetInnerHTML={projectsLa_Clunysoise_logoDescriptionHTML}
          />
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <section className="mx-auto text-center">
          <div className="inline-grid">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={`/logos/${logo}.svg`}
                alt={`Logo ${logo}`}
                className="w-20 h-20 inline-block"
              />
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-3 gap-4 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-4">
          <Image
            src={Carte}
            alt="Card Company"
            height={400}
            width={400}
            className="rounded-xl mx-auto"
          />
          <Image
            src={Colors}
            alt="Logo colors"
            height={400}
            width={300}
            className="rounded-xl mx-auto"
          />
          <Image
            src={Logo}
            alt="Logo"
            height={400}
            width={400}
            className="rounded-xl mx-auto"
          />
        </div>

        <div className="w-full h-px bg-zinc-800" />
      </div>
    </div>
  );
}
