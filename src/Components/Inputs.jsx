import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs() {
  return (
    <>
      <section
        id="inputs"
        className="flex flex-row items-center justify-center py-6"
      >
        <div className="flex flex-row items-center justify-center space-x-4 w-3/4">
          <input
            type="text"
            className="w-full capitalize focus:outline-none placeholder:lowercase text-xl shadow-xl p-2 font-light "
            placeholder="search for city..."
          />
          <UilSearch
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125 "
          />
          <UilLocationPoint
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
          />
        </div>
        <div className="flex flex-row items-center justify-center w-1/4">
          <button name="metric" className="text-white text-xl font-light ">
            °C
          </button>
          <p className="text-xl text-white mx-1 font-light">|</p>
          <button name="imperial" className="text-white text-xl font-light">
            °F
          </button>
        </div>
      </section>
    </>
  );
}

export default Inputs;
