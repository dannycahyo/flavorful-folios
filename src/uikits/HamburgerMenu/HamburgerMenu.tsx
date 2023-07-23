import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

import { VerticalMenuIcon } from "@src/uikits";
import { menus } from "@src/constants";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        aria-label="hamburger menu button"
        onClick={() => setIsOpen(!isOpen)}
        className="mt-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isOpen ? (
        <div className="absolute right-4 w-48 h-full py-2 mt-2 bg-red rounded-lg shadow-xl transition-all duration-300 ease-in-out transform translate-y-2">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              {menus.map((menu) => (
                <div
                  key={menu}
                  className="flex items-center gap-4 pl-4 cursor-pointer"
                >
                  <h4 className="text-md">{menu}</h4>
                  <BsChevronDown />
                </div>
              ))}
            </div>
            <div className="pr-2">
              <VerticalMenuIcon />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export { HamburgerMenu };
