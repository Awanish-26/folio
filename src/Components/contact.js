import github from "../images/general-icons/github.svg"
import linkedin from "../images/general-icons/linkedin.svg"
import leetcode from "../images/general-icons/leetcode.svg"
import gmail from "../images/general-icons/gmail.svg"
import ContactForm from './form';

export default function Contact() {
  return (
    <div id="contact" className="contact sm:rounded-3xl sm:my-8 sm:mr-12" >
      <h1 className="mb-6">Contact</h1>
      <ContactForm />
      <hr className="w-[99%] mb-4 text-center" ></hr>
      <div className="ref_link flex justify-center gap-4">
        <div className="p-3 border-2 rounded-xl border-rose-600 border-opacity-50 hover:border-opacity-100 transition-opacity">
          <a href="mailto:awanishyadav996@gmail.com">
            <img className="w-8 h-8" src={gmail} alt="gmail icon"></img>
          </a>
        </div>
        <div className="p-3 border-2 rounded-xl border-rose-600 border-opacity-50 hover:border-opacity-100 transition-opacity">
          <a href="https://www.linkedin.com/in/awanish-yadav/">
            <img className="w-8 h-8" src={linkedin} alt="linkden icon"></img>
          </a>
        </div>
        <div className="p-3 border-2 rounded-xl border-rose-600 border-opacity-50 hover:border-opacity-100 transition-opacity">
          <a href="https://github.com/Awanish-26">
            <img className="w-8 h-8" src={github} alt="github icon"></img>
          </a>
        </div>
        <div className="p-3 border-2 rounded-xl border-rose-600 border-opacity-50 hover:border-opacity-100 transition-opacity">
          <a href="https://leetcode.com/Awanish-26">
            <img className="w-8 h-8" src={leetcode} alt="leetcode icon"></img>
          </a>
        </div>
      </div>
    </div>
  );
}