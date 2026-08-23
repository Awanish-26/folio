import zigzag from "../images/linea.png";
import bgImage from "../images/backgd.avif"
import { LuDownload, LuMapPin } from 'react-icons/lu';
import { useState,useEffect } from "react";

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast" +
  "?latitude=26.8467" +
  "&longitude=80.9462" +
  "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m,is_day" +
  "&timezone=Asia%2FKolkata";

  
export default function Awanish() {

  // All the time is local developer time and weather
  const getTime = () => {
    const parts = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).formatToParts(new Date());

    return {
      hour: parts.find((part) => part.type === "hour")?.value,
      minute: parts.find((part) => part.type === "minute")?.value,
      second: parts.find((part) => part.type === "second")?.value,
    };
  };

  const getDate = () => {
    return new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      weekday: "long",
      month: "long",
      day: "numeric",
    }).format(new Date());
  };

  const [time, setTime] = useState(getTime());
  const [date, setDate] = useState(getDate());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime());
      setDate(getDate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div aria-hidden id="intro" className="sk intro overflow-auto relative sm:rounded-3xl sm:my-8 sm:mr-12" >
      {/* shadow lights */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(60%_40%_at_100%_0%,rgba(124,58,237,0.20),transparent_80%)]" />
        <div className="absolute rounded-3xl inset-0 bg-[radial-gradient(50%_35%_at_0%_100%,rgba(56,189,248,0.10),transparent_80%)]" />
      </div>

      {/* zigzag image */}
      <img src={zigzag} alt="zigzag" className="fixed -rotate-2 h-full left-24 top-0 bottom-0 -z-10 aspect-square" />

      {/* main layout */}
      <div className="unit">
        <h1 className="mt-4 text-white">About Me</h1>
        <div className="sk divider-gradient" />

        <div className="unit_one">
          <p className="text-sm sm:text-xl my-8">
            I'm a passionate <span className='text-white bg-black/20 px-1 rounded'> student developer </span> with a strong foundation in both <span className='text-white'>front-end</span> and <span className='text-white bg-black/20 px-1 rounded'>back-end</span> development.
            My experience is primarily with <span className='text-white bg-black/20 px-1 rounded'>Django</span> and <span className='text-white bg-black/20 px-1 rounded'>React,</span>and I have a <span className='text-white bg-black/20 px-1 rounded'>solid understanding of data structures.</span>
            I am eager to apply my skills to <span className='text-white bg-black/20 px-1 rounded'>real-world projects</span> and explore opportunities in <span className='text-white bg-black/20 px-1 rounded'>AI and CI/CD</span>,
            with a focus on creating technology that <span className='text-white bg-black/20 px-1 rounded'>positively impact people's lives</span>.
          </p>
          <a href='https://drive.google.com/file/d/1TRWFgLQpBgkRiHoiScJ2yOqb-tl7hux0/view?usp=drive_link' target="_blank" className="sk mt-auto inline-flex items-center gap-2 border-2 border-purple-600 bg-purple-600/20 hover:bg-purple-600/60 text-white/80 font-bold py-2 px-8 rounded-full">Download Resume  <LuDownload /> </a>
        </div>

        <div className="unit_two">
          <img src={bgImage} alt="background" className="hidden lg:block lg:absolute bottom-0 left-0 rounded-xl h-auto md:h-72 auto pointer-events-none" />
        </div>

        <div className="unit_three flex justify-end">
          <div className="relative w-full max-w-md">
            <div className="relative overflow-hidden rounded-xl border border-white/15 p-6 ">

              <div className="relative flex items-baseline justify-center text-2xl font-semibold tracking-tight text-white sm:text-6xl">
                <p>
                <span className="text-purple-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.45)]">{time.hour}</span>
                <span className="mx-1 animate-pulse text-white/40">:</span>
                <span className="text-purple-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.45)]">{time.minute}</span>
                <span className="mx-1 text-white/30">:</span>
                <span className="text-fuchsia-300 drop-shadow-[0_0_12px_rgba(232,121,249,0.7)]">{time.second}</span>
                </p>
              </div>

              <div className="relative my-2 h-px bg-gradient-to-r from-transparent via-purple-600/40 to-transparent" />
              <div className="relative flex items-center justify-between">
                <div>
                  <p className="mt-1 text-sm font-medium text-white/80">
                    {date}
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                    <p className="text-xs font-semibold text-white/80">
                      <LuMapPin /> Lucknow, India 
                    </p>
                </div>
              </div>

              <div className="absolute bottom-0 left-[20%] h-[2px] w-[60%] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            </div>

            <div className="absolute -bottom-8 left-[15%] right-[15%] h-10 rounded-full bg-black/60 blur-xl" />
          </div>
        </div>

      </div>
    </div>
  );
}