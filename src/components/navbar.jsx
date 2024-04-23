// navbar component
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./languageSwitcher";
import ThemeSwitcher from "./themeSwitcher";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="fixed w-full p-2 px-16 flex justify-between items-center z-20 bg-secondary  ">
      <h1>{t("PortFolio")}</h1>
      <ul className="flex gap-5 font-semibold">
        <li className="cursor-pointer">
          <ScrollLink to="aboutsection" smooth={true} duration={500}>
            {t("About")}
          </ScrollLink>
        </li>
        <li>{t("Services")}</li>
        <li>{t("Portfolio")}</li>
        <li>{t("Blog")}</li>
      </ul>
      <div className="flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <button className="">
          {t("Lets Talk")}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
