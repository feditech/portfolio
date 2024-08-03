import React from "react";

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="flex-col">
      {/* icon */}
      <div className="">
        <img src={icon} height={80} width={70} />
      </div>
      {/* title */}
      <div className="mt-3 text-xxl font-semibold">{title}</div>
      {/* description */}
      <div className="mt-1  text-sm">{description}</div>
    </div>
  );
};

export default ServicesCard;
