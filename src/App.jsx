import { useState } from "react";
import ClockList from "./components/clockList";
import LocalClock from "./components/localClock";

const LOCAL_CLOCK_INIT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const updateClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  return (
    <div>
      <LocalClock clock={localClock} updateClock={updateClock} />
      <ClockList />
    </div>
  );
}

export default App;
