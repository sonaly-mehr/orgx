import React from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

const DropDown = ({ children, menuBtnClass, menuItemsClass }) => {
  return (
    <div>
      <Menu as="div" className="relative">
        <MenuButton className={menuBtnClass}>
          {children}
        </MenuButton>
        <Transition
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className={menuItemsClass}>
            <MenuItem>{children}</MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};

export default DropDown;
