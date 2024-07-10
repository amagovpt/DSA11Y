import React from "react";
import { LoadingComponent } from "./index";
import Documentation from './Documentation.md'
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: "components/Atoms/Loading",
  component: LoadingComponent,
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

const Template = (args) => <LoadingComponent {...args} darkTheme={useDarkMode() ? "dark" : "light"} />;

export const Default = Template.bind({});
Default.args = {
  loadingText: "A carregar...",
};
