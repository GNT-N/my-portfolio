"use client";
import React from "react";
import { Navigation } from "../components/nav";
import { useTranslation } from "react-i18next";
import Profile_Carousel from "../components/carousel";

export default function posts() {
  const { t } = useTranslation("en", { useSuspense: false });
  const profileDescriptionHTML = { __html: t("profile.Description") };
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-center">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <h2 className="text-3xl text-center font-bold text-zinc-100 sm:text-4xl mt-5">
          Nicolas Gonot
        </h2>
        <div className="inline-grid lg:grid-cols-2 mt-0 gap-2 sm:grid-cols-1">
          <p className="text-zinc-400">
            <img
              src={`/logos/telephone.svg`}
              alt={`Logo php`}
              className="w-8 h-8 mx-2 inline-block"
            />
            +33 6 - 89 - 79 - 95 - 09
          </p>
          <p className="text-zinc-400">
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

        <div className="w-full h-px bg-zinc-800" />

        <p>Aptitude</p>

        <h2 className="text-xl text-center font-bold text-zinc-100 sm:text-2xl">
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
