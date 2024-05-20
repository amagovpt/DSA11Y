import React from "react";
import { Header } from "./index";

export default {
  title: "components/Organisms/Header",
  component: Header,
};

export const HeaderLogo = () => <Header description={"The web accessibility practices evaluator (WCAG 2.1)"} />;

export const HeaderText = () => <Header description={"O validador de práticas de acessibilidade Web (WCAG 2.1)"} title={"Observatório Português"} title2={"da Acessibilidade Web"} />;
