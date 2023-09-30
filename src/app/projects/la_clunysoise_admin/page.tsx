"use client";
import React from "react";
import Image from "next/image";
import { Navigation } from "../../components/nav";
import Login_1 from "../../../../public/la_clunysoise/admin/login1.png";
import Login_2 from "../../../../public/la_clunysoise/admin/login2.png";
import Interface from "../../../../public/la_clunysoise/admin/interface.png";

export default function posts() {
    return (
        <div className="custom-min-height bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        	<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				
				<div className="mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mt-5">
						La Clunysoise admin interface.
					</h2>
					<p className="mt-4 text-zinc-400">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur ullamcorper ligula, ut tincidunt mauris egestas non. Pellentesque convallis consectetur neque, et pellentesque odio ornare non. Pellentesque nec nulla aliquam, aliquet est vel, vulputate ipsum. Etiam vitae tempor dui. Aliquam ultrices felis libero, a feugiat sapien porta at. Praesent porta, neque a porttitor pharetra, turpis nisi lobortis lacus, id vehicula magna sem sit amet erat. Fusce ut ex vel orci convallis dictum ac lacinia nulla. Proin rhoncus imperdiet erat sed dignissim. Ut vel purus et tortor feugiat semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu eros risus. Pellentesque hendrerit mi id feugiat mollis. Suspendisse potenti. Sed id nibh sapien. In quis mattis erat.
					</p>
				</div>

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

				<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-1 lg:gap-16">
					<p className="mt-4 text-zinc-400 text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur ullamcorper ligula, ut tincidunt mauris egestas non. Pellentesque convallis consectetur neque, et pellentesque odio ornare non. Pellentesque nec nulla aliquam, aliquet est vel, vulputate ipsum. Etiam vitae tempor dui. Aliquam ultrices felis libero, a feugiat sapien porta at. Praesent porta, neque a porttitor pharetra, turpis nisi lobortis lacus, id vehicula magna sem sit amet erat. Fusce ut ex vel orci convallis dictum ac lacinia nulla. Proin rhoncus imperdiet erat sed dignissim. Ut vel purus et tortor feugiat semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu eros risus. Pellentesque hendrerit mi id feugiat mollis. Suspendisse potenti. Sed id nibh sapien. In quis mattis erat.

						In faucibus, diam vitae tristique euismod, sem orci eleifend sem, eu ultricies eros enim a mauris. Proin quis dignissim turpis. In cursus feugiat magna faucibus maximus. Nullam placerat pretium dapibus. Fusce metus purus, pharetra in rhoncus vel, fermentum sed odio. Sed vehicula odio non nisi cursus consequat. Sed gravida blandit est eu dapibus. Duis interdum elit et nisi scelerisque, nec consequat nulla congue. Fusce urna elit, accumsan vel finibus sit amet, varius a enim. Vivamus dignissim nec tortor vel aliquam. Curabitur vel metus ut ipsum viverra aliquet id at tellus. Etiam ex velit, dapibus sed eleifend efficitur, ultricies eget purus. Ut erat ipsum, porttitor vel eleifend eget, commodo vel metus.
					</p>
				</div>

				<div className="w-full h-px bg-zinc-800" />

					<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-3 lg:gap-16">
					<Image
						src={Login_1}
						alt="Login Screen"
						width={370}
						className="rounded-xl"
					/>
					<p className="mt-4 text-zinc-400 text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur ullamcorper ligula, ut tincidunt mauris egestas non. Pellentesque convallis consectetur neque, et pellentesque odio ornare non. Pellentesque nec nulla aliquam, aliquet est vel, vulputate ipsum. Etiam vitae tempor dui. Aliquam ultrices felis libero, a feugiat sapien porta at. Praesent porta, neque a porttitor pharetra, turpis nisi lobortis lacus, id vehicula magna sem sit amet erat. Fusce ut ex vel orci convallis dictum ac lacinia nulla. Proin rhoncus imperdiet erat sed dignissim. Ut vel purus et tortor feugiat semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent eu eros risus. Pellentesque hendrerit mi id feugiat mollis. Suspendisse potenti. Sed id nibh sapien. In quis mattis erat.
					</p>
					<Image
						src={Login_2}
						alt="Login Screen"
						width={800}
						className="rounded-xl"
					/>
					</div>

				<div className="w-full h-px bg-zinc-800" />

			</div>
        </div>
    );
}