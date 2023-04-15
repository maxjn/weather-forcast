import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  //Search Click
  const handleSearchClick = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  };
  //Location Click
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  //Units Click
  const handleUnitsClick = (e) => {
    const selectedUnit = e.target.name;
    if (selectedUnit !== units) {
      setUnits(selectedUnit);
    }
  };

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
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                handleSearchClick();
              }
            }}
          />
          <UilSearch
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125 "
            onClick={handleSearchClick}
          />
          <UilLocationPoint
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </div>
        <div className="flex flex-row items-center justify-center w-1/4">
          <button
            name="metric"
            className="text-white text-xl font-light   transition ease-out hover:scale-125"
            onClick={(e) => handleUnitsClick(e)}
          >
            °C
          </button>
          <p className="text-xl text-white mx-1 font-light">|</p>
          <button
            name="imperial"
            className="text-white text-xl font-light  transition ease-out hover:scale-125"
            onClick={(e) => handleUnitsClick(e)}
          >
            °F
          </button>
        </div>
      </section>
    </>
  );
}

export default Inputs;
