import { LuExternalLink } from "react-icons/lu";

export default function SmallProjectCard({ project }) {
    return (
        <a href={project.linkUrl} target="_blank" rel="noopener noreferrer" className={`group relative p-5 rounded-xl border border-white/10 bg-gradient-to-br ${project.color} hover:border-violet-400/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] overflow-hidden`}>
            <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                        {project.name}
                    </h3>
                    <LuExternalLink className="size-5 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden />
                </div>
                <p className="text-sm text-gray-300/80 mb-4 leading-relaxed">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 text-xs rounded-md bg-white/10 text-gray-200/90 border border-white/10">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
    );
}