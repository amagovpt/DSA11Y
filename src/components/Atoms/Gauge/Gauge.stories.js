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

const Template = (args) => <Gauge {...args} darkTheme={useDarkMode()} />;

export const Default = Template.bind({});
Default.args = {
  percentage: 9.5,
  title: "Pontuação"
};
