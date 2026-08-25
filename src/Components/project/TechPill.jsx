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
        <span className="sk mb-1.5 mr-1.5 inline-flex max-w-full items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-gray-200/90 transition-all hover:border-violet-400/40 hover:bg-violet-500/10 sm:px-2.5 sm:text-xs">
            {Icon ? <Icon className="size-3 opacity-90" aria-hidden /> : null}
            <span className="truncate">{label}</span>
        </span>
    );
}