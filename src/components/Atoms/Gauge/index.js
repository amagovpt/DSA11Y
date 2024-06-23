import React, { useState, useEffect } from "react";
import "./styles.css";

const Gauge = ({ darkTheme, percentage, title }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const theme = darkTheme ? "dark" : ""

  useEffect(() => {
    if (percentage) {
      setAnimatedPercentage(percentage);
    } else {
      const interval = setInterval(() => {
        setAnimatedPercentage((prevPercentage) => {
          if (prevPercentage < 100) {
            return prevPercentage + 1;
          } else {
            clearInterval(interval);
            return 100;
          }
        });
      }, 20);
    }
  }, [percentage]);

  const adjustedPercentage = animatedPercentage * 10;

  const calculateDashOffset = () => {
    const totalLength = 248;
    return totalLength - (adjustedPercentage / 10 / 10) * totalLength;
  };

  const determineColorClass = () => {
    if (animatedPercentage >= 8) {
      return "green";
    } else if (animatedPercentage >= 5) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <div className={`${theme}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="37 -5 120 100"
        width="200"
        height="170"
        role="img"
      >
        <title>{`Pontuação do AccessMonitor. Avaliação da página: ${animatedPercentage} de 10`}</title>
        <path
          className="grey"
          d="M55,90 A55,55 0 1,1 140,90"
          style={{ fill: "none" }}
        />
        <path
          className={`animated ${determineColorClass()}`}
          d="M55,90 A55,55 0 1,1 140,90"
          style={{
            fill: "none",
            strokeDasharray: 248,
            strokeDashoffset: calculateDashOffset(),
          }}
        />
        <text
          x="97"
          y="60"
          textAnchor="middle"
          fill="#333"
          className="ama-typography-display-6 bold"
        >
          {animatedPercentage}
        </text>
        <text
          x="97"
          y="80"
          textAnchor="middle"
          fill="#858585"
          fontSize="10"
          fontFamily="Lato"
        >
          {title}
        </text>
      </svg>
    </div>
  );
};

export { Gauge };
