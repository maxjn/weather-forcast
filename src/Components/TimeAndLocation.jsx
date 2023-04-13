import React from "react";

function TimeAndLocation() {
  return (
    <>
      <section id="time_and_location">
        <div className="flex items-center justify-center my-6">
          <p className="text-xl font-extralight text-white">
            Tuesday, 31 May 2023 | Local time: 12:46 PM
          </p>
        </div>
        <div className="flex items-center justify-center my-3 ">
          <p className=" text-3xl font-medium text-white">Berlin ,DE</p>
        </div>
      </section>
    </>
  );
}

export default TimeAndLocation;
