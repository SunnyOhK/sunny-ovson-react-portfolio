import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colors, setColors] = useState({
    primary: "#000000",
    secondary: "#FFFFFF",
    tertiary: "#78586F",
    quaternary: "#FAEBD7",
    headlinerText: "#414449"
});

  const toggleMode = (event) => {
    const colorValue = event.target.value;
    if (colorValue === 2){
      setColors({
        primary: "#414449",
        secondary: "#FEFEFE",
        tertiary: "#62677A",
        quaternary: "#FAEBD7",
        headlinerText: "#414449"
      })
    } else if (colorValue === 1){
      setColors({
        primary: "#000000",
        secondary: "#FFFFFF",
        tertiary: "#78586F",
        quaternary: "#FFFFFF",
        headlinerText: "#414449"
      })
    } else if (colorValue === 3){
      setColors({
        primary: "#10224C",
        secondary: "#FCDAAF",
        tertiary: "#F36B3D",
        quaternary: "#FCDAAF",
        headlinerText: "#006E94"
      })
    } else if (colorValue === 4){
      setColors({
        myname: "",
        navback: "",
        navbtntxt: "",
        headerback: "",
        footerback: "",
        footicon: "",
        copyrighttxt: "",
        pageback: "",
        primary: "#10224C",
        secondary: "#FCDAAF",
        tertiary: "#F36B3D",
        quaternary: "#FCDAAF",
        headlinerText: "#006E94"
      })
    }
  }

  return (
    <ThemeContext.Provider value={{ colors, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};