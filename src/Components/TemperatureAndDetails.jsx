import React from "react";
import { formatToLocalTime, iconUrlFromCode } from "../Services/weatherService";
import cityTimezones from "city-timezones";

// import cityTimezones from "cityTimezone";

import {
  UilArrowUp,
  UilArrowDown,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilTemperature,
} from "@iconscout/react-unicons";

function TemperatureAndDetails({
  weather: {
    main,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    name,
  },
}) {
  const timezone = cityTimezones.lookupViaCity(name)[0].timezone;

  return (
    <>
      <section id="temperature_and_details">
        <p
          className="text-cyan-300 text-3xl py-6
    font-medium flex items-center justify-center capitalize"
        >
          {main}
        </p>

        <div className="flex justify-between items-center text-white py-3">
          <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
          <p className="text-5xl ">{temp.toFixed()}°</p>
          <div className="flex flex-col justify-between items-center font-light text-sm">
            <div className="flex space-x-1 items-center">
              <UilTemperature size={18} />
              Real fell:
              <span className="font-medium">{feels_like.toFixed()}°</span>
            </div>
            <div className="flex space-x-1 items-center">
              <UilTear size={18} />
              Humidity:
              <span className="font-medium">{humidity}%</span>
            </div>
            <div className="flex space-x-1 items-center">
              <UilWind size={18} />
              Wind:
              <span className="font-medium">{speed} km/h</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center text-sm font-light text-white space-x-2">
          <UilSun />
          <p>
            Rise:{" "}
            <span className="font-medium ml-1">
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
          <p className="font-light">|</p>
          <UilSunset />
          <p>
            Set:{" "}
            <span className="font-medium ml-1">
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
          <p className="font-light">|</p>
          <UilArrowUp />
          <p>
            High:{" "}
            <span className="font-medium ml-1">{temp_max.toFixed()}°</span>
          </p>
          <p className="font-light">|</p>
          <UilArrowDown />
          <p>
            Low: <span className="font-medium ml-1">{temp_min.toFixed()}°</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default TemperatureAndDetails;
