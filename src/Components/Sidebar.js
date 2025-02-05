import React, { useState, useEffect } from 'react';
import shot from '../images/Screenshot.jpg';
import { FaRegUserCircle } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { FaToolbox } from "react-icons/fa6";
import { MdContactPage } from "react-icons/md";


export default function Sidebar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section id="SideSide" className="sidebar w-full fixed bottom-0 left-0 right-0 h-24 flex flex-row sm:justify-center items-center border border-t-2 border-t-black sm:h-auto sm:w-1/4 sm:top-0 sm:bottom-0 sm:flex-col sm:border-none md:mx-12 md:my-8 md:rounded-3xl sm:outline outline-2 outline-purple-600 -outline-offset-8">
      <div className="image hidden sm:block">
        <img src={shot} alt="Profile" className="rounded-full mt-12 mx-auto border-2 border-sky-500 w-24 sm:w-32 md:w-44" />
      </div>
      <div className="links sm:h-full w-full mx-2 sm:m-0">
        <ul className='flex justify-around sm:block w-full'>
          <li>
            <a href="#intro"> {windowWidth > 640 ? "Awanish" : <FaRegUserCircle />}</a>
          </li>
          <li>
            <a href="#projects"> {windowWidth > 640 ? "Projects" : <GoProjectRoadmap />} </a>
          </li>
          <li>
            <a href="#langauage"> {windowWidth > 640 ? "Languages" : <FaToolbox />}</a>
          </li>
          <li>
            <a href="#contact">{windowWidth > 640 ? "Connect" : <MdContactPage />}</a>
          </li>
        </ul>
      </div>
    </section>

  );
}