import { Meta, StoryFn } from "@storybook/react";
import { Navbar } from "./Navbar";

export default {
  title: "UI Kits/Navbar",
  component: Navbar,
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});
