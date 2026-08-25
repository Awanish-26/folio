import { LuExternalLink } from "react-icons/lu";

export default function SmallProjectCard({ project }) {
    return (
        <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className={`sk group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br p-4 transition-all duration-300 hover:border-violet-400/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] sm:p-5 ${project.color}`}>
            <div className="relative z-10">
                <div className="mb-3 flex items-start justify-between gap-3">
                    <h3 className="min-w-0 text-base font-semibold leading-6 text-white transition-colors group-hover:text-violet-300 sm:text-lg">
                        {project.name}
                    </h3>
                    <span className="inline-flex min-h-8 min-w-8 shrink-0 items-center justify-center rounded-md opacity-60 transition-opacity group-hover:bg-white/10 group-hover:opacity-100">
                        <LuExternalLink className="size-5" aria-hidden />
                    </span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-300/80">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                        <span key={i} className="sk px-2 py-0.5 text-xs rounded-md bg-white/10 text-gray-200/90 border border-white/10">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
    );
}