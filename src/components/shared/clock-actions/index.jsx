import { useState } from "react";
import ClockForm from "../clock-form";

const ClockAction = ({
  local = false,
  clock,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  // const handleChange = (e) => {
  //   let { name, value } = e.target;

  //   if (name === "offset") {
  //     value = parseInt(value) * 60;
  //   }

  //   updateClock({
  //     [name]: value,
  //   });
  // };
  const handleClock = (value) => {
    createClock(value);
  };

  return (
    <div>
      <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      {local ? (
        <button onClick={() => setIsCreate(!isCreate)}>Create</button>
      ) : (
        <button onClick={() => deleteClock(clock.id)}>Delete</button>
      )}
      {isEdit && (
        <>
          <h3>Edit Clock</h3>
          <ClockForm
            value={clock}
            handleClock={updateClock}
            title={!local}
            edit={true}
          />
        </>
      )}
      {isCreate && (
        <>
          <h3>Create A New Clock</h3>
          <ClockForm handleClock={handleClock} />
        </>
      )}
    </div>
  );
};

export default ClockAction;
