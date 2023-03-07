import React from "react";
import { ComponentStory } from "@storybook/react";
import { ButtonV4 as ButtonComponent } from "./ButtonV4";
import ButtonDocs from "./ButtonV4Docs.mdx";

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

export const Button4 = Template.bind({});

Button4.args = {
  label: "Button 4",
  background: "#1d1d1d",
  color: "#fff",
};

Button4.parameters = {
  docs: {
    page: ButtonDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
