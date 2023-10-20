"use client";
import React from "react";
import Link from "next/link";
import { Card } from "../components/card";
import { Navigation } from "../components/nav";
import { useTranslation } from "react-i18next";
import projectsData from "../projects/projects.json";
import { Gamepad2, Laptop2, Pencil, ClipboardEdit } from "lucide-react";

const prod = [
    // {
    //     id: "",
    //     icon: <Laptop2 size={20} />,
    //     href: "https://steamcommunity.com/profiles/76561198052767844/",
    //     label: "Steam",
    //     handle: "Skuall",
    // },
    {
        id: " Realtime BPM Analyzer ",
        icon: <Laptop2 size={20} />,
        href: "",
        label: "in production",
        handle: "BPM Analyzer",
    },
    {
        id: "L'atelier de Nathalie",
        icon: <Laptop2 size={20} />,
        href: "",
        label: "in production",
        handle: "L'atelier de Nathalie",
    },
];

export default function posts() {
    const { t } = useTranslation("en", { useSuspense: false });

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 text-center">
            <Navigation />
            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16">
                <div className="mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mt-5">
                        {t("projects.Title")}
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        {t("projects.Description")}
                    </p>
                </div>

                <div className="w-full h-px bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
                    <Card>
                        <Link
                            href=""
                            className="p-4 flex flex-col items-center gap-8 duration-700"
                        >
                            {/* <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                                    gonot-nicolas.com
                                </h2>
                                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    En production ...
                                </p> */}
                            <span
                                className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                aria-hidden="true"
                            />
                            <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
                                <Laptop2 size={20} />
                            </span>{" "}
                            <div className="z-10 flex flex-col items-center">
                                <span className="mt-8 lg:mt-12 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                                    {"G-Corp.com"}
                                </span>
                                <span className="mt-4 mb-8 lg:mt-16 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                    {"in production"}
                                </span>
                            </div>
                        </Link>
                    </Card>

                    <div className="grid grid-cols-1 gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
                        {prod.map((x) => (
                            <Card key={x.id}>
                                <Link
                                    href={x.href}
                                    target=""
                                    className="p-4 relative flex flex-col items-center gap-8 duration-700"
                                >
                                    <span
                                        className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                        aria-hidden="true"
                                    />
                                    <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
                                        {x.icon}
                                    </span>{" "}
                                    <div className="z-10 flex flex-col items-center">
                                        <span className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                                            {x.handle}
                                        </span>
                                        <span className="mt-4 mb-8 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                            {x.label}
                                        </span>
                                    </div>
                                </Link>
                            </Card>
                        ))}
                        {/* <div className="mt-10">
                            <Card>
                                <Link href="">
                                    <div className="relative w-full h-full p-4 md:p-8">
                                        <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                                            " L'atelier de Nathalie "
                                        </h2>
                                        <p className="mt-4 mb-8 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                            En production ...
                                        </p>
                                    </div>
                                </Link>
                            </Card>
                        </div> */}
                        {/* <div className="mb-auto">
                            <Card>
                                <Link href="">
                                    <div className="relative w-full h-full p-4 md:p-8">
                                        <h2 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                                            " Pizzeria "
                                        </h2>
                                        <p className="mt-4 mb-8 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                                            En production ...
                                        </p>
                                    </div>
                                </Link>
                            </Card>
                        </div> */}
                    </div>
                </div>

                <div className="w-full h-px md:block bg-zinc-800" />

                <div className="grid grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2">
                    {projectsData.map((p) => (
                        <Card key={p.id}>
                            <Link
                                href={p.href}
                                className="p-4 relative flex flex-col items-center gap-8 duration-700 "
                            >
                                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200">
                                    {p.icon === "Laptop2" && (
                                        <Laptop2 size={20} />
                                    )}
                                    {p.icon === "Pencil" && (
                                        <Pencil size={20} />
                                    )}
                                    {p.icon === "ClipboardEdit" && (
                                        <ClipboardEdit size={20} />
                                    )}
                                </span>{" "}
                                <div className="z-10 flex flex-col items-center">
                                    <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                                        {p.handle}
                                    </span>
                                    <span className="mt-2 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                                        {p.label}
                                    </span>
                                </div>
                                <span
                                    className="absolute left-1/2 transform -translate-x-1/2 w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <div className="bottom-4">
                                    <p className="text-zinc-200 hover:text-zinc-50 lg:block">
                                        Read more{" "}
                                        <span aria-hidden="true">&rarr;</span>
                                    </p>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>

                <div className="w-full h-px md:block bg-zinc-800" />
                <div className="w-full h-px md:block" />
            </div>
        </div>
    );
}
