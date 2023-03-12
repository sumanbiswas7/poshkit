import React from "react";
import { ComponentStory } from "@storybook/react";
import { SwitchV2 as ButtonComponent } from "./SwitchV2";
import ButtonDocs from "./SwitchV2Docs.mdx";

export default {
  title: "Components/Switches",
  component: ButtonComponent,
} as any;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Switch2 = Template.bind({});

Switch2.args = {
  size: "sm",
  handlerColor: "#1d1d1d",
  uncheckedBgColor: "#00bd6c",
  checkedBgColor: "#005731",
};

Switch2.parameters = {
  docs: {
    page: ButtonDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
