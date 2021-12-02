import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Button } from "../components/Button";
import type { ButtonProps } from "../components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {
      options: ["primary", "secondary", "outline", "danger", "text"],
      control: { type: "radio" }, // Automatically inferred when 'options' is defined
    },
    size: {
      options: ["sm", "md", "lg", "xl", "xxl"],
      control: { type: "radio" }, // Automatically inferred when 'options' is defined
    },
  },
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button CTA",
  type: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button Secondary",
  type: "secondary",
};

export const Oulined = Template.bind({});
Oulined.args = {
  label: "Button Oulined",
  type: "outline",
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Button Danger",
  type: "danger",
};

export const Text = Template.bind({});
Text.args = {
  label: "Button Text",
  type: "text",
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Button Loading",
  type: "primary",
  loading: true,
};
