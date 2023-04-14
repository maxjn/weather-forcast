import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TemperatureAndDetails from "./Components/TemperatureAndDetails";
import Forcast from "./Components/Forcast";
import getFormatedWeatherData from "./Services/weatherService";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "toronto" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const messages = query.q ? query.q : "Current Location";

      await toast.promise(
        getFormatedWeatherData({ ...query, units })?.then((data) => {
          setWeather(data);
        }),
        {
          pending: "Fetching weather for " + messages,
          success: "Successfully fetched weather for " + messages,
          error: "Couldn't fetch weather for " + messages,
        }
      );
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    else {
      const threshold = units === "metric" ? 20 : 60;
      if (weather.temp > threshold) return "from-yellow-700 to-orange-700";
      else return "from-cyan-700 to-blue-700";
    }
  };

  return (
    <>
      <main
        className={`mx-auto my-4  py-5 px-32 bg-gradient-to-br ${formatBackground()} shadow-xl shadow-gray-400 max-w-screen-md h-fit`}
      >
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />

            <Forcast items={weather.hourly} title={"Hourly Forcast"} />
            <Forcast items={weather.daily} title={"Daily Forcast"} />
          </>
        )}
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={true}
        theme="colored"
      />
    </>
  );
}

export default App;
