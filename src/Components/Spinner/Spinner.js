import React from "react";
import spinner from "../../assets/spinner.svg";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ margin: " 40px auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
