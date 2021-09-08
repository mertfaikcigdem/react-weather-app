import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      Active Theme: {theme}
      <hr />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme
      </button>
    </div>
  );
}

export default ThemeSwitcher;
