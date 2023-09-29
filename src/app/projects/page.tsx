"use client";
import React from "react";
import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import { Gamepad2, Laptop2, Pencil, ClipboardEdit } from "lucide-react";

const projects = [
    {
		id: "La Clunysoise Web",
		icon: <Laptop2 size={20} />,
		href: "/projects/la_clunysoise_web",
		label: "Full website development",
		handle: "La Clunysoise website",
    },
    {
		id: "La Clunysoise Admin",
		icon: <Laptop2 size={20} />,
		href: "/projects/la_clunysoise_admin",
		label: "admin interface development",
		handle: "La Clunysoise admin interface",
    },
	{
		id: "La Clunysoise Logo",
		icon: <Pencil size={20} />,
		href: "/projects/la_clunysoise_logo",
		label: "Logo design development",
		handle: "La Clunysoise Logo",
	},
	{
		id: "La Clunysoise Lead",
		icon: <ClipboardEdit size={20} />,
		href: "/projects/la_clunysoise_logo",
		label: "Lead project",
		handle: "La Clunysoise Lead",
	},



    // {
	// 	id: "Project X",
	// 	  icon: <Gamepad2 size={20} />,
	// 	href: "",
	// 	label: "Project X",
	// 	handle: "Project X",
    // },
  ];

export default function posts() {
    return (
        <div className="custom-min-height bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-center">
        	<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				
				<div className="mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mt-5">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Some of the projects are from work and some are on my own time.
					</p>
				</div>

				<div className="w-full h-px bg-zinc-800" />

				<div className="container flex items-center justify-center px-4 mx-auto">
					<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-2 lg:gap-16">
						{projects.map((p) => (
							<Card key={p.id}>
								<Link
								href={p.href}
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
								>
								<span
								className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
								{p.icon}
								</span>{" "}
									<div className="z-10 flex flex-col items-center">
										<span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{p.handle}
										</span>
										<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{p.label}
										</span>
									</div>
								</Link>
							</Card>
						))}
					</div>
				</div>

				<div className="w-full h-px bg-zinc-800" />
				<div className="w-full h-px bg-zinc-800" />

			</div>
        </div>
    );
}
