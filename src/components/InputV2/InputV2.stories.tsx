import React from "react";
import { ComponentStory } from "@storybook/react";
import { InputV2 as Component } from "./InputV2";
import Docs from "./InputV2Docs.mdx";

export default {
  title: "Components/Inputs",
  component: Component,
  argTypes: {
    background: { control: "text" },
    color: { control: "text" },
    accentColor: { control: "text" },
    borderColor: { control: "text" },
  },
} as any;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Input2 = Template.bind({});

Input2.args = {
  size: "md",
  accentColor: "#00bd6c",
  borderColor: "#4a4a4a",
  color: "#d2d2d2",
};

Input2.parameters = {
  docs: {
    page: Docs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
