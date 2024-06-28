import React from "react";
import { CheckGroup } from "./index";
import Documentation from './Documentation.md'
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: "components/Atoms/Checkgroup",
  component: CheckGroup,
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

const data = [
  {
    id: "1",
    name: "item 1",
  },
  {
    id: "2",
    name: "item 2",
  },
  {
    id: "3",
    name: "item 3",
  },
  {
    id: "4",
    name: "item 4",
  },
  {
    id: "5",
    name: "item 5",
    disabled: true,
  },
];

const Template = (args) => {
  const [value, setValue] = React.useState("1");

  return (
    <>
      <CheckGroup {...args} value={value} onChange={setValue} darkTheme={useDarkMode() ? "" : "light"} />
      <div style={{ color: useDarkMode() ? 'var(--ama-color-text-blue)' : 'var(--ama-color-text-grey)' }}>value: {value}</div>
    </>
  );
};

export const _Checkgroup = Template.bind({});
_Checkgroup.args = {
  data,
  inline: true,
};
