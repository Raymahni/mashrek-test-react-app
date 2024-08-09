import React from "react";
import { useTranslation } from "react-i18next";
import BaseButton from "./BaseButton";

const BaseLanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="mb-4">
      <BaseButton
        variant="secondary"
        onClick={() => changeLanguage("en")}
        className="w-20 mr-2"
      >
        English
      </BaseButton>
      <BaseButton
        variant="secondary"
        onClick={() => changeLanguage("es")}
        className="w-20 mr-2"
      >
        Español
      </BaseButton>
      <BaseButton
        variant="secondary"
        onClick={() => changeLanguage("fr")}
        className="w-20"
      >
        Français
      </BaseButton>
    </div>
  );
};

export default BaseLanguageSwitcher;
