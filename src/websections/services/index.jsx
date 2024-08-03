import React from "react";
import ServicesCard from "../../components/cards/servicescard";
import { useTranslation } from "react-i18next";
import { services } from "../../global";
const ServicesSection = () => {
  const { t } = useTranslation();

  const [myServices, setServices] = React.useState([]);

  React.useEffect(() => {
    setServices(services);
  }, []);

  return (
    <div
      id="servicesection"
      className="w-full py-16 px-16 flex flex-col items-center justify-center min-h-52  bg-white text-black text-lg leading-relaxed"
    >
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">{t("Services")}</h1>
        <p className="text-base">
          {t("Explore the range of professional services I offer:")}{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {myServices.map((service, index) => (
          <ServicesCard
            icon={service.icon}
            title={t(service.title)}
            description={t(service.description)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
