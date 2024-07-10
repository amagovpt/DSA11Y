import React from "react";
import { InputSearch } from "./index";
import Documentation from './Documentation.md'
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: "components/Atoms/Inputsearch",
  component: InputSearch,
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
  const [value, setValue] = React.useState("");
  const onSearch = (val) => {
    alert(`onChange value: ${val}`);
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <InputSearch
        {...args}
        value={value}
        onChange={onChange}
        onSearch={onSearch}
        darkTheme={useDarkMode() ? "dark" : "light"}
      />
      <div style={{ color: useDarkMode() ? 'var(--ama-color-text-blue)' : 'var(--ama-color-text-grey)' }}>value: {value}</div>
    </>
  );
};

export const Inputsearch = Template.bind({});
Inputsearch.args = {};
