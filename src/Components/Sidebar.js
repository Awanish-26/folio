import shot from '../images/Screenshot.jpg';

function Sidebar() {
  return (
    <section className="sidebar w-1/2 sm:w-1/4 fixed top-0 bottom-0 flex flex-col -translate-x-80 sm:translate-x-0 bg-green-200 md:mx-12 md:my-8 md:rounded-3xl">
    <div className="image">
      <img src={shot} alt="Profile Picture" className="rounded-full mt-12 mx-auto border-2 border-sky-500 w-24 sm:w-32 md:w-44" />
    </div>
    <div className="links h-full text-center">
      <ul>
        <li>
          <a href="#intro">Awanish</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#langauage">Languages</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </div>
  </section>

  );
}

export default Sidebar;
