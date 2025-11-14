import { useState } from "react";
import { useWeather } from "./useWeather";
import Weather from "./Weather";

export default function App() {
  const [location, setLocation] = useState("");
  const { isLoading, weather, displayLocation } = useWeather(location);
  return (
    <div className="app">
      <h1>React Weather</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Select location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      {isLoading && <p className="loader">Loading</p>}
      {weather.weathercode && (
        <Weather weather={weather} displayLocation={displayLocation} />
      )}
    </div>
  );
}
