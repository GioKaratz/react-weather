# React Weather

React Weather is a small, responsive React application that lets you search for a location and view a 7-day weather forecast using the Open-Meteo API.

This project is suitable for demos and learning—especially for practicing React hooks, fetch/AbortController usage and simple component composition.

---

## Quick overview

- Type at least 3 characters to search for a location.
- The app displays a 7-day forecast with simple icons and temperatures.
- Helper functions are included for icons, country flags and day formatting.

## Features

- React with a custom hook (`useWeather`) for fetching and state management
- Open-Meteo for geocoding and forecast data
- Responsive, centered UI with day cards

## Prerequisites

- Node.js (>= 14) and npm

## Local development (Windows PowerShell)

From the project root (`react-weather`):

```powershell
npm install
npm start
```

This starts the development server (typically at http://localhost:3000).

## Usage

1. Type a location in the search input (at least 3 characters).
2. Wait briefly while the app fetches data.
3. The list of days appears under the title with icons and temperatures.

## Important files

- `src/App.js` — main component and layout
- `src/useWeather.js` — custom hook that queries Open-Meteo
- `src/weatherUtils.js` — helper functions: `getWeatherIcon`, `convertToFlag`, `formatDay`
- `src/index.css` — main styling
