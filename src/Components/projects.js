import project1 from '../images/project-1.jpeg';
import project2 from '../images/project-2.jpeg';
import alpha from '../images/under-construction.jpg'


const description1 = "Designed a sleek shop website using Tailwind CSS with an attractive UI.";
const description2 = "Full-stack blog web application with user registration and login functionality.";
const description3 = "This project is currently under construction.";

const cardData = {
  card1:{
    imageUrl: project1,
    linkUrl:"https://awanish-26.github.io/Tailwind/",
    Name : "Tailwind Shop Project",
    discription:description1,
    techStck: ["Tailwind CSS", "HTML", "Javascript","UI/UX"]
  },
  card2:{
    imageUrl: project2,
    linkUrl:"https://awanish996.pythonanywhere.com/",
    Name : "Django Blog App",
    discription: description2,
    techStck: ["Django", "HTML", "CSS", "Javascript" ,"Python"]
  },
  card3:{
    imageUrl: alpha,
    linkUrl:"",
    Name : "Under Construction",
    discription: description3,
    techStck: ["React", "Electron", "Firebase","BLAH BLAH"]
  },
}

function Card(props){
  return (
    <div className="project">
      <div className='img-box'>
        <img src={props.imageUrl} alt="project" className="rounded-md" />
      </div>
      <div className='text-box'>
        <a href={props.linkUrl} className="text-xl" >
          {props.Name}
        </a>
        <hr className='my-2'/>
        <p className='font-sans font-normal text-base text-opacity-70'>
          {props.discription}
        </p>
      </div>
      <div className='btn-box px-4 mb-4'>
      {props.techStck.map((tech, index) => (
        <p key={index} className='mr-2 p-2 inline-block text-sm py-0 rounded-full bg-gray-500 bg-opacity-25'>
          {tech}
        </p>
      ))}
      </div>
    </div>
  );
}


export default function Project(){
    return (
        <div id="projects" className="projects sm:rounded-3xl sm:my-8 sm:mr-12" >
        <h1>Projects</h1>
        <div className="box">
          <Card {...cardData.card1}/>
          <Card {...cardData.card2}/>
          <Card {...cardData.card3}/>
        </div>
      </div>
  );
}