import { LuX } from "react-icons/lu";
import SmallProjectCard from "./SmallProjectCard";
import { smallProjects } from "./projectsData";

export default function MixedProjectsModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8" onClick={onClose}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            <div className="sk relative max-h-[94vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-gray-900/95 to-gray-800/95 shadow-2xl backdrop-blur-xl sm:max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                <div className="sticky top-0 z-10 border-b border-white/10 bg-gradient-to-b from-gray-900/95 to-gray-900/80 px-4 py-4 backdrop-blur-xl sm:px-6 sm:py-5">
                    <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                            <h2 className="mb-1 text-xl font-bold text-white sm:text-2xl md:text-3xl">Mixed Projects</h2>
                            <p className="text-sm text-gray-400">A collection of various small projects and utilities</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="inline-flex min-h-10 min-w-10 shrink-0 items-center justify-center rounded-lg p-2 transition-colors hover:bg-white/10 focus-ring"
                            aria-label="Close modal"
                        >
                            <LuX className="size-6 text-gray-300" />
                        </button>
                    </div>
                </div>

                <div className="sk max-h-[calc(94vh-92px)] overflow-y-auto p-3 sm:max-h-[calc(90vh-100px)] sm:p-6">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
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