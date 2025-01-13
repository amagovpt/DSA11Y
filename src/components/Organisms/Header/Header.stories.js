import React from "react";
import { Header } from "./index";
import { useDarkMode } from 'storybook-dark-mode';
import Documentation from './Documentation.md'

export default {
  title: "components/Organisms/Header",
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: Documentation,
      },
    },
  },
};

export const HeaderLogo = () => <Header
                                  description={"The web accessibility practices evaluator (WCAG 2.1)"}
                                  logo={useDarkMode() ? "/logo-dark.svg" : "/logo.svg"}
                                  darkTheme={useDarkMode() ? "dark" : "light"}
                                  homePage={true}
                                  language={"en"}
                                />;

export const HeaderText = () => <Header
                                  description={"O validador de práticas de acessibilidade Web (WCAG 2.1)"}
                                  title={"Observatório Português"}
                                  title2={"da Acessibilidade Web"}
                                  darkTheme={useDarkMode() ? "dark" : "light"}
                                  homePage={true}
                                  linkTo={""}
                                  language={"pt"}
                                  obsSpecial={true}
                                />;
