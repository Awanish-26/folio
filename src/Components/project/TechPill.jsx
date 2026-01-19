import { SiTailwindcss, SiHtml5, SiJavascript, SiDjango, SiCss3, SiPython, SiReact, SiElectron, SiFirebase, SiNodedotjs, SiGithub } from "../../utils/icons";

const techIconMap = {
    "Tailwind CSS": SiTailwindcss,
    HTML: SiHtml5,
    Javascript: SiJavascript,
    Django: SiDjango,
    CSS: SiCss3,
    Python: SiPython,
    React: SiReact,
    Electron: SiElectron,
    Firebase: SiFirebase,
    Node: SiNodedotjs,
    Rainmeter: SiGithub,
    Prisma: SiGithub,
    Lua: SiGithub
};

export default function TechPill({ label }) {
    const Icon = techIconMap[label];

    return (
        <span className="mr-2 mb-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200/90 transition-all hover:bg-violet-500/10 hover:border-violet-400/40">
            {Icon ? <Icon className="size-4 opacity-90" aria-hidden /> : null}
            <span>{label}</span>
        </span>
    );
}