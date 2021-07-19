import React from "react";
import Clock from "react-live-clock";

export const LineInput = ({ inputHandler }) => {
  return (
    <div className="flex flex-row items-center justify-between m-2">
      <div className="flex flex-row flex-grow">
        <div>Aniket:~/ $ </div>{" "}
        <input
          onKeyDown={inputHandler}
          type="text"
          className="flex-grow ml-2 text-white bg-transparent outline-none"
        />
      </div>
      <div>
        <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
      </div>
    </div>
  );
};
