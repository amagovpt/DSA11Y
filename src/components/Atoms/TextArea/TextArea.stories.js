import React from "react";
import { TextArea } from "./index";
import Documentation from './Documentation.md'

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
  return <TextArea {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Custom TextArea",
  type: "text",
  placeholder: "Enter value",
  error: "",
};
