import React from "react";
import { Gauge } from "./index";
import Documentation from './Documentation.md'
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: "components/Atoms/Gauge",
  component: Gauge,
  argTypes: {},
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: Documentation,
      },
    },
  },
};

const Template = (args) => <Gauge {...args} darkTheme={useDarkMode() ? "dark" : "light"} />;

export const Default = Template.bind({});
Default.args = {
  percentage: 9.5,
  title: ["Checklist", "10 aspetos", "críticos funcionais"],
  screenReaderTitle: `Pontuação do AccessMonitor. Avaliação da página: 9.5 de 10`,
  type: ""
};
