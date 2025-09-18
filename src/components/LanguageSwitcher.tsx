"use client";
import { useState } from "react";

interface LanguageSwitcherProps {
  onChangeLanguage: (lang: string) => void;
}

export default function LanguageSwitcher({ onChangeLanguage }: LanguageSwitcherProps) {
  const [current, setCurrent] = useState("en");

  const changeLanguage = (lang: string) => {
    setCurrent(lang);
    onChangeLanguage(lang);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <button disabled={current === "en"} onClick={() => changeLanguage("en")}>EN</button>
      <button disabled={current === "fr"} onClick={() => changeLanguage("fr")}>FR</button>
      <button disabled={current === "hi"} onClick={() => changeLanguage("hi")}>HI</button>
    </div>
  );
}
