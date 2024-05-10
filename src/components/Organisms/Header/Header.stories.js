import React from "react";
import { Header } from "./index";
import Documentation from './Documentation.md'

export default {
  title: "components/Organisms/Header",
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: Documentation,
      },
    },
  },
};

export const Default = () => <Header />;
