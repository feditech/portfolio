import React from "react";
import doclinkcover from "../../assets/images/portfolio_images/doclinkcover.jpg";
import floweriecover from "../../assets/images/portfolio_images/floweriecover.png";
import ProjectCard from "../../components/cards/projectcard";
import { useTranslation } from "react-i18next";

const PortfolioSection = () => {
  const { t } = useTranslation();
  return (
    <div
      id="portfoliosection"
      className="w-full py-16 px-16 flex flex-col  min-h-52  bg-red-100 text-black text-lg leading-relaxed"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">{t("My Portfolio")}</h1>
        <p className="text-base">{t("Check out some of my recent projects")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 mt-10">
        <ProjectCard
          icon={doclinkcover}
          title="DocLink"
          description="Healthcare Website"
          link={"https://doclink-web-updated.vercel.app/"}
        />
        <ProjectCard
          icon={floweriecover}
          title="Flowerie"
          description="Event Management"
          link={"https://flowerie.vercel.app/"}
        />
        <ProjectCard icon={doclinkcover} title="SEO" description="REX." />
      </div>
    </div>
  );
};

export default PortfolioSection;
