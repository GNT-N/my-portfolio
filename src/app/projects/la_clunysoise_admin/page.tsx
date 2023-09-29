"use client";
import React from "react";
import { Navigation } from "../../components/nav";

export default function posts() {
    return (
        <div className="custom-min-height bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        	<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mt-5">
						La Clunysoise admin interface.
					</h2>

				</div>

				<div className="w-full h-px bg-zinc-800" />

				<div className="container flex items-center justify-center px-4 mx-auto">
					<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:gap-16">

					</div>
				</div>

			</div>
        </div>
    );
}