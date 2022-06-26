import ClockList from "./components/clockList";
import LocalClock from "./components/localClock";
import useClock from "./hooks/useClock";

function App() {
  const { date: localDate, localOffset, localTimezone } = useClock();

  return (
    <div>
      {localDate !== null && (
        <LocalClock
          date={localDate}
          timezone={localTimezone}
          offset={-localOffset}
        />
      )}
      <ClockList />
    </div>
  );
}

export default App;
