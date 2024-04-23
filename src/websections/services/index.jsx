import React from "react";
import ServicesCard from "../../components/servicescard";
import webdevicon from "../../assets/icons/services_icons/webdev.png";
import mobiledevicon from "../../assets/icons/services_icons/appdev.png";
import seoicon from "../../assets/icons/services_icons/seo.png";
import dataanalysisicon from "../../assets/icons/services_icons/dataanalysis.png";

const ServicesSection = () => {
  return (
    <div
      id="servicesection"
      className="w-full py-16 px-16 flex flex-col items-center justify-center min-h-52 text-center bg-white text-black text-lg leading-relaxed"
    >
      <div className="w-4/6">
        <h1 className="text-2xl font-bold mb-4">Services</h1>
        <p className="text-base">Explore the range of professional services I offer:</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        <ServicesCard
          icon={webdevicon}
          title="Web Development"
          description="Crafting responsive and user-friendly websites tailored to your needs, from design to deployment."
        />
        <ServicesCard
          icon={mobiledevicon}
          title="Mobile Development"
          description="Building native and cross-platform mobile applications with a focus on performance and user experience."
        />
        <ServicesCard
          icon={seoicon}
          title="SEO"
          description="Optimizing your online presence to boost search engine rankings and drive organic traffic through strategic SEO techniques."
        />
        <ServicesCard
          icon={dataanalysisicon}
          title="Data Analysis"
          description="Extracting meaningful insights from data using advanced analytics tools, helping you make data-driven decisions."
        />
      </div>
    </div>
  );
};

export default ServicesSection;
