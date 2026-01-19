import { lazy, useState, Suspense } from "react";
import ProjectCard from "./ProjectCard";
import { cardData } from "./projectsData";

const MixedProjectsModal = lazy(() => import("./MixedProjectsModal"));

export default function Project() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div id="projects" className="projects sm:rounded-3xl sm:my-8 sm:mr-12">
        <h1>Projects</h1>
        <div className="divider-gradient" />
        <div className="box grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
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