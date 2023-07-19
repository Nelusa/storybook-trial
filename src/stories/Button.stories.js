import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/lwoCTpbKoJ5JBbuBtKVKOZ/Storybook-Connect-Guide-(Community)?type=design&node-id=33014-5312&mode=dev",
    },
  },
};

export const Secondary = {
  args: {
    label: "Button new",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};
