import React from "react";
import { Button, buttonVariant } from "./index";
import { Icon } from "../../index";
import Documentation from "./Documentation.md";
import { useDarkMode } from 'storybook-dark-mode';

export default {
  title: "components/Atoms/Button",
  component: Button,
  argTypes: {},
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: Documentation,
      },
    },
  },
};

const Template = (args) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {Object.values(buttonVariant).map((variant) => (
        <span key={variant} style={{ margin: 5 }}>
          <Button {...args} darkTheme={useDarkMode()} variant={variant} radius="full">
            {variant}
          </Button>
        </span>
      ))}
    </div>
  );
};

export const _Button = Template.bind({});
_Button.args = {
  loading: false,
};

export const ButtonPrimary = () => (
  <Button className="" variant="primary" text="Primary button" darkTheme={useDarkMode()} />
);

export const ButtonSecondary = () => (
  <Button className="" variant="secondary" text="Secondary button" darkTheme={useDarkMode()} />
);

export const ButtonGhost = () => (
  <Button className="" variant="ghost" text="Ghost button" darkTheme={useDarkMode()} />
);

export const ButtonCancel = () => (
  <Button className="" variant="cancel" text="Cancel button" darkTheme={useDarkMode()} />
);

export const ButtonSuccess = () => (
  <Button className="" variant="success" text="Success button" darkTheme={useDarkMode()} />
);

export const ButtonDanger = () => (
  <Button className="" variant="danger" text="Danger button" darkTheme={useDarkMode()} />
);

export const ButtonBorderless = () => (
  <Button
    className=""
    variant="danger"
    radius="none"
    text="Borderless button"
    darkTheme={useDarkMode()}
  />
);

export const _LoadingButton = Template.bind({});
_LoadingButton.args = {
  loading: true,
};

export const _ButtonWithLeftIcon = Template.bind({});
_ButtonWithLeftIcon.args = {
  loading: false,
  iconLeft: <Icon name="AMA-Setalongaoficial-Line" />,
};

export const _ButtonWithRightIcon = Template.bind({});
_ButtonWithRightIcon.args = {
  loading: false,
  iconRight: <Icon name="AMA-Setalongaoficial-Line" />,
};

export const _ButtonWithBothIcons = Template.bind({});
_ButtonWithBothIcons.args = {
  loading: false,
  variant: buttonVariant.WITH_ICONS,
  iconLeft: <Icon name="AMA-Setalongaoficial-Line" />,
  iconRight: <Icon name="AMA-Setalongaoficial-Line" />,
};
