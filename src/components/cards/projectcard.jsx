import React from "react";
import linksvg from "../../assets/images/portfolio_images/linksvg.svg";

const ProjectCard = ({ icon, title, description, link }) => {
  return (
    <div className={`flex-col w-full`}>
      {/* icon */}
      <div className="h-48">
        <img
          alt={title}
          src={icon}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      {/* title */}
      <div className="mt-3  text-xxl font-semibold">{title}</div>
      {/* description */}
      <div className="flex justify-between ">
        <div className="mt-1  text-sm">{description}</div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="h-8 w-8 flex items-center justify-center rounded-full bg-red-400"
        >
          <img
            alt={title}
            src={linksvg}
            style={{ height: "70%", width: "60%" }}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
