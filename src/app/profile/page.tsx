"use client";
import React from "react";
import { Navigation } from "../components/nav";
import { useTranslation } from "react-i18next";


export default function posts() {
	const { t } = useTranslation('en', { useSuspense: false }); 
	const profileDescriptionHTML = { __html: t('profile.Description') };
    return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-center">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">

				<h2 className="text-3xl text-center font-bold text-zinc-100 sm:text-4xl mt-5">
					Nicolas Gonot
				</h2>
				<div className="inline-grid grid-cols-2 mt-0 gap-2 ">
					<p>					
						<img
							src={`/logos/telephone.svg`}
							alt={`Logo php`}
							className="w-8 h-8 mx-2 inline-block"
						/>
						+33 6 - 89 - 79 - 95 - 09
					</p>
					<p>
						<img
							src={`/logos/location.svg`}
							alt={`Logo php`}
							className="w-8 h-8 mx-2 inline-block"
						/>
						Lyon</p>
				</div>

				<div className="w-full h-px bg-zinc-800" />

				<div className="w-full text-center mx-auto">
					<p dangerouslySetInnerHTML={profileDescriptionHTML} />
				</div>

				<div className="w-full h-px bg-zinc-800" />

				<div className="w-full text-center mx-auto">
					<h2 className="text-xl text-center font-bold text-zinc-100 sm:text-2xl mt-5">- Centres d'interrêts -</h2>
				</div>

				
				<div id="default-carousel" className="relative w-full" data-carousel="slide">
			
					<div className="relative h-56 overflow-hidden rounded-lg md:h-96">
	
						<div className="hidden duration-700 ease-in-out" data-carousel-item>
							<img 
								src="" 
								className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
								alt="..."
							/>
							<p>TEST1</p>
						</div>
						
						<div className="hidden duration-700 ease-in-out" data-carousel-item>
							<img 
								src="" 
								className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
								alt="..."
							/>
							<p>TEST2</p>
						</div>
						
						<div className="hidden duration-700 ease-in-out" data-carousel-item>
							<img 
								src="" 
								className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
								alt="..."
							/>
							<p>TEST3</p>
						</div>
						
						<div className="hidden duration-700 ease-in-out" data-carousel-item>
							<img 
								src="" 
								className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
								alt="..."
							/>
							<p>TEST4</p>
						</div>
						
						<div className="hidden duration-700 ease-in-out" data-carousel-item>
							<img 
								src="" 
								className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
								alt="..."
							/>
							<p>TEST5</p>
						</div>
					</div>

					<div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
						<button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
						<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
						<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
						<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
						<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
					</div>

					<button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
						<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
							<svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
							</svg>
							<span className="sr-only">Previous</span>
						</span>
					</button>

					<button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
						<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
							<svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
							</svg>
							<span className="sr-only">Next</span>
						</span>
					</button>
					
				</div>


				<div className="w-full h-px bg-zinc-800" />
				<div className="w-full h-px md:block" />
			</div>
		</div>
    );
}

