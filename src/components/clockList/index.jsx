import ClockListItem from "./clockListItem";
const ClockList = ({ clocks, localClock, updateClock, deleteClock }) => {
  return (
    <div>
      <h1>Other Clocks</h1>
      <hr />
      {clocks.length === 0 ? (
        <p>There is no clock, Please Create One.</p>
      ) : (
        <div>
          {clocks.map((clock) => (
            <ClockListItem
              key={clock.id}
              clock={clock}
              localClock={localClock}
              updateClock={updateClock}
              deleteClock={deleteClock}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClockList;
