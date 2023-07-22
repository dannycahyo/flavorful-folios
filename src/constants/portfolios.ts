import { IconType } from "react-icons";
import {
  BsFillBoxFill,
  BsFillBuildingsFill,
  BsFillPenFill,
  BsHandThumbsUp,
} from "react-icons/bs";

type Portfolio = {
  iconName: IconType;
  title: string;
  description: string;
};

const portfolios: Portfolio[] = [
  {
    iconName: BsFillBoxFill,
    title: "Design",
    description:
      "A full stack allaround designer that may or may not include a guide for specific creative people",
  },
  {
    iconName: BsFillBuildingsFill,
    title: "Develop",
    description:
      "Tellus phorotra erat tristique erat done dignissim etiam sed malesik anim sodales lorem losum",
  },
  {
    iconName: BsFillPenFill,
    title: "Write",
    description:
      "Vestibulum consequat, dignissim tellus sollicitudin vulputate elit aliquet ullamcorper feugiat nisi",
  },
  {
    iconName: BsHandThumbsUp,
    title: "Promote",
    description:
      "Quam facilisi nunc faucibus at porttitor vestibulum consequat dignissim tellus sollicitudin",
  },
];

export { portfolios };
