import {
  CateringService,
  Heroes,
  HomePageMetaTags,
  Portfolio,
} from "@src/components/home";
import { Navbar, VerticalMenuIcon } from "@src/uikits";

const HomeScreen = () => {
  return (
    <div>
      <HomePageMetaTags />
      <Navbar />
      <Heroes />
      <CateringService />
      <Portfolio />
      <div
        className="hidden md:block fixed top-1/2 right-0 -translate-y-1/2"
        style={{ zIndex: 10 }}
      >
        <VerticalMenuIcon />
      </div>
    </div>
  );
};

export { HomeScreen };
