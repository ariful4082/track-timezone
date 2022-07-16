import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import useTimer from "../../hooks/useTimer";
import ClockAction from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";

const LocalClock = ({ clock, updateClock, createClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);
  const timer = useTimer(date);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date, clock.timezone]);

  return (
    <div>
      {timer && (
        <ClockDisplay
          date={timer}
          title={clock.title}
          timezone={timezone}
          offset={offset}
        />
      )}
      <ClockAction
        local={true}
        clock={clock}
        updateClock={updateClock}
        createClock={createClock}
      />
    </div>
  );
};

export default LocalClock;
