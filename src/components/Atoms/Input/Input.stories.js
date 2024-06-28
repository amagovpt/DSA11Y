import React from "react";
import { Input } from "./index";
import Documentation from './Documentation.md'
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: "components/Atoms/Input",
  component: Input,
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
  return <Input {...args} darkTheme={useDarkMode() ? "" : "light"} />;
};

export const Default = Template.bind({});

Default.args = {
  label: "Custom Input",
  type: "text",
  placeholder: "http(s)",
  error: "",
};
