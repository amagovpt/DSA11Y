import React from "react";
import { Link as LinkComponent } from "./index";
import { Icon } from "../../index";
import Documentation from './Documentation.md'

export default {
  title: "components/Atoms/Link",
  component: LinkComponent,
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
  return <LinkComponent {...args} text="Link" />;
};

export const _Link = Template.bind({});
_Link.args = {
  text: "Link",
  to: "/",
};

export const _LinkWithLeftIcon = Template.bind({});
_LinkWithLeftIcon.args = {
  text: "Link",
  to: "/",
  iconLeft: <Icon name="AMA-Setalongaoficial-Line" />,
};

export const _LinkWithRightIcon = Template.bind({});
_LinkWithRightIcon.args = {
  text: "Link",
  to: "/",
  iconRight: <Icon name="AMA-Setalongaoficial-Line" />,
};
