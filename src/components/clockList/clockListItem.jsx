import { formatDistance } from "date-fns";
import React from "react";
import useClock from "../../hooks/useClock";
import useTimer from "../../hooks/useTimer";
import ClockAction from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";

const ClockListItem = ({ clock, localClock, updateClock, deleteClock }) => {
  const { date } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

  // const [timer, setTimer] = useState(null);

  // useEffect(() => {
  //   setTimer(date);
  // }, [date]);

  // let timerId = null;
  // useEffect(() => {
  //   if (!timer || timerId !== null) return;

  //   timerId = setInterval(() => {
  //     setTimer(addSeconds(timer, 1));
  //   }, 1000);

  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [timer]);

  if (!date || !timer) return null;
  return (
    <div>
      <ClockDisplay
        date={timer}
        localClock={localClock}
        title={clock.title}
        timezone={clock.timezone}
        offset={clock.offset}
      />
      <h3>{formatDistance(localClock.date, timer)}</h3>
      <ClockAction
        clock={clock}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default ClockListItem;
