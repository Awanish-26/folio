import Awanish from "./Components/intro";
import Project from "./Components/projects";
import Lang from "./Components/lang";
import Contact from "./Components/contact";

export default function App() {
    return (
        <section className="discription sm:w-2/3 sm:float-right" >
            <Awanish />
            <Project />
            <Lang />
            <Contact />
        </section>
    );
}
