// navbar component
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./languageSwitcher";
import ThemeSwitcher from "./themeSwitcher";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed w-full p-2 px-16 flex justify-between items-center z-20 bg-primary">
      <div className="w-48 text-xl">
        <h1 className="font-bold">
          <span className="text-red-500 ">{t("Fahad")} </span>
          <span className="font-bold">{t("Sheikh")}</span>
        </h1>
      </div>
      <ul className="flex gap-5 font-semibold">
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
      <div className="w-48 flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <ScrollLink
          className="cursor-pointer"
          to="contactsection"
          smooth={true}
          duration={500}
        >
          {t("Lets Talk")}
        </ScrollLink>
      </div>
    </div>
  );
};

export default Navbar;
