import React from "react";

function TopButtons() {
  const cities = [
    {
      id: 1,
      name: "Tokyo",
    },
    {
      id: 2,
      name: "Sydney",
    },
    {
      id: 3,
      name: "Berlin",
    },
    {
      id: 4,
      name: "Torono",
    },
    {
      id: 5,
      name: "Paris",
    },
  ];

  return (
    <>
      <section
        id="top_buttons"
        className="flex flex-row items-center justify-around py-6"
      >
        {cities.map((city) => (
          <button key={city.id} className="text-white text-lg font-medium ">
            {city.name}
          </button>
        ))}
      </section>
    </>
  );
}

export default TopButtons;
