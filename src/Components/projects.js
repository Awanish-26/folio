import project1 from '../images/project-1.jpeg';
import project2 from '../images/project-2.jpeg';
import alpha from '../images/construction-crane-svgrepo-com.svg'
const massage1 = "Used tailwind css to design a sweat shop website with actractive UI.";

const massage2 ="Django framework to implement a fullstack blog web application with user registration, login and deployed on pyhtonanywhere.com";

const massage3 = "Under construction";

const cardData = {
  card1:{
    imageUrl: project1,
    linkUrl:"https://awanish-26.github.io/Tailwind/",
    Name : "Tailwind Shop Project",
    discription:massage1,
  },
  card2:{
    imageUrl: project2,
    linkUrl:"https://awanish996.pythonanywhere.com/",
    Name : "Django Blog App",
    discription:massage2,
  },
  card3:{
    imageUrl: alpha,
    linkUrl:"",
    Name : "Under Construction",
    discription: massage3,
  },
}

function Card(props){
  return (
    <div className="project">
      <div className='img-box'>
        <img src={props.imageUrl} alt="project" className="rounded-lg" />
      </div>
      <div>
        <a href={props.linkUrl} className="text-xl" >
          {props.Name}
        </a>
        <p>
          {props.discription}
        </p>
      </div>
    </div>
  );
}


export default function Project(){
    return (
        <div id="projects" className="projects sm:rounded-3xl sm:my-8 sm:mr-12" >
        <h1>Projects</h1>
        <hr />
        <div className="box">
          <Card {...cardData.card1}/>
          <Card {...cardData.card2}/>
          <Card {...cardData.card3}/>
        </div>
      </div>
    );
}