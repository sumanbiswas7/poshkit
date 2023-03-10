import React from "react";
import { ComponentStory } from "@storybook/react";
import { LoaderV3 as Component } from "./LoaderV3";
import Docs from "./LoaderV3Docs.mdx";

export default {
  title: "Components/Loaders",
  component: Component,
  argTypes: {
    eyeBackground: { control: "text" },
    eyeballColor: { control: "text" },
  },
} as any;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Loader3 = Template.bind({});

Loader3.args = {
  size: "md",
  loading: true,
  eyeBackground: "#00bd6c",
  eyeballColor: "#1d1d1d",
};

Loader3.parameters = {
  docs: {
    page: Docs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
