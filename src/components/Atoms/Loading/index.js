import React from "react";
import "./styles.css";

export function LoadingComponent({ darkTheme, loadingText }) {
  const theme = darkTheme === "dark" ? "dark" : ""
  return (
    <div className={` ${theme} loadingContainer ama`}>
      <div className="text_container">
        <span className="ama-typography-body">{loadingText}</span>
      </div>
      <div className="loader">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="dot"
            style={{ animationDelay: `${index * 0.4}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
