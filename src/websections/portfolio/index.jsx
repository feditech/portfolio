import React from "react";
import ProjectCard from "../../components/projectcard";
import doclinkcover from "../../assets/images/portfolio_images/doclinkcover.jpg";
import floweriecover from "../../assets/images/portfolio_images/floweriecover.png";

const PortfolioSection = () => {
  return (
    <div
      id="portfoliosection"
      className="w-full py-16 px-16 flex flex-col  min-h-52 text-center bg-red-100 text-black text-lg leading-relaxed"
    >
      <div className="w-4/6">
        <h1 className="text-2xl font-bold mb-4">My Portfolio</h1>
        <p className="text-base">
          Explore the range of professional services I offer:
        </p>
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
        <ProjectCard
          icon={doclinkcover}
          title="SEO"
          description="REX."
        />
      </div>
    </div>
  );
};

export default PortfolioSection;
