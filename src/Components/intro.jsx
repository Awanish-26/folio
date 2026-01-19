import resume from '../assets/Resume.pdf';
import zigzag from "../images/linea.png";
import bgImage from "../images/backgd.avif"
import { LuDownload } from 'react-icons/lu';

export default function Awanish() {
  return (
    <div aria-hidden id="intro" className="intro relative sm:rounded-3xl sm:my-8 sm:mr-12" >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(60%_40%_at_100%_0%,rgba(124,58,237,0.20),transparent_80%)]" />
        <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(50%_35%_at_0%_100%,rgba(56,189,248,0.10),transparent_80%)]" />
      </div>
      <h1 className="mt-4 text-white">About Me</h1>
      <div className="divider-gradient" />
      <img src={zigzag} alt="zigzag" className="fixed -rotate-2 h-full left-24 top-0 bottom-0 -z-10 aspect-square" />
      <p className="text-sm sm:text-xl my-8">
        I'm a passionate <span className='text-white bg-black/20 px-1 rounded'> student developer </span> with a strong foundation in both <span className='text-white'>front-end</span> and <span className='text-white bg-black/20 px-1 rounded'>back-end</span> development.
        My experience is primarily with <span className='text-white bg-black/20 px-1 rounded'>Django</span> and <span className='text-white bg-black/20 px-1 rounded'>React,</span>and I have a <span className='text-white bg-black/20 px-1 rounded'>solid understanding of data structures.</span>
        I am eager to apply my skills to <span className='text-white bg-black/20 px-1 rounded'>real-world projects</span> and explore opportunities in <span className='text-white bg-black/20 px-1 rounded'>AI and CI/CD</span>,
        with a focus on creating technology that <span className='text-white bg-black/20 px-1 rounded'>positively impacts people's lives</span>.
      </p>
      <a href={resume} download className="mt-auto inline-flex items-center gap-2 border-2 border-purple-600 bg-purple-600/20 hover:bg-purple-600/60 text-white/80 font-bold py-2 px-8 rounded-full">Download Resume  <LuDownload /> </a>
      <img src={bgImage} alt="background" className="hidden lg:block lg:absolute bottom-0 right-0 rounded-xl h-auto md:h-72 auto pointer-events-none" />
    </div>
  );
}