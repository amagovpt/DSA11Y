import React from "react";
import { Breadcrumb } from "./index";
import Documentation from './Documentation.md'

export default {
  title: "components/Atoms/Breadcrumb",
  component: Breadcrumb,
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

const Template = ({ data, ...args }) => {
  return <Breadcrumb data={data} {...args} />;
};

export const _Breadcrumb = Template.bind({});

_Breadcrumb.args = {
  data: [
    {
      title: "Acessibilidade.gov.pt",
      href: "#",
    },
    {
      title: "Observatório",
      href: "#",
    },
    {
      title: "Diretórios",
      href: "#",
    },
  ],
};
