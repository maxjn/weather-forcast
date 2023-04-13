import TopButtons from "./Components/TopButtons";
import Inputs from "./Components/Inputs";
import TimeAndLocation from "./Components/TimeAndLocation";
import TemperatureAndDetails from "./Components/TemperatureAndDetails";
import Forcast from "./Components/Forcast";

function App() {
  return (
    <main className="mx-auto my-4  py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400 max-w-screen-md h-fit">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />

      <Forcast title={"Hourly Forcast"} />
      <Forcast title={"Daily Forcast"} />
    </main>
  );
}

export default App;
