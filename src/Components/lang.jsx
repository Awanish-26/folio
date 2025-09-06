import predacon from "../images/predaking.png";
import { LuUsers, LuRepeat, LuPuzzle, LuBrain } from "react-icons/lu";
import { SiPython, SiJavascript, SiC, SiNodedotjs, SiReact, SiTailwindcss, SiDjango, SiCss3, SiGit, SiGithub, SiOpenai, SiGithubcopilot } from "react-icons/si";

export default function Lang() {
  const languages = [
    { name: "Python", Icon: SiPython },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "C", Icon: SiC },
    { name: "Node.js", Icon: SiNodedotjs },
  ];

  const webdev = [
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Django", Icon: SiDjango },
    { name: "CSS", Icon: SiCss3 },
  ];

  const tools = [
    { name: "Git", Icon: SiGit },
    { name: "GitHub", Icon: SiGithub },
    { name: "Copilot", Icon: SiGithubcopilot },
    { name: "ChatGPT", Icon: SiOpenai },
  ];

  const softSkills = [
    { name: "Team Work", Icon: LuUsers },
    { name: "Adaptability", Icon: LuRepeat },
    { name: "Problem Solving", Icon: LuPuzzle },
    { name: "Critical Thinking", Icon: LuBrain },
  ];

  const Pill = ({ item }) => (
    <li className="group">
      <span className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/5 transition-all duration-200 hover:bg-violet-500/10 hover:border-violet-400/40 hover:scale-[1.03]">
        <item.Icon className="size-5 text-gray-300 opacity-80 transition-all duration-200 group-hover:opacity-100" />
        <span className="text-sm">{item.name}</span>
      </span>
    </li>
  );

  return (
    <div id="langauage" className="langauages relative sm:rounded-3xl sm:my-8 sm:mr-12">
      {/* gradient at top and bottom */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(60%_40%_at_100%_0%,rgba(124,58,237,0.20),transparent_80%)]" />
        <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(50%_35%_at_0%_100%,rgba(56,189,248,0.10),transparent_80%)]" />
      </div>

      <h1 >Lang & Dev tools</h1>
      <div className="divider-gradient mb-4" />
      <div className="lang_grid sm:grid grid-rows-2 grid-cols-3 gap-2">
        <div>
          <h2>Languages</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {languages.map((it) => <Pill key={it.name} item={it} />)}
          </ul>
        </div>

        <div>
          <h2>Web Dev</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {webdev.map((it) => <Pill key={it.name} item={it} />)}
          </ul>
        </div>
        {/* Predacon Image */}
        <div className="row-span-2 relative hidden md:block">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full blur-2xl opacity-70"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,255,255,0.10), rgba(0,200,255,0.20), rgba(0,128,255,0.08) 70%, transparent 100%)",
              }}
            />
          </div>

          <img
            src={predacon}
            alt="Predaking predacon"
            className="h-full pointer-events-none"
            style={{
              filter:
                "drop-shadow(0 3px 10px rgba(255,255,255,0.10)) drop-shadow(0 10px 26px rgba(0,220,255,0.25)) drop-shadow(0 28px 60px rgba(0,140,255,0.35))",
            }}
          />
        </div>

        <div>
          <h2>Tools</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {tools.map((it) => <Pill key={it.name} item={it} />)}
          </ul>
        </div>

        <div>
          <h2>Soft Skills</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {softSkills.map((it) => <Pill key={it.name} item={it} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}

