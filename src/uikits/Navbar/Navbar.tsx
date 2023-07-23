import { BsSearch, BsCart, BsChevronDown } from "react-icons/bs";

import { HamburgerMenu } from "@src/uikits";
import { menus } from "@src/constants";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex-none" />
      <div className="hidden md:flex gap-8 text-right">
        {menus.map((menu) => (
          <div key={menu} className="flex items-center gap-2 cursor-pointer">
            <h3 className="text-lg">{menu}</h3>
            <BsChevronDown />
          </div>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-3">
        <div className="text-gray-500">
          <BsCart />
        </div>
        <div className="text-gray-500">
          <BsSearch />
        </div>
        <input
          className="border-2 border-gray-400 rounded-md p-1"
          type="text"
          aria-label="Search"
        />
      </div>
      <div className="flex items-center gap-4 md:hidden">
        <div className="text-gray-500">
          <BsCart />
        </div>
        <div className="text-gray-500">
          <BsSearch />
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export { Navbar };
