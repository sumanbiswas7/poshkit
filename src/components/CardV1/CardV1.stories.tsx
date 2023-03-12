import React from "react";
import { ComponentStory } from "@storybook/react";
import { CardV1 as ButtonComponent } from "./CardV1";
import ButtonDocs from "./CardV1Docs.mdx";

export default {
  title: "Components/Cards",
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: "text" },
    shadowColor: { control: "text" },
  },
} as any;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Card1 = Template.bind({});

const Content = (
  <>
    <h2>Suman Biswas</h2>
    <div style={{ width: "90%", height: "1px", backgroundColor: "#2d2d2d" }} />
    <p style={{ color: "#8d8d8d", width: 180 }}>
      Currently a student, learning and developing new skills. fuelled by a
      passion for making cool websites and applications.
    </p>
  </>
);

Card1.args = {
  gradient: ["#314ab6", "#00bd6c"],
  children: Content,
  shadowColor: "#00ff752b",
  backgroundColor: "#1a1a1a",
};

Card1.parameters = {
  docs: {
    page: ButtonDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
