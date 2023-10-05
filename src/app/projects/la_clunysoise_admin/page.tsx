"use client";
import React from "react";
import Image from "next/image";
import { Navigation } from "../../components/nav";
import Login_1 from "../../../../public/la_clunysoise/admin/login1.png";
import Login_2 from "../../../../public/la_clunysoise/admin/login2.png";
import Interface from "../../../../public/la_clunysoise/admin/interface.png";

const logos = [
    'html5',
    'css3',
    'javascript',
    'php',
	'sql',
    'twig',
    'bootstrap',
    'symfony',
    'laragon',
    'github',
];

export default function posts() {
    return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-center">
        	<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				
				<div className="mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mt-5">
						La Clunysoise admin interface.
					</h2>
					<p className="mt-4 text-zinc-400">
						Creation of an administration interface to manage site content (Prices / Services / Description).
					</p>
					<p className="mt-4 text-zinc-400 text-center">
						Technology :
                        - HTML5
                        - CSS3
                        - JavaScript
                        - PHP
                        - SQL
						- Twig
                        - Bootstrap
                        - Symfony 6
						- Laragon
						- Github
					</p>
				</div>

				<div className="w-full h-px bg-zinc-800" />
				<section className="mx-auto text-center">
					<div className="inline-grid grid-cols-10 mt-0 gap-10">
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

				<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-1 lg:gap-16">
					<Image
						src={Interface}
						alt="Login Screen"
						height={800}
						width={1200}
						className="rounded-xl"
					/>
				</div>

				<div className="w-full h-px bg-zinc-800" />

					<div className="grid item-center w-full grid-cols-1 gap-2 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-4">
					<Image
						src={Login_1}
						alt="Login Screen"
						width={500}
						className="rounded-xl"
					/>
					<p className="mt-4 text-zinc-400 text-center">
						Implementation of security by authentication to protect access to the site administration area.
					</p>
					<Image
						src={Login_2}
						alt="Login Screen"
						width={900}
						height={1000}
						className="rounded-xl"
					/>
					</div>

				<div className="w-full h-px bg-zinc-800" />

			</div>
        </div>
    );
}