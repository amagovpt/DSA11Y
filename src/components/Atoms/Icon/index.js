import React from "react";
import "./style.css";
import "./icon.css";

const Icon = ({ name, darkTheme }) => {
  const theme = darkTheme === "dark" ? "dark" : ""
  return <i className={`icon-${name} ${theme}`} aria-hidden="true"></i>;
};

export { Icon };
