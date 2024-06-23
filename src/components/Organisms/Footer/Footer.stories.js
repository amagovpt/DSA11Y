import React from "react";
import { Footer } from "./index";
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: "components/Organisms/Footer",
  component: Footer,
};

export const Default = () => {
  return (
    <Footer darkTheme={useDarkMode()} />
  )
};
