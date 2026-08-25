import {
  LuCloudDrizzle,
  LuCloudLightning,
  LuCloudRain,
  LuCloudSnow,
  LuCloudSun,
  LuSunMedium,
} from "react-icons/lu";

export const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast" +
  "?latitude=26.8467" +
  "&longitude=80.9462" +
  "&current=temperature_2m,apparent_temperature,weather_code,wind_speed_10m" +
  "&timezone=Asia%2FKolkata";

export const weatherSceneImages = {
  clear: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=80",
  cloudy: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=900&q=80",
  rain: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=80",
  snow: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=900&q=80",
  storm: "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=900&q=80",
};

export const weatherCodeMap = {
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

export function getWeatherScene(weatherCode) {
  if (weatherCode === 0) return weatherSceneImages.clear;
  if (weatherCode <= 3 || weatherCode === 45 || weatherCode === 48) return weatherSceneImages.cloudy;
  if (weatherCode <= 67 || (weatherCode >= 80 && weatherCode <= 82)) return weatherSceneImages.rain;
  if ((weatherCode >= 71 && weatherCode <= 77) || weatherCode === 85 || weatherCode === 86) return weatherSceneImages.snow;
  return weatherSceneImages.storm;
}
