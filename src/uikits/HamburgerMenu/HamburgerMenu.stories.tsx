import { Meta, StoryFn } from "@storybook/react";
import { HamburgerMenu } from "./HamburgerMenu";

export default {
  title: "UI Kits/HamburgerMenu",
  component: HamburgerMenu,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
} as Meta<typeof HamburgerMenu>;

const Template: StoryFn<typeof HamburgerMenu> = () => (
  <div className="flex justify-end">
    <HamburgerMenu />
  </div>
);

export const Default = Template.bind({});
