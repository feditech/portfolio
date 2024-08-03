import React from "react";
import ProgressBar from "../../components/linearprogessbar";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
const FooterSection = () => {
  const { t } = useTranslation();
  return (
    <div
      id="servicesection"
      className="w-full py-16 px-16 flex flex-col items-center justify-center min-h-52 text-center bg-black text-white text-lg leading-relaxed"
    >
      <ul className="flex gap-5 font-semibold items-center">
        <li className="cursor-pointer">
          <ScrollLink to="aboutsection" smooth={true} duration={500}>
            {t("About")}
          </ScrollLink>
        </li>
        <li className="cursor-pointer">
          <ScrollLink to="servicesection" smooth={true} duration={500}>
            {t("Services")}
          </ScrollLink>
        </li>
        <li>
          <p className="text-3xl text-red-500 font-bold">{t("Fahad Sheikh")}</p>
        </li>
        <li className="cursor-pointer">
          <ScrollLink to="portfoliosection" smooth={true} duration={500}>
            {t("Portfolio")}
          </ScrollLink>
        </li>

        <li className="cursor-pointer">
          <ScrollLink to="blogssection" smooth={true} duration={500}>
            {t("Blogs")}
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default FooterSection;
