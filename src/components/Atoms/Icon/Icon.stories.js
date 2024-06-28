import React from "react";
import { Icon } from "./index";
import { icons } from "./selection.json";
import Documentation from './Documentation.md'
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: "components/Atoms/Icon",
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: Documentation,
      },
    },
  },
};

export function AllIcons() {
  return (
    <div className="list-icons-ama-container">
      {icons.map((icon, index) => (
        <div key={index}>
          <div className="list-icons-ama-content">
            <Icon name={icon.properties.name} darkTheme={useDarkMode() ? "" : "light"} />
            <span style={{ marginTop: 10, fontSize: 13, color: useDarkMode() ? 'var(--ama-color-background-white)' : 'var(--ama-color-text-grey)' }}>
              {icon.properties.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
