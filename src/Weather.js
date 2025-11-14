import Day from "./Day";
export default function Weather({ weather, displayLocation }) {
  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: dates,
    weathercode: codes,
  } = weather || {};

  return (
    <div className="weather">
      <h2>Weather {displayLocation}</h2>
      <ul className="weather-list">
        {dates.map((date, i) => (
          <Day
            date={date}
            max={max?.at(i)}
            min={min?.at(i)}
            code={codes?.at(i)}
            isToday={i === 0}
            key={date}
          />
        ))}
      </ul>
    </div>
  );
}
