import { Meta, StoryFn } from "@storybook/react";
import { Portfolio } from "./Portfolio";

export default {
  title: "Home/Component/Portfolio",
  component: Portfolio,
} as Meta<typeof Portfolio>;

const Template: StoryFn<typeof Portfolio> = () => <Portfolio />;

export const Default = Template.bind({});
