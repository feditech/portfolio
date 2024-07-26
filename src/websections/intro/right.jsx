import React from "react";
import cover from "../../assets/images/cover.png";
import devCover from "../../assets/images/DEV.png";

const Right = () => {
  return (
    <div className="w-3/5 px-20">
      <img
        src={devCover}
        style={{  height: 500 }}
      />
    </div>
  );
};

export default Right;
