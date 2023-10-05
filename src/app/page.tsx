"use client";
import React from "react";
import Link from "next/link";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import Particles from "./components/particles";
import { initReactI18next, useTranslation } from "react-i18next";


i18n.use(initReactI18next)
	.use(Backend)
	.init({
		backend: {
			loadPath: '/translation/{{ lng }}/translation.json'
		},
		lng: 'en',
		fallbackLng: 'en',
	})

const navigation = [
	{ name: "Profile", href: "/profile" },
	{ name: "Projects", href: "/projects" },
	{ name: "Skills", href: "/skills" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {

	const { t } = useTranslation('en', { useSuspense: false }); 
	
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black ">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-xl duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{t(`menu.${item.name}`)}
						</Link>
					))}
				</ul>
			</nav>

			<div className="hidden animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Gonot Nicolas
			</h1>

			<div className="hidden animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">
				<h2 className="text-lg text-zinc-500 ">
					{t('home.Description')}
				</h2>
				<h2 className="text-lg text-zinc-500 ">
					PHP / Javascript{" "}
          		</h2>
			</div>

		</div>
	);
}
