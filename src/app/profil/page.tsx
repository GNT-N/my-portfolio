"use client";
import React from "react";
import { Navigation } from "../components/nav";

export default function posts() {
    return (
        <div className="custom-min-height bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        	<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<h2 className="text-3xl text-center font-bold tracking-tight text-zinc-100 sm:text-4xl mt-5">
					Nicolas Gonot.
				</h2>
				<div className="w-full h-px bg-zinc-800" />
				<div className="w-full text-center mx-auto">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur ullamcorper ligula, ut tincidunt mauris egestas non. Pellentesque convallis consectetur neque, et pellentesque odio ornare non. Pellentesque nec nulla aliquam, aliquet est vel, vulputate ipsum. Etiam vitae tempor dui. Aliquam ultrices felis libero, a feugiat sapien porta at. Praesent porta, neque a porttitor pharetra, turpis nisi lobortis lacus, id vehicula magna sem sit amet erat. Fusce ut ex vel orci convallis dictum ac lacinia nulla. Proin rhoncus imperdiet erat sed dignissim. Ut vel purus et tortor feugiat semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu eros risus. Pellentesque hendrerit mi id feugiat mollis. Suspendisse potenti. Sed id nibh sapien. In quis mattis erat.
				</div>
				<div className="w-full h-px bg-zinc-800" />
				<div className="w-full text-center mx-auto">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur ullamcorper ligula, ut tincidunt mauris egestas non. Pellentesque convallis consectetur neque, et pellentesque odio ornare non. Pellentesque nec nulla aliquam, aliquet est vel, vulputate ipsum. Etiam vitae tempor dui. Aliquam ultrices felis libero, a feugiat sapien porta at. Praesent porta, neque a porttitor pharetra, turpis nisi lobortis lacus, id vehicula magna sem sit amet erat. Fusce ut ex vel orci convallis dictum ac lacinia nulla. Proin rhoncus imperdiet erat sed dignissim. Ut vel purus et tortor feugiat semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu eros risus. Pellentesque hendrerit mi id feugiat mollis. Suspendisse potenti. Sed id nibh sapien. In quis mattis erat.
				</div>
				<div className="w-full h-px bg-zinc-800" />
			</div>
        </div>
    );
}