import { useState, useEffect } from "react";
import { convertToFlag } from "./weatherUtils";

export function useWeather(query) {
  const [isLoading, setIsloading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchWeather() {
        try {
          setIsloading(true);
          const res = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${query}`,
            { signal: controller.signal }
          );

          const geoData = await res.json();
          console.log(geoData);

          if (!geoData.results) throw new Error("Location not found");

          const { latitude, longitude, timezone, name, country_code } =
            geoData.results.at(0);
          setDisplayLocation(`${name} ${convertToFlag(country_code)}`);

          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`,
            { signal: controller.signal }
          );
          const weatherData = await weatherRes.json();
          // store the daily object directly so callers can check weather.weathercode
          setWeather(weatherData.daily);
          console.log(weatherData.daily);
        } catch (err) {
          console.error(err);
        } finally {
          setIsloading(false);
        }
      }
      if (query.length < 3) {
        setWeather({});
        return;
      }

      fetchWeather();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { isLoading, weather, displayLocation };
}
