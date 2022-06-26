import { useEffect } from "react";
import useClock from "../../hooks/useClock";
import ClockAction from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";

const LocalClock = ({ clock, updateClock }) => {
  const { date, timezone, offset } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      timezone,
      offset,
    });
  }, [date, clock.timezone]);

  return (
    <div>
      {date && (
        <ClockDisplay
          date={date}
          title={clock.title}
          timezone={timezone}
          offset={offset}
        />
      )}
      <ClockAction local={true} clock={clock} updateClock={updateClock} />
    </div>
  );
};

export default LocalClock;
