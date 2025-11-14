import { getWeatherIcon, formatDay } from "./weatherUtils";

export default function Day({ date, max, min, code, isToday }) {
  return (
    <li>
      <span>{getWeatherIcon(code)}</span>
      <p>{isToday ? "Today" : formatDay(date)}</p>
      <p>
        {min}&deg; &mdash; <strong>{max}&deg;</strong>
      </p>
    </li>
  );
}
