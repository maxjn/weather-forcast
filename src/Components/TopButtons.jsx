import React from "react";

function TopButtons({ setQuery }) {
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
      name: "Toronto",
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
          <button
            key={city.id}
            className="text-white text-lg font-medium "
            onClick={() => setQuery({ q: city.name })}
          >
            {city.name}
          </button>
        ))}
      </section>
    </>
  );
}

export default TopButtons;
