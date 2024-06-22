import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import TransitionContainer from "./Transition";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const FilterOption = ({ options, classNames, title, children }) => {
  return (
    <div>
      <Menu as="div" className="relative">
        <MenuButton className="-m-1.5 flex items-center p-1.5">
          <div className="flex gap-2 items-center bg-[#F3F3F3] px-2 py-1 rounded-lg">
            {children}
            <span className="capitalize text-[#111111]">{title}</span>
            <ChevronDownIcon
              className="h-[22px] w-[22px] text-[#282828] inline-block pl-2"
              aria-hidden="true"
            />
          </div>
        </MenuButton>
        <TransitionContainer>
          <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 focus:outline-none shadow-md">
            {options.map((item, index) => (
              <MenuItem key={index}>
                {({ focus }) => (
                  <a
                    href={item.href}
                    className={classNames(
                      focus ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    )}
                  >
                    {item}
                  </a>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </TransitionContainer>
      </Menu>
    </div>
  );
};

export default FilterOption;
