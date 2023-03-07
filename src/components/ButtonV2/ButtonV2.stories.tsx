import React from "react";
import { ComponentStory } from "@storybook/react";
import { ButtonV2 as ButtonComponent } from "./ButtonV2";
import ButtonDocs from "./ButtonV2Docs.mdx";

export default {
  title: "Components/Buttons",
  component: ButtonComponent,
  argTypes: {
    background: { control: "text" },
    color: { control: "text" },
    shadowColor: { control: "text" },
  },
} as any;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Button2 = Template.bind({});

Button2.args = {
  label: "Button 2",
  background: "#00bd6c",
  color: "#000",
  shadowColor: "#000",
};

Button2.parameters = {
  docs: {
    page: ButtonDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
