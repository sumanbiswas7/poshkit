import React from "react";
import { ComponentStory } from "@storybook/react";
import { ButtonV3 as ButtonComponent } from "./ButtonV3";
import ButtonDocs from "./ButtonV3Docs.mdx";

export default {
  title: "Components/Buttons",
  component: ButtonComponent,
  argTypes: {
    background: { control: "text" },
    color: { control: "text" },
  },
} as any;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Button3 = Template.bind({});

Button3.args = {
  label: "Button 3",
  background: "#00bd6c",
  color: "#000",
};

Button3.parameters = {
  docs: {
    page: ButtonDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
