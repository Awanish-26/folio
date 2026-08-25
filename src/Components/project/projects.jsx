import { lazy, useState, Suspense } from "react";
import ProjectCard from "./ProjectCard";
import { cardData } from "./projectsData";

const MixedProjectsModal = lazy(() => import("./MixedProjectsModal"));

export default function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div id="projects" className="sk projects overflow-auto sm:my-8 sm:mr-12 sm:rounded-3xl">
        <h1 className="px-3 sm:px-0">Projects</h1>
        <div className="sk divider-gradient" />
        <div className="box grid grid-cols-1 gap-3 px-2 sm:grid-cols-2 sm:gap-4 sm:px-0 lg:grid-cols-3">
          <ProjectCard {...cardData.card1} />
          <ProjectCard {...cardData.card2} />
          <ProjectCard {...cardData.card3} onMixedClick={() => setIsModalOpen(true)} />
        </div>
      </div>

      {isModalOpen && (
        <Suspense fallback={null}>
          <MixedProjectsModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
}