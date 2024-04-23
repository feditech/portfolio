import React from "react";

const ProjectCard = ({ icon, title, description }) => {
  return (
    <div className={`flex-col`}>
      {/* icon */}
      <div className="h-48">
        <img
          src={icon}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </div>
      {/* title */}
      <div className="mt-3 text-left text-xxl font-semibold">{title}</div>
      {/* description */}
      <div className="mt-1 text-left text-sm">{description}</div>
    </div>
  );
};

export default ProjectCard;
