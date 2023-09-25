import Link from "next/link";
import React from "react";
import Particles from "../components/particles";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />

		</div>
	);
}