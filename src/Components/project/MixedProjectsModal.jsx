import { LuX } from "react-icons/lu";
import SmallProjectCard from "./SmallProjectCard";
import { smallProjects } from "./projectsData";

export default function MixedProjectsModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8" onClick={onClose}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            <div className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="sticky top-0 z-10 px-6 py-5 bg-gradient-to-b from-gray-900/95 to-gray-900/80 backdrop-blur-xl border-b border-white/10">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">Mixed Projects</h2>
                            <p className="text-sm text-gray-400">A collection of various small projects and utilities</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-white/10 transition-colors focus-ring"
                            aria-label="Close modal"
                        >
                            <LuX className="size-6 text-gray-300" />
                        </button>
                    </div>
                </div>

                <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {smallProjects.map((project, index) => (
                            <SmallProjectCard key={index} project={project} />
                        ))}
                    </div>

                    {/* <div className="mt-6 p-6 rounded-xl border border-dashed border-white/20 bg-white/[0.02] text-center">
                        <p className="text-gray-400 text-sm">
                            More projects coming soon...
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}