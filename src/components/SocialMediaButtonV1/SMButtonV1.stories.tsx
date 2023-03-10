import React from "react";
import { ComponentStory } from "@storybook/react";
import { SMButtonV1 as ButtonComponent } from "./SMButtonV1";
import ButtonDocs from "./SMButtonV1Docs.mdx";
import { AiOutlineInstagram } from "react-icons/ai";

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

export const SMButton1 = Template.bind({});

SMButton1.args = {
  background: "#dd2a7b",
  color: "#fff",
  title: "instagram",
  href: "https://www.instagram.com/sumanbiswas7",
  size: "md",
  target: "_blank",
  children: <AiOutlineInstagram size={26} />,
};

SMButton1.parameters = {
  docs: {
    page: ButtonDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
