import { Card } from "../components/card";
import { Navigation } from "../components/nav";

const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function skills() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 h-screen">
        <Navigation />

        </div>
    );
}
