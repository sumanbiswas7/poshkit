import React from "react";
import { ComponentStory } from "@storybook/react";
import { SMButtonV2 as ButtonComponent } from "./SMButtonV2";
import ButtonDocs from "./SMButtonV2Docs.mdx";
import { FiGithub } from "react-icons/fi";

export default {
  title: "Components/SocialMedia Buttons",
  component: ButtonComponent,
  argTypes: {
    background: { control: "text" },
    color: { control: "text" },
  },
} as any;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const SMButton2 = Template.bind({});

SMButton2.args = {
  background: "#00bd6c",
  color: "#fff",
  href: "https://github.com/sumanbiswas7",
  target: "_blank",
  size: "md",
  children: <FiGithub size={18} />,
};

SMButton2.parameters = {
  docs: {
    page: ButtonDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
