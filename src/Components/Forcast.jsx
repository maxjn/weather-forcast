import React from "react";
import { iconUrlFromCode } from "../Services/weatherService";

function Forcast({ items, title }) {
  return (
    <section id="forcast">
      <h3 className="mt-6 text-white font-medium  uppercase">{title}</h3>
      <hr className="my-2  " />
      <div className="flex flex-row justify-between items-center">
        {items &&
          items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-white"
            >
              <p className="font-light text-sm">{item.title}</p>
              <img
                src={iconUrlFromCode(item.icon)}
                className="w-12 my-1"
                alt=""
              />
              <p className="font-medium">{item.temp.toFixed()}°</p>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Forcast;
