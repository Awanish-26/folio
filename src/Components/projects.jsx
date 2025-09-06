import { LuExternalLink } from "react-icons/lu";
import { SiTailwindcss, SiHtml5, SiJavascript, SiDjango, SiCss3, SiPython, SiReact, SiElectron, SiFirebase } from "react-icons/si";

import project1 from "../images/project-1.jpeg";
import project2 from "../images/project-2.jpeg";
import alpha from "../images/under-construction.jpg";

const description1 = "Designed a sleek shop website using Tailwind CSS with an attractive UI.";
const description2 = "Full-stack blog web application with user registration and login functionality.";
const description3 = "This project is currently under construction.";

const cardData = {
  card1: {
    imageUrl: project1,
    linkUrl: "https://awanish-26.github.io/Tailwind/",
    Name: "Sweet Shop Project",
    discription: description1,
    techStck: ["Tailwind CSS", "HTML", "Javascript", "UI/UX"]
  },
  card2: {
    imageUrl: project2,
    linkUrl: "https://myblog-gold.vercel.app/",
    Name: "MultiUser Blog App",
    discription: description2,
    techStck: ["Django", "HTML", "CSS", "Javascript", "Python"]
  },
  card3: {
    imageUrl: alpha,
    linkUrl: "",
    Name: "Under Construction",
    discription: description3,
    techStck: ["React", "Electron", "Firebase"]
  }
};

// Map known tech names to Simple Icons
const techIconMap = {
  "Tailwind CSS": SiTailwindcss,
  HTML: SiHtml5,
  Javascript: SiJavascript,
  Django: SiDjango,
  CSS: SiCss3,
  Python: SiPython,
  React: SiReact,
  Electron: SiElectron,
  Firebase: SiFirebase
};

function TechPill({ label }) {
  const Icon = techIconMap[label];
  return (
    <span className="mr-2 mb-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-200/90 transition-all hover:bg-violet-500/10 hover:border-violet-400/40">
      {Icon ? <Icon className="size-4 opacity-90" aria-hidden /> : null}
      <span>{label}</span>
    </span>
  );
}

function Card(props) {
  const clickable = Boolean(props.linkUrl);
  return (
    <article className="project relative group border bg-white/0 border-white/10 hover:border-violet-400/40 rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
      <div className="relative aspect-[16/12] overflow-hidden">
        {clickable ? (
          <a href={props.linkUrl} target="_blank" rel="noopener noreferrer" aria-label={`${props.Name} – open`}>
            <img src={props.imageUrl} alt={props.Name} className="h-full w-full object-cover rounded-md transition-transform duration-300 group-hover:scale-[1.00]" />
          </a>
        ) : (
          <img src={props.imageUrl} alt={props.Name} className="h-full w-full object-cover rounded-md" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="text-box">
        {clickable ? (
          <a href={props.linkUrl} target="_blank" rel="noopener noreferrer" className="text-xl inline-flex items-center gap-2">
            {props.Name}
            <LuExternalLink className="ml-2 size-4 opacity-70 group-hover:opacity-100" aria-hidden />
          </a>
        ) : (
          <span className="text-xl">{props.Name}</span>
        )}
        <hr className="mb-2" />
        <p className="font-sans font-normal text-base/6 opacity-80">{props.discription}</p>
      </div>

      <div className="btn-box px-4 mb-4 flex flex-wrap">
        {props.techStck.map((tech, i) => (
          <TechPill key={i} label={tech} />
        ))}
      </div>
    </article>
  );
}

export default function Project() {
  return (
    <div id="projects" className="projects sm:rounded-3xl sm:my-8 sm:mr-12">
      <h1>Projects</h1>
      <div className="divider-gradient" />
      <div className="box grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <Card {...cardData.card1} />
        <Card {...cardData.card2} />
        <Card {...cardData.card3} />
      </div>
    </div>
  );
}