"use client";
import React from "react";
import Image from "next/image";
import { Navigation } from "../../components/nav";
import Home from "../../../../public/la_clunysoise/website/Home.png";

export default function posts() {
    return (
        <div className="custom-min-height bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        	<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32 ">
				
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mt-5">
						La Clunysoise Website.
					</h2>
					<p className="mt-4 text-zinc-400">
                        Complete website development for a private ambulance company. The website includes several features such as appointment scheduling, contact form, location details, and phone/email contact information.Development carried out using various technologies.
                    </p>
                    <p className="mt-4 text-zinc-400">
                        Language :
                        - HTML5
                        - CSS3
                        - JavaScript
                        - SQL
                        - PHP
                    </p>
                    <p className="mt-4 text-zinc-400">
                        Frameworks :
                        - Bootstrap
                        - jQuery
                        - Symfony 6
					</p>
				</div>

				<div className="w-full h-px bg-zinc-800" />

				<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-1 lg:gap-16">
					<Image
						src={Home}
						alt="Login Screen"
						height={800}
						width={1200}
						className="rounded-xl"
					/>
				</div>

                <div className="w-full h-px bg-zinc-800" />

                <div className="w-full h-px" />

			</div>
        </div>
    );
}
