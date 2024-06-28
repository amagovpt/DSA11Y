import React from "react";
import { TopBar } from "./components/top-bar";
import { WidgetBar } from "./components/widgets-bar";

import "./styles/styles.css";

export function Header({description, title, title2, logo, darkTheme, changeTheme, changeLanguage}) {
  const theme = darkTheme === "light" ? "" : "dark"

  return (
    <header id="wrapper-navbar" aria-label="Cabeçalho da página do AccessMonitor" className={`${theme}`}>
      <div className="skip-to-content">
        <div className="container">
          <a className="skip-to-content-link p-0 d-flex align-items-center" href="#content">
            <span className="ama-typography-action-small py-2 px-3">Saltar para o conteúdo principal da página</span>
          </a>
        </div>
      </div>

      <TopBar
        darkTheme={darkTheme}
        changeTheme={changeTheme ? () => changeTheme() : null}
        changeLanguage={changeTheme ? () => changeLanguage() : changeTheme}
      />

      <WidgetBar
        logo={logo}
        title={title}
        title2={title2}
        description={description}
        changeTheme={changeTheme ? () => changeTheme() : null}
        changeLanguage={changeLanguage ? () => changeLanguage() : changeTheme}
        darkTheme={darkTheme}
      />
    </header>
  );
}
