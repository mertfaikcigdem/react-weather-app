import React from "react";
import Weather from "./Weather";
import ThemeSwitcher from "./ThemeSwitcher";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import "../App.css";

function Container() {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={`${theme === "dark" ? theme : ""}`}>
      <ThemeSwitcher />
      <Weather />
    </div>
  );
}

export default Container;
