import { TbBrandGithub, TbBrandLinkedin, TbMail, TbBrandLeetcode } from "react-icons/tb";
import ContactForm from './form';

export default function Contact() {
  return (
    <div id="contact" className="contact relative sm:rounded-3xl sm:my-8 sm:mr-12">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(60%_40%_at_100%_0%,rgba(124,58,237,0.20),transparent_80%)]" />
        <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(50%_35%_at_0%_100%,rgba(56,189,248,0.10),transparent_80%)]" />
      </div>

      <h1 className="">Contact</h1>
      <div className="divider-gradient" />

      <ContactForm />

      <div className="ref_link card flex p-6 justify-center gap-4">
        <div className="group p-3 border-2 rounded-xl border-rose-500 border-opacity-50 hover:border-opacity-100 transition-opacity">
          <a href="mailto:awanishyadav996@gmail.com" aria-label="Email">
            <TbMail className="w-8 h-8 text-gray-300 transition-colors group-hover:text-rose-400" strokeWidth={1.4} />
          </a>
        </div>
        <div className="group p-3 border-2 rounded-xl border-rose-500 border-opacity-50 hover:border-opacity-100 transition-opacity">
          <a href="https://www.linkedin.com/in/awanish-yadav/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <TbBrandLinkedin className="w-8 h-8 text-gray-300 transition-colors group-hover:text-rose-400" strokeWidth={1.4} />
          </a>
        </div>
        <div className="group p-3 border-2 rounded-xl border-rose-500 border-opacity-50 hover:border-opacity-100 transition-opacity">
          <a href="https://github.com/Awanish-26" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <TbBrandGithub className="w-8 h-8 text-gray-300 transition-colors group-hover:text-rose-400" strokeWidth={1.4} />
          </a>
        </div>
        <div className="group p-3 border-2 rounded-xl border-rose-500 border-opacity-50 hover:border-opacity-100 transition-opacity">
          <a href="https://leetcode.com/crn-primus" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <TbBrandLeetcode className="w-8 h-8 text-gray-300 transition-colors group-hover:text-rose-400" strokeWidth={1.4} />
          </a>
        </div>
      </div>
    </div>
  );
}