import { addons } from "@storybook/manager-api";
import { themes } from "@storybook/theming";
import ama from './ama'

addons.setConfig({
  theme: ama,
});
