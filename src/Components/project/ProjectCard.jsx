import { LuExternalLink } from "react-icons/lu";
import TechPill from "./TechPill";

export default function ProjectCard({ imageUrl, linkUrl, Name, discription, techStck, onMixedClick }) {
    const clickable = Boolean(linkUrl);
    const isMixedCard = !linkUrl && Name.includes("Mixed");

    const handleClick = (e) => {
        if (isMixedCard && onMixedClick) {
            e.preventDefault();
            onMixedClick();
        }
    };

    return (
        <article
            className={`project relative group border bg-white/0 border-white/10 hover:border-violet-400/40 rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] ${isMixedCard ? 'cursor-pointer' : ''}`}
            onClick={handleClick}
        >
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
                {clickable ? (
                    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-xl inline-flex items-center gap-2">
                        {Name}
                        <LuExternalLink className="ml-2 size-4 opacity-70 group-hover:opacity-100" aria-hidden />
                    </a>
                ) : (
                    <span className="text-xl">{Name}</span>
                )}
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