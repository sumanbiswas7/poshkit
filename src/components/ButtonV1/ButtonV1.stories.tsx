import React from "react";
import { ComponentStory } from "@storybook/react";
import { ButtonV1 as ButtonComponent } from "./ButtonV1";
import ButtonDocs from "./ButtonV1Docs.mdx";

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

export const Button1 = Template.bind({});

Button1.args = {
  label: "Button 1",
  gradient: ["#314ab6", "#00bd6c"],
};

Button1.parameters = {
  docs: {
    page: ButtonDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
