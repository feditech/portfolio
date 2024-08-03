import React from "react";
import ServicesCard from "../../components/cards/servicescard";
import { useTranslation } from "react-i18next";
import { services } from "../../global";
const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <div
      id="servicesection"
      className="w-full py-16 px-16 flex flex-col items-center justify-center min-h-52 text-center bg-white text-black text-lg leading-relaxed"
    >
      <div className="">
        <h1 className="text-2xl font-bold mb-4">{t("Services")}</h1>
        <p className="text-base">
          {t("Explore the range of professional services I offer:")}{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {services.map((service, index) => (
          <ServicesCard
            icon={service.icon}
            title={service.title}
            description={service.description}
            key={index}
          />
        ))}

        {/* <ServicesCard
          icon={webdevicon}
          title={t("Web Development")}
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
        /> */}
      </div>
    </div>
  );
};

export default ServicesSection;
