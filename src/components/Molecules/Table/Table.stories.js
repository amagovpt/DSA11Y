import React from "react";
import { TableComponent } from "./index";
import Documentation from './Documentation.md'
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: "components/Molecules/Table",
  component: TableComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: Documentation,
      },
    },
  },
};

const options = [
  {
    id: "1",
    title:
      "I found 1 image on the page without the alternative text equivalent.",
    component: (
      <div>
        Check if the alternative text equivalent found in the images provides
        equal information or function as the one performed by the image on the
        page. H37: Using alt attributes on img elements This WCAG 2.1
        technique is related to: Success criteria 1.1.1 (Level A) Notions
        about the SC 1.1.1
      </div>
    ),
    lvl: "AA",
    iconName: "AMA-Middle-Line",
    ele: "test",
    tdClassName: "warning-cell"
  },
];

function callbackImgT(t) {
  if(t === "AMA-Middle-Line") {
    return "Prática não conforme"
  }
}

export const Table = () =>
  <TableComponent
    data={options}
    onClick={(e) => console.log(e)}
    caption={"Práticas avaliadas"}
    col1={"Prática encontrada"}
    col2={"Nível"}
    col3={"Ver detalhe"}
    lvlTitle={"Nível: "}
    imageTitlesCallback={(t) => callbackImgT(t)}
    darkTheme={useDarkMode() ? "dark" : "light"}
    ariaLabels={{AA: "duplo ", AAA: "triplo ", button: "Ver detalhe"}}
  />;
