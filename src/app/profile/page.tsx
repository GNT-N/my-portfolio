"use client";
import React from "react";
import { Navigation } from "../components/nav";
import { useTranslation } from "react-i18next";
import Profile_Carousel from "../components/carousel";
import CarouselTexte from "../components/carousel_text";

export default function posts() {
  const { t } = useTranslation("en", { useSuspense: false });
  const profileDescriptionHTML = { __html: t("profile.Description") };
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-center">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-10 max-w-7xl">
        <h2 className="text-3xl text-center font-bold text-zinc-100 sm:text-4xl mt-5">
          Nicolas Gonot
        </h2>
        <div className="inline-grid lg:grid-cols-2 mt-0 gap-2 sm:grid-cols-1">
          <p className="font-bold text-zinc-100">
            <img
              src={`/logos/telephone.svg`}
              alt={`Logo php`}
              className="w-8 h-8 mx-2 inline-block"
            />
            +33 6 - 89 - 79 - 95 - 09
          </p>
          <p className="font-bold text-zinc-100">
            <img
              src={`/logos/location.svg`}
              alt={`Logo php`}
              className="w-8 h-8 mx-2 inline-block"
            />
            Lyon
          </p>
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="text-center text-zinc-400 mx-auto">
          <p dangerouslySetInnerHTML={profileDescriptionHTML} />
        </div>

        <p className="text-center font-bold text-lg text-zinc-100">Aptitude</p>
        <CarouselTexte />

        <div className="w-full h-px bg-zinc-800" />

        <h2 className="text-center font-bold text-lg text-zinc-100">
          Centres d'interrêts
        </h2>
        <div
          style={{
            position: "relative",
            maxWidth: "600px",
            margin: "0 auto",
            zIndex: 2,
          }}
        >
          <Profile_Carousel />
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <div className="w-full h-px md:block" />
      </div>
    </div>
  );
}
