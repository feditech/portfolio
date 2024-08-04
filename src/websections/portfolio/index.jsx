import React from "react";
import ProjectCard from "../../components/cards/projectcard";
import { useTranslation } from "react-i18next";
import { projects } from "../../global";

const PortfolioSection = () => {
  const { t } = useTranslation();
  return (
    <div
      id="portfoliosection"
      className="w-full py-16 px-16 flex flex-col  min-h-52  bg-primary text-black text-lg leading-relaxed"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">{t("My Portfolio")}</h1>
        <p className="text-base">{t("Check out some of my recent projects")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 mt-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            icon={project.icon}
            title={t(project.title)}
            description={t(project.description)}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
