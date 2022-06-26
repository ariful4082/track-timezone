const ClockDisplay = ({ date, title, timezone, offset }) => {
  return (
    <div>
      <h1>Title: {title}</h1>
      <h3>{date.toLocalTimeString()}</h3>
      <p>
        {timezone} | {offset / 60}
      </p>
    </div>
  );
};

export default ClockDisplay;
