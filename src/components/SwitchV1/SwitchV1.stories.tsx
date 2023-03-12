import React from "react";
import { ComponentStory } from "@storybook/react";
import { SwitchV1 as ButtonComponent } from "./SwitchV1";
import ButtonDocs from "./SwitchV1Docs.mdx";

export default {
  title: "Components/Switches",
  component: ButtonComponent,
} as any;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Switch1 = Template.bind({});

Switch1.args = {
  size: "sm",
  uncheckedBgColor: "#83d8ff",
  checkedBgColor: "#749dd6",
};

Switch1.parameters = {
  docs: {
    page: ButtonDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
