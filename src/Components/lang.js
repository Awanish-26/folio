// import py from '../images/python.svg'
// import js from '../images/javascript.svg'
// import clang from '../images/c.svg'
// import njs from '../images/nodedotjs.svg'
export default function Lang(){
    return (
        <div id="langauage" className="sm:rounded-3xl sm:my-8 sm:mr-12" >
            <h1 className="mb-6">Lang & Dev tools</h1>
            <div className="lang_grid grid grid-rows-2 grid-cols-2 gap-2">
              <div>
                <h2>Langauages</h2>
                <p>Python</p>
                <p>Javascript</p>
                <p>C</p>
                <p>NodeJS</p>
              </div>
              <div>
                <h2>Web Dev</h2>
                <p>Django</p>
                <p>CSS</p>
                <p>React</p>
                <p>Tailwind</p>
              </div>
              <div>
                <h2>Soft Skills</h2>
                <p>Team Work</p>
                <p>Consistant</p>
                <p>Inspired</p>
                <p>Learner</p>
              </div>
              <div>
                <h2>Used to</h2>
                <p>Git</p>
                <p>Github</p>
                <p>Copilot</p>
                <p>Chatgpt</p>
              </div>
            </div>
        </div>
    );
}

