// navbar component
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./languageSwitcher";
import ThemeSwitcher from "./themeSwitcher";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-11/12 mx-auto p-2  flex justify-between items-center ">
      <h1>{t("Hello")}</h1>
      <ul className="flex gap-5 font-semibold">
        <li>{t("About")}</li>
        <li>{t("Services")}</li>
        <li>{t("Portfolio")}</li>
        <li>{t("Blog")}</li>
      </ul>
      <div className="flex items-center gap-1">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <button className="bg-primary  dark:bg-primary-light px-4 py-2 rounded-md">
          {t("Lets Talk")}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
