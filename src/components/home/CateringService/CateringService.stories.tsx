import { Meta, StoryFn } from "@storybook/react";
import { CateringService } from "./CateringService";

export default {
  title: "Home/Component/CateringService",
  component: CateringService,
} as Meta<typeof CateringService>;

const Template: StoryFn<typeof CateringService> = () => <CateringService />;

export const Default = Template.bind({});
