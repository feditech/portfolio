import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return i18n.language == "en" ? (
    <button className="  px-4 py-2 " onClick={() => i18n.changeLanguage("ar")}>
      AR
    </button>
  ) : (
    <button className="  px-4 py-2 " onClick={() => i18n.changeLanguage("en")}>
      EN
    </button>
  );
};

export default LanguageSwitcher;
