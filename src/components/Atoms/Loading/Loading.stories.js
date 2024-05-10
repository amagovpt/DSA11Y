import React from "react";
import { LoadingComponent } from "./index";
import Documentation from './Documentation.md'

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

const Template = (args) => <LoadingComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  percentage: 9.5,
};
