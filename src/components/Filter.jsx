import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  FunnelIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import TransitionContainer from "./Transition";
import FilterOption from "./FilterOption";
const Filter = ({ table, classNames }) => {
  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <>
      <Menu as="div" className="relative">
        <MenuButton className="-m-1.5 flex items-center p-1.5">
          <div className="flex gap-2 items-center bg-[#F3F3F3] px-2 py-1 rounded-lg">
            <FunnelIcon className="h-4 w-4 text-[#111111]" />
            <h6 className="text-[#111111] text-sm capitalize">Filter</h6>
          </div>
        </MenuButton>
        <TransitionContainer>
          <MenuItems className="absolute left-0 z-10 mt-2.5 origin-top-right  bg-white focus:outline-none shadow-md border border-solid border-[#DDDDDD] rounded-xl w-[500px] px-2 py-2.5">
            {/* <MenuItem> */}
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex gap-2 items-center">
                  <span className="text-[#3C3C3C] inline-block ml-3">
                    Where
                  </span>
                  {/* LOCATION */}
                  <FilterOption
                    title="Location"
                    options={options}
                    classNames={classNames}
                  >
                    <img
                      className="h-4 w-4"
                      src="/assets/location.svg"
                      alt=""
                    />
                  </FilterOption>
                  {/* Contains */}
                  <FilterOption
                    title="Contains"
                    options={options}
                    classNames={classNames}
                  />
                  {/* Input */}
                  <input type="text" name="" id="" className="border-[1.8px] border-solid border-[#131313] px-2 py-1 rounded-[10px] w-[140px] outline-none" placeholder="San fransico"/>
                {/* MORE */}
                <EllipsisHorizontalIcon width={22} height={22}/>
                </div>
                <div className="flex gap-2 items-center">
                  {/* AND */}
                <FilterOption
                    title="And"
                    options={options}
                    classNames={classNames}
                  />
                  {/* LOCATION */}
                  <FilterOption
                    title="Title"
                    options={options}
                    classNames={classNames}
                  >
                    <img
                      className="h-4 w-4"
                      src="/assets/svg.svg"
                      alt=""
                    />
                  </FilterOption>
                  {/* Contains */}
                  <FilterOption
                    title="Contains"
                    options={options}
                    classNames={classNames}
                  />
                  {/* Input */}
                  <input type="text" name="" id="" className="px-2 py-1.5 rounded-[10px] w-[150px] outline-none bg-[#F3F3F3] placeholder:text-[#6F6F6F]" placeholder="Value"/>
                {/* MORE */}
                <EllipsisHorizontalIcon width={22} height={22}/>
                </div>
                
                <div className="flex justify-between items-center">
                  <button className="flex items-center gap-1 text-[#101010]">
                    <PlusIcon width={20} height={20} /> Add filter
                  </button>
                  <button className="text-[#101010]">Delete filter</button>
                </div>
              </div>
            {/* </MenuItem> */}
          </MenuItems>
        </TransitionContainer>
      </Menu>
    </>
  );
};

export default Filter;
