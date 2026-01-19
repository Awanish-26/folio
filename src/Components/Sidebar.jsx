import React, { useState, useEffect } from 'react';
import me from '../images/me.avif';
import me2 from '../images/meo.avif';
import { FaRegUserCircle } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { FaToolbox } from "react-icons/fa6";
import { MdContactPage } from "react-icons/md";

export default function Sidebar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderLinkContent = (label, Icon) => (windowWidth > 640 ? label : <Icon />);

  return (
    <section id="SideSide" className="sidebar w-full fixed bottom-0 left-0 right-0 h-24 flex flex-row sm:justify-center items-center border border-t-2 border-t-black sm:h-auto sm:w-1/4 sm:top-0 sm:bottom-0 sm:flex-col sm:border-none md:mx-12 md:my-8 md:rounded-3xl sm:outline outline-2 outline-purple-600 -outline-offset-8 z-10 sm:z-0">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(60%_40%_at_100%_0%,rgba(124,58,237,0.20),transparent_80%)]" />
        <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(50%_35%_at_0%_100%,rgba(56,189,248,0.12),transparent_80%)]" />
        <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(60%_40%_at_0%_0%,rgba(124,58,237,0.20),transparent_80%)]" />
        <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(50%_35%_at_100%_100%,rgba(56,189,248,0.12),transparent_80%)]" />
      </div>
      {/* Profile Image */}
      <div className="image hidden sm:block relative w-24 sm:w-32 md:w-44 mx-auto mt-12">
        <img src={me} alt="Profile" className="rounded-full border-2 border-sky-500 w-full" />
        <img src={me2} alt="Profile Hover" className="absolute top-0 left-0 w-full h-full rounded-full border-2 border-sky-500 opacity-0 transition-opacity duration-1000 hover:opacity-100" />
      </div>

      {/* Navigation Links */}
      <div className="links sm:h-full w-full mx-2 sm:m-0">
        <ul className="flex justify-around sm:block w-full">
          <li>
            <a href="#intro">{renderLinkContent("Awanish", FaRegUserCircle)}</a>
          </li>
          <li>
            <a href="#projects">{renderLinkContent("Projects", GoProjectRoadmap)}</a>
          </li>
          <li>
            <a href="#langauage">{renderLinkContent("Languages", FaToolbox)}</a>
          </li>
          <li>
            <a href="#contact">{renderLinkContent("Connect", MdContactPage)}</a>
          </li>
        </ul>
      </div>
    </section>
  );
}