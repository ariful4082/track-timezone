import { useEffect, useState } from "react";
import { generate } from "shortid";
import ClockList from "./components/clockList";
import LocalClock from "./components/localClock";
import useEvents from "./hooks/useEvents";

const LOCAL_CLOCK_INIT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

function App() {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);
  const { getEvents, getEventsByClockId, addEvent, events } = useEvents();

  useEffect(() => {
    if (Object.keys(events).length === 0) {
      addEvent({ title: "Test", clockId: "CLOCK-111" });
    }
    console.log("All Events Array", getEvents(true));
    console.log("Event By Id", getEventsByClockId("CLOCK-111"));
    console.log("All Events", getEvents());
  }, [events]);

  // inCludes Local clock
  const updateLocalClock = (data) => {
    setLocalClock({
      ...localClock,
      ...data,
    });
  };

  // New clock Added
  const createNewClock = (clock) => {
    clock.id = generate();
    setClocks([...clocks, clock]);
  };

  // other clock Update
  const updateClock = (updatedClock) => {
    const updatedClocks = clocks.map((clock) => {
      if (clock.id === updatedClock.id) return updatedClock;
      return clock;
    });
    setClocks(updatedClocks);
  };

  // Delete A clock
  const deleteClock = (id) => {
    const updatedClocks = clocks.filter((clock) => clock.id !== id);
    setClocks(updatedClocks);
  };

  // Local Timer

  return (
    <div>
      <LocalClock
        clock={localClock}
        updateClock={updateLocalClock}
        createClock={createNewClock}
      />
      <ClockList
        clocks={clocks}
        localClock={localClock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
}

export default App;
