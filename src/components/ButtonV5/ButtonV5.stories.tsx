import React from "react";
import { ComponentStory } from "@storybook/react";
import { ButtonV5 as ButtonComponent } from "./ButtonV5";
import ButtonDocs from "./ButtonV5Docs.mdx";

export default {
  title: "Components/Buttons",
  component: ButtonComponent,
  argTypes: {
    color: { control: "text" },
  },
} as any;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Button5 = Template.bind({});

Button5.args = {
  label: "Button 5",
  color: "#1d1d1d",
};

Button5.parameters = {
  docs: {
    page: ButtonDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
