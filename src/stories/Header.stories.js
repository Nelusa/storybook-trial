import { Header } from "./Header";

export default {
  title: "Example/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/lwoCTpbKoJ5JBbuBtKVKOZ/Storybook-Connect-Guide-(Community)?type=design&node-id=53-9673&mode=dev",
    },
  },
};

export const LoggedOut = {};
