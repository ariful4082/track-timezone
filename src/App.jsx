import ClockList from "./components/clockList";
import LocalClock from "./components/localClock";
import useClock from "./hooks/useClock";

function App() {
  const { date: localDate, timezone, offset } = useClock();
  console.log(localDate);
  return (
    <div>
      {localDate !== null && (
        <LocalClock date={localDate} timezone={timezone} offset={offset} />
      )}
      <ClockList />
    </div>
  );
}

export default App;
