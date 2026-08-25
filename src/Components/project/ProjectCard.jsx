import { LuExternalLink } from "react-icons/lu";
import { SiGithub } from "../../utils/icons";
import TechPill from "./TechPill";

export default function ProjectCard({ imageUrl, linkUrl, githubUrl, Name, discription, techStck, onMixedClick }) {
    const clickable = Boolean(linkUrl);
    const isMixedCard = !linkUrl && Name.includes("Mixed");

    const handleClick = (e) => {
        if (isMixedCard && onMixedClick) {
            e.preventDefault();
            onMixedClick();
        }
    };

    return (
        <article className={`sk project group relative overflow-hidden rounded-md border border-white/10 bg-white/0 transition-all duration-300 hover:border-violet-400/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] ${isMixedCard ? 'cursor-pointer' : ''}`} onClick={handleClick}>
            <div className="relative aspect-[16/12] overflow-hidden sm:aspect-[16/11]">
                {clickable ? (
                    <a href={linkUrl} target="_blank" rel="noopener noreferrer" aria-label={`${Name} – open`}>
                        <img src={imageUrl} alt={Name} className="h-full w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-[1.00]" />
                    </a>
                ) : (
                    <div className="relative h-full w-full">
                        <img src={imageUrl} alt={Name} className="h-full w-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105" />
                        {isMixedCard && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
                                <span className="rounded-lg border-2 border-violet-500 bg-violet-500/10 px-3 py-2 text-center text-sm font-medium text-white sm:px-4 sm:text-base">
                                    View Projects
                                </span>
                            </div>
                        )}
                    </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="text-box px-3 py-3 sm:px-4 sm:py-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="min-w-0 text-base sm:text-lg">{Name}</span>
                    {clickable && (
                        <a href={linkUrl} target="_blank" rel="noopener noreferrer" aria-label={`${Name} – live site`} title="Open live site" className="inline-flex min-h-8 min-w-8 items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white">
                            <LuExternalLink className="size-4 sm:size-5" aria-hidden />
                        </a>
                    )}
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${Name} – GitHub repository`} title="Open GitHub repository" className="inline-flex min-h-8 min-w-8 items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white">
                            <SiGithub className="size-4 sm:size-5" aria-hidden />
                        </a>
                    )}
                </div>
                <hr className="mb-2" />
                <p className="font-sans text-sm font-normal leading-6 opacity-80 sm:text-base">{discription}</p>
            </div>

            <div className="btn-box mb-3 flex flex-wrap px-3 sm:mb-4 sm:px-4">
                {techStck.map((tech, i) => (
                    <TechPill key={i} label={tech} />
                ))}
            </div>
        </article>
    );
}