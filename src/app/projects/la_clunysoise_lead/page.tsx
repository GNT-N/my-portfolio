"use client";
import React from "react";
import { Navigation } from "../../components/nav";

const logos = [
    'vercel',
    'github',
];

export default function posts() {
    return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-center">
        	<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				
				<div className="mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mt-5">
						La Clunysoise project management.
					</h2>
					<p className="mt-4 text-zinc-400">
						Complete management of the company's website creation project including the creation & drafting of contracts, specifications and other legal documents as well as taking photos and writing the various contents of the website for "turnkey" delivery " of the project.
                    </p>
					<p className="mt-4 text-zinc-400 text-center">
						Technology :
						- Github
						- Vercel
                        - Trello
						- Google Drive
						- Google Meet
						- Google Doc
					</p>
				</div>

				<div className="w-full h-px bg-zinc-800" />
				<section className="mx-auto text-center">
					<div className="inline-grid grid-cols-2 mt-0 gap-10">
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

				<div className="container flex items-center justify-center px-4 mx-auto">
					<div className="grid w-full">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat tellus ac luctus varius. Suspendisse augue tellus, dignissim vel porta non, hendrerit quis ex. Morbi volutpat ac libero at ultrices. Donec varius vel magna id vestibulum. Praesent commodo justo fringilla elementum feugiat. Morbi fringilla risus ut risus rhoncus tincidunt. Fusce id nunc sodales, bibendum dui eu, feugiat orci. Pellentesque vehicula fringilla est, vitae molestie nulla ullamcorper a. Nam felis erat, egestas sit amet urna a, volutpat tincidunt lorem. Donec orci ex, imperdiet vehicula purus et, elementum tristique erat. Vestibulum semper porttitor libero, at pellentesque sem vehicula a. Donec sed semper leo, ut convallis felis.
					</div>
				</div>

				
				<div className="w-full h-px bg-zinc-800" />
				<div className="w-full h-px" />

			</div>
        </div>
    );
}
