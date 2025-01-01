import github from "../images/general-icons/github.svg"
import linkedin from "../images/general-icons/linkedin.svg"
import leetcode from "../images/general-icons/leetcode.svg"
import gmail from "../images/general-icons/gmail.svg"

export default function Contact() {
    return (
        <div id="contact" className="contact sm:rounded-3xl sm:my-8 sm:mr-12" >
            <h1 className="mb-6">Contact</h1>
            <div className="ref_link flex justify-around gap-4">
              <div className="p-3 border-2 rounded-xl border-purple-400 border-opacity-10 hover:border-opacity-100 transition-opacity">
                <a href="mailto:awanishyadav996@gmail.com">
                  <img src={gmail} alt="gmail icon"></img>
                </a>
              </div>
              <div className="p-3 border-2 rounded-xl border-purple-400 border-opacity-10 hover:border-opacity-100 transition-opacity">
                <a href="https://www.linkedin.com/in/awanish-yadav/">
                  <img src={linkedin} alt="linkden icon"></img>
                </a>
              </div>
              <div className="p-3 border-2 rounded-xl border-purple-400 border-opacity-10 hover:border-opacity-100 transition-opacity">
                <a href="https://github.com/Awanish-26">
                  <img src={github} alt="github icon"></img>
                </a>
              </div>
              <div className="p-3 border-2 rounded-xl border-purple-400 border-opacity-10 hover:border-opacity-100 transition-opacity">
                <a href="https://leetcode.com/Awanish-26">
                  <img src={leetcode} alt="leetcode icon"></img>
                </a>
              </div>
            </div>
        </div>
    );
}