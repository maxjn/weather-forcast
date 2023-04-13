import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilTemperature,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <>
      <section id="temperature_and_details">
        <p
          className="text-cyan-300 text-3xl py-6
    font-medium flex items-center justify-center capitalize"
        >
          Cloudy
        </p>

        <div className="flex justify-between items-center text-white py-3">
          <img
            src="https://openweathermap.org/img/wn/03d@2x.png"
            alt=""
            className="w-20"
          />
          <p className="text-5xl ">34°</p>
          <div className="flex flex-col justify-between items-center font-light text-sm">
            <div className="flex space-x-1 items-center">
              <UilTemperature size={18} />
              Real fell:
              <span className="font-medium">18°</span>
            </div>
            <div className="flex space-x-1 items-center">
              <UilTear size={18} />
              Humidity:
              <span className="font-medium">43%</span>
            </div>
            <div className="flex space-x-1 items-center">
              <UilWind size={18} />
              Wind:
              <span className="font-medium">3 km/h</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center text-sm font-light text-white space-x-2">
          <UilSun />
          <p>
            Rise: <span className="font-medium ml-1">04:50 AM</span>
          </p>
          <p className="font-light">|</p>
          <UilSunset />
          <p>
            Seet: <span className="font-medium ml-1">07:50 PM</span>
          </p>
          <p className="font-light">|</p>
          <UilArrowUp />
          <p>
            High: <span className="font-medium ml-1">21°</span>
          </p>
          <p className="font-light">|</p>
          <UilArrowDown />
          <p>
            Low: <span className="font-medium ml-1">17°</span>
          </p>
        </div>
      </section>
    </>
  );
}

export default TemperatureAndDetails;
