import React from "react";

function Forcast({ title }) {
  return (
    <section id="forcast">
      <h3 className="mt-6 text-white font-medium  uppercase">{title}</h3>
      <hr className="my-2  " />
      <div className="flex flex-row justify-between items-center">
        {/*  Item Start  */}
        <div className="flex flex-col justify-center items-center text-white">
          <p className=" font-light text-sm">04:50 AM</p>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt=""
            className="my-2 w-12"
          />
          <p className="font-medium">22°</p>
        </div>
        {/*  Item End  */}
        {/*  Item Start  */}
        <div className="flex flex-col justify-center items-center text-white">
          <p className=" font-light text-sm">04:50 AM</p>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt=""
            className="my-2 w-12"
          />
          <p className="font-medium">22°</p>
        </div>
        {/*  Item End  */}
        {/*  Item Start  */}
        <div className="flex flex-col justify-center items-center text-white">
          <p className=" font-light text-sm">04:50 AM</p>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt=""
            className="my-2 w-12"
          />
          <p className="font-medium">22°</p>
        </div>
        {/*  Item End  */}
        {/*  Item Start  */}
        <div className="flex flex-col justify-center items-center text-white">
          <p className=" font-light text-sm">04:50 AM</p>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt=""
            className="my-2 w-12"
          />
          <p className="font-medium">22°</p>
        </div>
        {/*  Item End  */}
        {/*  Item Start  */}
        <div className="flex flex-col justify-center items-center text-white">
          <p className=" font-light text-sm">04:50 AM</p>
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt=""
            className="my-2 w-12"
          />
          <p className="font-medium">22°</p>
        </div>
        {/*  Item End  */}
      </div>
    </section>
  );
}

export default Forcast;
