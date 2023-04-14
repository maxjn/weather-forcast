import React from "react";
import { formatToLocalTime } from "../Services/weatherService";
function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <>
      <section id="time_and_location">
        <div className="flex items-center justify-center my-6">
          <p className="text-xl font-extralight text-white">
            {formatToLocalTime(dt, timezone)}
          </p>
        </div>
        <div className="flex items-center justify-center my-3 ">
          <p className=" text-3xl font-medium text-white">
            {name} , {country}
          </p>
        </div>
      </section>
    </>
  );
}

export default TimeAndLocation;
