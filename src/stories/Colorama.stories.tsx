import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Colorama,
  useColorama,
  AnimationDirectionType,
  AnimationType,
} from "../Colorama";
import { DEFAULT_COLORS } from "../styled";

export default {
  title: "Example/Colorama",
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
  const { ref, play } = useColorama();

  return (
    <>
      <Colorama {...args} ref={ref} />
      <button onClick={() => play(AnimationType.LEFT)}>Play forward</button>
      <button
        onClick={() => play(AnimationType.LEFT, AnimationDirectionType.REVERSE)}
      >
        Play backward
      </button>
    </>
  );
};

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
  text: "test",
};
