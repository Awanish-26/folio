import resume from '../assets/Internship Resume.pdf';
import zigzag from "../images/linea.png";
import bgImage from "../images/backgd.png"

export default function Awanish() {
  return (
    <div id="intro" className="intro relative sm:rounded-3xl sm:my-8 sm:mr-12" >
      <h1 className="mt-4 text-white">About Me</h1>
      <img src={zigzag} alt="zigzag" className="fixed -rotate-2 h-full left-24 top-0 bottom-0 -z-10 aspect-square" />
      <p className="text-xl my-8">
        Hi, I am <strong>Awanish Yadav</strong>. You can check my
        CV <a href="https://shorturl.at/7W34I" aria-label='resume url' rel="noreferrer" target="_blank" className="text-violet-400 bg-gray-700 rounded underline px-2 hover:italic"> click here </a>
        <br></br>
        I am currently persuing Bachelor of
        Technology at University of Lucknow with Computer science as branch.
        I have strong foundation in programming languages Python, javascript and data
        structures. Eager to leverage my skills and academic knowledge to
        contribute to a fast-paced and innovative environment.
      </p>
      <button className="mt-auto bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full">
        <a href={resume} download>Download Resume</a>
      </button>
      <img src={bgImage} alt="background" className="hidden lg:block lg:absolute bottom-0 right-2 rounded-xl h-auto md:h-96 w-auto" />
    </div>
  );
}