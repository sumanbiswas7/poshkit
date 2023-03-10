import React from "react";
import { ComponentStory } from "@storybook/react";
import { LoaderV2 as Component } from "./LoaderV2";
import Docs from "./LoaderV2Docs.mdx";

export default {
  title: "Components/Loaders",
  component: Component,
  argTypes: { color: { control: "text" } },
} as any;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Loader2 = Template.bind({});

Loader2.args = {
  size: "md",
  loading: true,
  color: "#00bd6c",
};

Loader2.parameters = {
  docs: {
    page: Docs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
