import React from "react";
import { useTranslation } from "react-i18next";

const Left = () => {
  const { t } = useTranslation();
  return (
    <div className="w-2/5 py-16 flex flex-col justify-around gap-6">
      <div className="flex flex-col gap-3">
        <p className="text-xl">{t("Full Stack Developer")}</p>
        <p className="text-6xl font-bold">{t("Hi There, I'm")} </p>
        <p className="text-6xl text-red-500 font-bold">{t("Fahad Sheikh")}</p>

        <p className="text-md">
          {t(
            "Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together."
          )}
        </p>
      </div>
      <div className="flex">
        <button className="bg-black text-white p-2 px-6 rounded-sm text-xl">
          {t("Hire Me")}
        </button>
      </div>
    </div>
  );
};

export default Left;
