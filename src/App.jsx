import ClockList from "./components/clockList";
import LocalClock from "./components/localClock";
import useClock from "./hooks/useClock";

function App() {
  const { clock: local } = useClock();
  const { clock: pst } = useClock("PST");
  const { clock: est } = useClock("EST");
  const { clock: pakistan } = useClock("UCT", 5 * 60);
  const { clock: EAT } = useClock("EAT");

  console.log("Local UTC", local.date);
  console.log("Local PST", pst.date);
  console.log("Local EST", est.date);
  console.log("Local Pakistan", pakistan.date);
  console.log("Local EAT", EAT.date);
  return (
    <div>
      <LocalClock />
      <ClockList />
    </div>
  );
}

export default App;
