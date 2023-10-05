"use client";
import React from "react";
import { Navigation } from "../components/nav";

export default function posts() {
    return (
		<div className="w-screen h-screen overflow-hidden bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-center">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
			<h2 className="text-3xl text-center font-bold text-zinc-100 sm:text-4xl mt-5">
				Nicolas Gonot
			</h2>
			<div className="w-full h-px bg-zinc-800" />
			<div className="w-full text-center mx-auto">
				<p>
					Développeur web full stack fraichement diplômé , laisser moi vous embarquer dans mon univers. <br/><br/>

					Agé de 31 ans j'ai toujour été pationné par l'informatique et les nouvelles technologies. Dès mon plus jeune âge j'aimais déja explorer la configuration de mon pc pour améliorer ces performances en permanance ou trouver et exploiter les failles de sécurité de divers logiciels ou jeux video toujours dans le but d'en apprendre plus. <br/><br/> 

					Ambulancier spécialisé dans l'ugence de 10 ans d'expérience dans plusieur régions de france comme la haute montagne l'agglomération lyonnaise ou encore le sud de la france , j'ai décider d'effectuer une transition proféssionelle. <br/><br/>

					
				</p>
			</div>
			<div className="w-full h-px bg-zinc-800" />
			<div className="w-full text-center mx-auto">
				<h2 className="text-xl text-center font-bold text-zinc-100 sm:text-2xl mt-5">- Centres d'interrêts -</h2>
			</div>
			<div className="w-full h-px bg-zinc-800" />
			<div className="w-full h-px md:block" />

			</div>
		</div>
    );
}

