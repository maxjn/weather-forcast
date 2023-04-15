// URLSearchParams API https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
// URL API https://developer.mozilla.org/en-US/docs/Web/API/URL

import { DateTime } from "luxon";
import cityTimezones from "city-timezones";

const Base_URL = "https://api.openweathermap.org/data/2.5/";
const API_Key = "75952e59afb719452c04df0af08a8e01";

// Returns Pure Data /1:structures the api link base on search parameters
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(Base_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_Key });

  return fetch(url).then((res) => res.json());
};

//Gets the weather data and format it so it can be easy to use
const formatCurrentWeatherData = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed },
    dt,
    sys: { country, sunrise, sunset },
    weather,
    name,
  } = data;

  const { main, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    speed,
    dt,
    country,
    sunrise,
    sunset,
    main,
    icon,
    name,
  };
};

//Gets the weather data and format it for display
const formatForcastWeatherData = (data) => {
  const {
    city: { name },
    list,
  } = data;
  const timezone = cityTimezones.lookupViaCity(name)[0].timezone;
  let daily = [];
  let hourly = list.slice(0, 5);

  //delta number for 5 days
  var delta = Math.floor(list.length / 5);
  // returning the days
  for (let i = 0; i < list.length; i = i + delta) {
    daily.push(list[i]);
  }

  // daily forcast data structure
  daily = daily?.map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "ccc"),
      temp: d.main.temp,
      icon: d.weather[0].icon,
    };
  });

  // hourly forcast data structure
  hourly = hourly?.map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
      temp: d.main.temp,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

//Returns Structurede data in a usable way for visualization
const getFormatedWeatherData = async (searchParams) => {
  // calling 'weather' api to get lat & lon
  const formattedCurrendWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeatherData);

  const { lat, lon } = formattedCurrendWeather;

  // calling 'onecall' api to get all the weather data so we can restructure it for visualization
  const formattedForcastWeather = await getWeatherData("forecast", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units,
  }).then(formatForcastWeatherData);

  return { ...formattedCurrendWeather, ...formattedForcastWeather };
};

//format time to Local Time using Luxon
const formatToLocalTime = (
  secs,
  zoneName,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zoneName).toFormat(format);

//format time to Local Time using Luxon
const iconUrlFromCode = (code) =>
  `https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormatedWeatherData;

export { iconUrlFromCode, formatToLocalTime };
