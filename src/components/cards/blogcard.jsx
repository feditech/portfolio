import React from "react";
import { useTranslation } from "react-i18next";

const BlogCard = ({ icon, title, description = "", link, date }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      {/* icon */}
      <div className="h-48">
        <img
          src={icon}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <p className="text-sm">{date}</p>
      {/* title */}
      <div className="text-xxl font-semibold">{title}</div>
      {/* description */}
      <div className="mt-1 text-sm">{description}</div>
      <a
        href={link}
        target="_blank"
        className="flex items-center text-sm gap-1"
      >
        <span className="flex items-center">{t("Read More")}</span>
        <span className="text-4xl -mt-2">&#8250;</span>
      </a>
    </div>
  );
};

export default BlogCard;
