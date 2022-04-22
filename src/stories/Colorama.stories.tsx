import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Colorama } from "../Colorama";
import { DEFAULT_COLORS } from "../styled";

export default {
  title: "Colorama/Example",
  component: Colorama,
  argTypes: {
    text: {
      defaultValue: "Hello World!",
      control: { type: "text" },
    },
    colors: {
      defaultValue: DEFAULT_COLORS,
      control: { type: "array" },
    },
  },
} as ComponentMeta<typeof Colorama>;

const Template: ComponentStory<typeof Colorama> = (args) => {
  return <Colorama {...args} />;
};

export const Primary = Template.bind({});
