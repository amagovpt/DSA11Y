import "../src/styles/theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { themes } from "@storybook/theming";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    },
    darkMode: {
      current: 'light',
      // Override the default dark theme
      dark: {
        ...themes.dark,
        appBg: 'black',
        colorPrimary: '#B6DCF6',
        colorSecondary: '#333399',
        // Text Color of options on menu
        textColor: '#FFFFFF',
        textInverseColor: '#B6DCF6',
        // Toolbar default and active colors
        barTextColor: '#B6DCF6',
        barSelectedColor: '#B6DCF6',
        barHoverColor: '#B6DCF6',
        barBg: '#000000',
        // Form colors
        inputBg: '#1b1c1d',
        inputBorder: '#B6DCF6',
        inputTextColor: '#B6DCF6',
        inputBorderRadius: 2,
      },
      // Override the default light theme
      light: {
        ...themes.normal,
        appBg: 'white',
        colorPrimary: '#333399',
        colorSecondary: '#333399',
        // Text Color of options on menu
        textColor: '#000000',
        textInverseColor: '#ffffff',
        // Toolbar default and active colors
        barTextColor: '#9E9E9E',
        barSelectedColor: '#333399',
        barHoverColor: '#333399',
        barBg: '#ffffff',
        // Form colors
        inputBg: '#ffffff',
        inputBorder: '#10162F',
        inputTextColor: '#10162F',
        inputBorderRadius: 2,
      },
      darkClass: 'lights-out',
      lightClass: 'lights-on',
      stylePreview: true,
      classTarget: 'html'
    }
  },
  // globalTypes: {
  //   scheme: {
  //     name: "Scheme",
  //     description: "Escolhe o modo Claro ou Escuro",
  //     defaultValue: "Claro",
  //     toolbar: {
  //       icon: "mirror",
  //       items: ["Claro", "Escuro"],
  //       dynamicTitle: true,
  //     }
  //   }
  // }
};

export default preview;
