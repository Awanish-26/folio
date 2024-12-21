export default function Awanish(){
  return (
  <div id="intro" className="sm:rounded-3xl sm:my-8 sm:mr-12" >
      <h1 className="mt-8">
         Hi, this is <span className="text-rose-500">Awanish's folio</span>  website
      </h1>
      <p className="text-xl my-12">
        Hi, I am <strong>Awanish Yadav</strong>. You can check my
        CV <a href="https://shorturl.at/7W34I" className="text-violet-400 bg-gray-700 rounded underline px-2 hover:italic"> click here </a>
        <br></br>
        I am currently persuing Bachelor of
        Technology at University of Lucknow with Computer science as branch.
        I have strong foundation in programming languages Python, javascript and data
        structures. Eager to leverage my skills and academic knowledge to
        contribute to a fast-paced and innovative environment.
      </p>
      <button className="mt-auto bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full">
        <a href="https://example.com/resume.pdf" download>Download Resume</a>
      </button>
  </div>
  );
}