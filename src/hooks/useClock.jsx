import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";

const init = {
  id: "",
  title: "",
  timezone: {
    type: "",
    offset: "",
  },
  date_utc0: null,
  date: null,
};

const TIMEZONE_OFFSET = {
  PST: -7 * 60,
  EST: -4 * 60,
  EAT: +3 * 60,
};

const useClock = (timezone, offset = 0) => {
  const [state, setState] = useState({ ...init });
  const [utc, setUTC] = useState(null);

  useEffect(() => {
    let d = new Date();
    const localOffset = d.getTimezoneOffset();
    d = addMinutes(d, localOffset);
    setUTC(d);
  }, []);

  useEffect(() => {
    if (utc !== null && timezone) {
      offset = TIMEZONE_OFFSET[timezone] ?? offset;

      // if (timezone === "PST" || timezone === "EST") {
      //   offset = TIMEZONE_OFFSET[timezone];
      // }
      const newUtc = addMinutes(utc, offset);
      setState({
        ...state,
        date_utc0: utc,
        date: newUtc,
      });
    } else {
      setState({ ...state, date_utc0: utc, date: utc });
    }
  }, [utc]);

  return {
    clock: state,
  };
};

export default useClock;
