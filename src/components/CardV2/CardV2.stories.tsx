import React from "react";
import { ComponentStory } from "@storybook/react";
import { CardV2 as ButtonComponent } from "./CardV2";
import ButtonDocs from "./CardV2Docs.mdx";

export default {
  title: "Components/Cards",
  component: ButtonComponent,
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
    frontBgColor: { control: "text" },
    backBgColor: { control: "text" },
  },
} as any;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

const frontContent = (
  <>
    <img
      src="https://avatars.githubusercontent.com/u/89641167?v=4"
      style={{ width: 50, borderRadius: 50 }}
    />
    <h2 style={{ margin: 7 }}>Suman Biswas</h2>
    <p
      style={{
        margin: 0,
        color: "#7d7d7d",
        textAlign: "left",
        paddingInline: 17,
        fontSize: 11,
      }}
    >
      Currently a student, learning and developing new skills. fuelled by a
      passion for making cool websites and applications.
    </p>
  </>
);

const backContent = (
  <div style={{ display: "flex", flexDirection: "column", color: "black" }}>
    <a href="https://www.linkedin.com/in/sumanbiswas7">linkedin</a>
    <a href="https://github.com/sumanbiswas7">github</a>
    <a href="https://www.instagram.com/sumanbiswas7">instagram</a>
  </div>
);

export const Card2 = Template.bind({});

Card2.args = {
  width: "200px",
  height: "300px",
  frontBgColor: "#1d1d1d",
  backBgColor: "#00bd6c",
  frontContent,
  backContent,
};

Card2.parameters = {
  docs: {
    page: ButtonDocs,
  },
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// More on args: https://storybook.js.org/docs/react/writing-stories/args
