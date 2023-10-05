import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { initReactI18next, useTranslation } from "react-i18next";

export const Navigation: React.FC = () => {

	const { t, i18n } = useTranslation();
	const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

	function handleLangChange(event: any) {
		const selectedLang = event.target.value;
		i18n.changeLanguage(selectedLang);
		setSelectedLanguage(selectedLang);
	}
	  
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>
				<div className="flex flex-row-reverse items-center justify-between p-6 mx-auto max-w-7xl">
					<div className="flex justify-between gap-4">
						<Link
							href="/profile"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							{t('menu.Profile')}
						</Link>
						<Link
							href="/projects"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							{t('menu.Projects')}
						</Link>
						<Link
							href="/skills"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							{t('menu.Skills')}
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							{t('menu.Contact')}
						</Link>

						<select  
							className="text-zinc-400 hover:text-zinc-100 rounded bg-transparent"
							onChange={handleLangChange}
							value={selectedLanguage}
						>
							<option className="bg-black" value="en">En</option>
							<option className="bg-black" value="fr">Fr</option>
							<option className="bg-black" value="vn">Vn</option>
						</select>

					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
		</header>
	);
};
