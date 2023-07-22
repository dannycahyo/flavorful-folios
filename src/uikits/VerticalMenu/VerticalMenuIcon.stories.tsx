import { Meta, StoryFn } from "@storybook/react";
import { VerticalMenuIcon } from "./VerticalMenuIcon";

export default {
  title: "UI Kits/VerticalMenuIcon",
  component: VerticalMenuIcon,
} as Meta<typeof VerticalMenuIcon>;

const Template: StoryFn<typeof VerticalMenuIcon> = () => <VerticalMenuIcon />;

export const Default = Template.bind({});
