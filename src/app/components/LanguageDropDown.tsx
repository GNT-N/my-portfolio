import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageDropDown: React.FC = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLangChange = (selectedLang: string) => {
    i18n.changeLanguage(selectedLang);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const languageFlag: { [key: string]: string } = {
    en: "flag-en.svg",
    fr: "flag-fr.svg",
    vn: "flag-vn.svg",
  };

  const languageName: { [key: string]: string } = {
    en: "",
    fr: "",
    vn: "",
  };

  return (
    <div className="relative inline-block">
      <button
        className="text-zinc-400 hover:text-zinc-100 rounded bg-transparent flex items-center space-x-2"
        onClick={toggleDropdown}
      >
        <img
          src={`/flags/${languageFlag[i18n.language]}`}
          alt={i18n.language}
          className="w-5 h-5"
        />
        {languageName[i18n.language]}
      </button>
      {isDropdownOpen && (
        <div className="mt-2 w-14 bg-transparent rounded-lg">
          <button onClick={() => handleLangChange("en")} className="py-2 px-4">
            <img src="/flags/flag-en.svg" alt="en" className="w-5 h-5" />
          </button>
          <button onClick={() => handleLangChange("fr")} className="py-2 px-4">
            <img src="/flags/flag-fr.svg" alt="fr" className="w-5 h-5" />
          </button>
          <button onClick={() => handleLangChange("vn")} className="py-2 px-4">
            <img src="/flags/flag-vn.svg" alt="vn" className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageDropDown;
