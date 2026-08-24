import zigzag from "../images/linea.png";
import bgImage from "../images/backgd.avif"
import { LuDownload, LuMapPin, LuWind, LuSunMedium, LuCloudSun, LuCloudRain, LuCloudDrizzle, LuCloudSnow, LuCloudLightning } from 'react-icons/lu';
import { useState,useEffect } from "react";

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast" +
  "?latitude=26.8467" +
  "&longitude=80.9462" +
  "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m" +
  "&timezone=Asia%2FKolkata";

const weatherSceneImages = {
  clear: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=80",
  cloudy: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=900&q=80",
  rain: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=80",
  snow: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=900&q=80",
  storm: "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=900&q=80",
};

const getWeatherScene = (weatherCode) => {
  if (weatherCode === 0) return weatherSceneImages.clear;
  if (weatherCode <= 3 || weatherCode === 45 || weatherCode === 48) return weatherSceneImages.cloudy;
  if (weatherCode <= 67 || (weatherCode >= 80 && weatherCode <= 82)) return weatherSceneImages.rain;
  if (weatherCode >= 71 && weatherCode <= 77 || weatherCode === 85 || weatherCode === 86) return weatherSceneImages.snow;
  return weatherSceneImages.storm;
};

const weatherCodeMap = {
  0: { label: "Clear", icon: LuSunMedium },
  1: { label: "Mostly clear", icon: LuCloudSun },
  2: { label: "Partly cloudy", icon: LuCloudSun },
  3: { label: "Cloudy", icon: LuCloudSun },
  45: { label: "Foggy", icon: LuCloudSun },
  48: { label: "Foggy", icon: LuCloudSun },
  51: { label: "Light drizzle", icon: LuCloudDrizzle },
  53: { label: "Drizzle", icon: LuCloudDrizzle },
  55: { label: "Heavy drizzle", icon: LuCloudDrizzle },
  56: { label: "Freezing drizzle", icon: LuCloudDrizzle },
  57: { label: "Freezing drizzle", icon: LuCloudDrizzle },
  61: { label: "Rain", icon: LuCloudRain },
  63: { label: "Rain", icon: LuCloudRain },
  65: { label: "Heavy rain", icon: LuCloudRain },
  66: { label: "Freezing rain", icon: LuCloudRain },
  67: { label: "Freezing rain", icon: LuCloudRain },
  71: { label: "Snow", icon: LuCloudSnow },
  73: { label: "Snow", icon: LuCloudSnow },
  75: { label: "Heavy snow", icon: LuCloudSnow },
  77: { label: "Hail", icon: LuCloudSnow },
  80: { label: "Showers", icon: LuCloudRain },
  81: { label: "Showers", icon: LuCloudRain },
  82: { label: "Heavy showers", icon: LuCloudRain },
  85: { label: "Snow showers", icon: LuCloudSnow },
  86: { label: "Heavy snow showers", icon: LuCloudSnow },
  95: { label: "Thunderstorm", icon: LuCloudLightning },
  96: { label: "Thunderstorm", icon: LuCloudLightning },
  99: { label: "Thunderstorm", icon: LuCloudLightning },
};

  
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
  const date = getDate();
  const [weather, setWeather] = useState({
    temperature: "--",
    feelsLike: "--",
    wind: "--",
    code: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchWeather = async () => {
      try {
        const response = await fetch(WEATHER_URL);
        const data = await response.json();

        if (!isMounted || !data?.current) return;

        const { temperature_2m, apparent_temperature, weather_code, wind_speed_10m } = data.current;

        setWeather({
          temperature: Math.round(temperature_2m),
          feelsLike: Math.round(apparent_temperature),
          wind: Math.round(wind_speed_10m),
          code: weather_code,
        });
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };

    fetchWeather();

    return () => {
      isMounted = false;
    };
  }, []);

  const weatherMeta = weatherCodeMap[weather.code] || weatherCodeMap[0];
  const WeatherIcon = weatherMeta.icon;
  const weatherSceneImage = getWeatherScene(weather.code);

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
      <div className="unit flex min-h-full flex-col">
        <h1 className="mt-4 text-white">About Me</h1>
        <div className="sk divider-gradient" />

        <div className="unit_one">
          <p className="text-sm sm:text-lg my-8">
            I'm a passionate <span className='text-white bg-black/20 px-1 rounded'> student developer </span> with a strong foundation in both <span className='text-white'>front-end</span> and <span className='text-white bg-black/20 px-1 rounded'>back-end</span> development.
            My experience is primarily with <span className='text-white bg-black/20 px-1 rounded'>Django</span> and <span className='text-white bg-black/20 px-1 rounded'>React,</span>and I have a <span className='text-white bg-black/20 px-1 rounded'>solid understanding of data structures.</span>
            I am eager to apply my skills to <span className='text-white bg-black/20 px-1 rounded'>real-world projects</span> and explore opportunities in <span className='text-white bg-black/20 px-1 rounded'>AI and CI/CD</span>,
            with a focus on creating technology that <span className='text-white bg-black/20 px-1 rounded'>positively impact people's lives</span>.
          </p>
          <a href='https://drive.google.com/file/d/1TRWFgLQpBgkRiHoiScJ2yOqb-tl7hux0/view?usp=drive_link' target="_blank" className="sk inline-flex items-center gap-2 border-2 border-purple-600 bg-purple-600/20 hover:bg-purple-600/60 text-white/80 font-bold py-2 px-8 rounded-full">Download Resume  <LuDownload /> </a>
        </div>


        <div className="unit_two my-4 flex w-full h-full justify-between">
            <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 shadow-[0_0_24px_rgba(34,211,238,0.12)] sm:h-80">

              <img src={bgImage} alt="background" className="absolute left-0 h-full w-2/3 object-cover" />

              <img
                src={weatherSceneImage}
                alt="Weather scene"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = weatherSceneImages.cloudy;
                }}
                className="absolute right-0 h-full w-full object-cover opacity-95 mix-blend-screen"
              />
              
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              <div className="absolute right-3 top-3 text-center rounded-xl border border-white/10 bg-black/25 px-2 py-1.5 backdrop-blur-sm">
                <p>
                  <span className="text-purple-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.45)]">{time.hour}</span>
                  <span className="mx-1 animate-pulse text-white/40">:</span>
                  <span className="text-purple-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.45)]">{time.minute}</span>
                  <span className="mx-1 text-white/30">:</span>
                  <span className="text-fuchsia-300 drop-shadow-[0_0_12px_rgba(232,121,249,0.7)]">{time.second}</span>
                </p>
                <div className="relative my-2 h-px bg-gradient-to-r from-transparent via-purple-600/40 to-transparent" />
                <div className="relative flex items-center justify-between gap-2">
                  <p className="px-2 py-2 text-xs font-medium text-white/80">
                    {date}
                  </p>
                  <p className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-2 py-2 text-xs font-semibold text-white/80">
                    <LuMapPin className="h-3.5 w-3.5 text-cyan-300" /> Lucknow, India 
                  </p>
                </div>
              </div>

              <div className="absolute bottom-3 right-3 w-1/2 rounded-2xl border border-white/10 bg-black/35 p-3 backdrop-blur-md">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <WeatherIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-slate-300">Weather</p>
                      <p className="text-base font-semibold text-white">
                        {weather.temperature}°C <span className="mx-1 text-white/40">|</span> Feels {weather.feelsLike}°C
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-cyan-200">
                    {weatherMeta.label}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between text-[9px] font-medium uppercase tracking-[0.16em] text-slate-200">
                  <span className="flex items-center gap-1.5">
                    <LuWind className="h-3.5 w-3.5 text-cyan-300" />
                    {weather.wind} km/h
                  </span>
                </div>
              </div>
            </div>
        </div>

      </div>
    </div>
  );
}