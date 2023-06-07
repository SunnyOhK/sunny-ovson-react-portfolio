import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colors, setColors] = useState({
    primary: "black",
    secondary: "white",
    tertiary: "#78586F",
    quaternary: "#FAEBD7",
    headlinerText: "#414449"
  });

  const toggleMode = () => {
    if(colors.primary === "black"){
      setColors({
        primary: "#414449",
        secondary: "#FEFEFE",
        tertiary: "#62677A",
        quaternary: "#99AEAF",
        headlinerText: "#414449"
      })
    } else {
      setColors({
        primary: "black",
        secondary: "white",
        tertiary: "#78586F",
        quaternary: "#FAEBD7",
        headlinerText: "#414449"
      })
    }
  }

  return (
    <ThemeContext.Provider value={{ colors, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};