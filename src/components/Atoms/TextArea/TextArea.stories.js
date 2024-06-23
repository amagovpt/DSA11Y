import React from "react";
import { TextArea } from "./index";
import Documentation from './Documentation.md'
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: "components/Atoms/TextArea",
  component: TextArea,
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

const Template = (args) => {
  return <TextArea {...args} darkTheme={useDarkMode()} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Custom TextArea",
  type: "text",
  placeholder: "Enter value",
  error: "",
};
