import React, {
  Children,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";

const Theme = createContext();

export const Provider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const values = { theme, setTheme };

  return <Theme.Provider value={values}>{children}</Theme.Provider>;
};

export const useTheme = () => useContext(Theme);
