import React from "react";
import { ComponentStory } from "@storybook/react";
import { SwitchV3 as ButtonComponent } from "./SwitchV3";
import ButtonDocs from "./SwitchV3Docs.mdx";

export default {
  title: "Components/Switches",
  component: ButtonComponent,
} as any;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Switch3 = Template.bind({});

Switch3.args = {
  size: "sm",
  uncheckedBgColor: "#F6F6F7",
  checkedBgColor: "#313136",
};

Switch3.parameters = {
  docs: {
    page: ButtonDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
