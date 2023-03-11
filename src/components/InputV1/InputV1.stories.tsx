import React from "react";
import { ComponentStory } from "@storybook/react";
import { InputV1 as Component } from "./InputV1";
import Docs from "./InputV1Docs.mdx";

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

export const Input1 = Template.bind({});

Input1.args = {
  size: "md",
  background: "#2e2e2e",
  accentColor: "#00bd6c",
  borderColor: "#4a4a4a",
  color: "#d2d2d2",
  label: "Name",
};

Input1.parameters = {
  docs: {
    page: Docs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
