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
        <article className={`sk project relative group border bg-white/0 border-white/10 hover:border-violet-400/40 rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] ${isMixedCard ? 'cursor-pointer' : ''}`}    onClick={handleClick}>
            <div className="relative aspect-[16/12] overflow-hidden">
                {clickable ? (
                    <a href={linkUrl} target="_blank" rel="noopener noreferrer" aria-label={`${Name} – open`}>
                        <img src={imageUrl} alt={Name} className="h-full w-full object-cover rounded-md transition-transform duration-300 group-hover:scale-[1.00]" />
                    </a>
                ) : (
                    <div className="relative h-full w-full">
                        <img src={imageUrl} alt={Name} className="h-full w-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105" />
                        {isMixedCard && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="px-4 py-2 bg-violet-500/10 border-2 border-violet-500 text-white rounded-lg font-medium">
                                    View Projects
                                </span>
                            </div>
                        )}
                    </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="text-box">
                <div className="flex items-center gap-3">
                    <span className="text-lg">{Name}</span>
                    {clickable && (
                        <a href={linkUrl} target="_blank" rel="noopener noreferrer" aria-label={`${Name} – live site`} title="Open live site" className="text-white/70 hover:text-white">
                            <LuExternalLink className="size-4" aria-hidden />
                        </a>
                    )}
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${Name} – GitHub repository`} title="Open GitHub repository" className="text-white/70 hover:text-white">
                            <SiGithub className="size-4" aria-hidden />
                        </a>
                    )}
                </div>
                <hr className="mb-2" />
                <p className="font-sans font-normal text-base/6 opacity-80">{discription}</p>
            </div>

            <div className="btn-box px-4 mb-4 flex flex-wrap">
                {techStck.map((tech, i) => (
                    <TechPill key={i} label={tech} />
                ))}
            </div>
        </article>
    );
}