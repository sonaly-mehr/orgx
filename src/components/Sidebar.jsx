import React, { useState } from "react";

import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import {
  BuildingOffice2Icon,
  Cog6ToothIcon,
  EllipsisHorizontalIcon,
  FolderIcon,
  InboxIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  BoltIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const navigation = [
  { name: "Search", href: "#", icon: MagnifyingGlassIcon, current: false },
  { name: "Inbox", href: "#", icon: InboxIcon, current: false, count: 46 },
  { name: "Tasks", href: "#", icon: FolderIcon, current: false },
];
const navigation2 = [
  { name: "Deals", href: "#", icon: BoltIcon, current: true },
  {
    name: "Companies",
    href: "#",
    icon: BuildingOffice2Icon,
    current: false,
    count: 18,
  },
  {
    name: "People",
    href: "#",
    icon: UserCircleIcon,
    current: false,
    count: 12,
  },
  { name: "More", href: "#", icon: EllipsisHorizontalIcon, current: false },
];
const collections = [
  { name: "Products", href: "#", icon: "/assets/product.svg", current: false },
  {
    name: "My deals flow",
    href: "#",
    icon: "/assets/deals.svg",
    current: false,
  },
  { name: "Support", href: "#", icon: "/assets/support.svg", current: false },
  { name: "Sales", href: "#", icon: "/assets/sales.svg", current: false },
  // { name: "Operations", href: "#", icon: BoltIcon, current: false },
  // { name: "Partner team", href: "#", icon: BoltIcon, current: false },
  // { name: "Quality", href: "#", icon: BoltIcon, current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [selectIcon, setSelectIcon] = useState(true);
  const percentage = 66;
  return (
    <>
      <Transition show={sidebarOpen}>
        <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div className="fixed inset-0 flex ">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                <TransitionChild
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </TransitionChild>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto pb-4">
                  <div className="flex h-16 shrink-0 items-center"></div>
                  <nav className="flex flex-1 flex-col pl-4">
                    <ul className="flex flex-1 flex-col gap-y-5">
                      <li>
                        <ul className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li
                              key={item.name}
                              className={`flex justify-between items-center ${
                                item.current && "bg-[#F5F5F5]"
                              } hover:bg-[#F5F5F5] w-full py-1 rounded-xl`}
                            >
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current && "!text-[#2B2B2B]",
                                  "group flex gap-x-3 rounded-xl px-3 text-sm leading-6 text-white hover:text-[#2B2B2B]"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current && "text-[#2B2B2B]",
                                    "h-5 w-5 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <span
                                className={`${
                                  item.current ? "text-[#636363]" : "text-white"
                                } text-xs font-regular inline-block relative pr-5 `}
                              >
                                {item?.count}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <ul className="-mx-2 space-y-1">
                          {navigation2.map((item) => (
                            <li
                              key={item.name}
                              className={`flex justify-between items-center ${
                                item.current && "bg-[#F5F5F5]"
                              }  hover:bg-[#F5F5F5] hover:text-[#2B2B2B] w-full py-1 rounded-xl`}
                            >
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current &&
                                    item.current &&
                                    "!text-[#2B2B2B]",
                                  "group flex gap-x-3 rounded-xl px-3 text-sm leading-6 text-white hover:text-[#2B2B2B]"
                                )}
                              >
                                <item.icon
                                  className={classNames(
                                    item.current && "text-[#2B2B2B]",
                                    "h-5 w-5 shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                                {item.name}
                              </a>
                              <span
                                className={`${
                                  item.current ? "text-[#636363]" : "text-white"
                                } text-xs font-regular inline-block relative pr-5 `}
                              >
                                {item?.count}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <ul className="-mx-2 space-y-1">
                          <span className="text-sm block pl-2.5 mb-1 text-white">
                            Collections
                          </span>
                          {collections.map((item) => (
                            <li
                              key={item.name}
                              className={` ${
                                item.current && "bg-[#F5F5F5]"
                              } hover:bg-[#F5F5F5] w-full py-1 rounded-xl`}
                            >
                              <a
                                href={item.href}
                                className={classNames(
                                  item.current && "!text-[#2B2B2B]",
                                  "group flex items-center gap-x-3 rounded-xl px-3 text-sm leading-6 text-white hover:text-[#2B2B2B]"
                                )}
                              >
                                <img
                                  src={item?.icon}
                                  alt=""
                                  className="h-4 w-4 shrink-0"
                                />
                                {item.name}
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-16 lg:mt-auto">
                        <button className="text-white flex gap-1 items-center mb-4">
                          <PlusIcon width={20} height={20} /> Invite teammates
                        </button>
                        <div className="flex justify-between items-center">
                          <Cog6ToothIcon
                            className="h-5 w-5 shrink-0 text-white"
                            aria-hidden="true"
                          />
                          <SparklesIcon
                            className={`${
                              selectIcon
                                ? "h-7 w-7 bg-[#F3F3F3] p-1 rounded-lg !text-black"
                                : "h-5 w-5 "
                            } shrink-0 text-white`}
                            aria-hidden="true"
                          />
                          <QuestionMarkCircleIcon
                            className="h-5 w-5 shrink-0 text-white"
                            aria-hidden="true"
                          />
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[200px] xl:w-[240px] lg:flex-col p-4 border-r border-solid border-[#F3F3F3]">
        <div className="flex grow flex-col gap-y-5  pb-4">
          <div className="flex shrink-0 ">
            <Menu as="div" className="relative">
              <MenuButton className="-m-1.5 flex items-center p-1.5">
                <div className="flex gap-2 items-center">
                  <img
                    className="h-6 w-6 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <h6 className="text-black font-medium text-sm capitalize">
                    Sally Potter
                  </h6>
                  <ChevronDownIcon
                    className="h-5 w-5 text-[#282828]"
                    aria-hidden="true"
                  />
                </div>
              </MenuButton>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 focus:outline-none shadow-md">
                  {userNavigation.map((item) => (
                    <MenuItem key={item.name}>
                      {({ focus }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            focus ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Transition>
            </Menu>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-4">
              <li>
                <ul className="-mx-2">
                  {navigation.map((item) => (
                    <li
                      key={item.name}
                      className={`flex justify-between items-center ${
                        item.current && "bg-[#F5F5F5]"
                      } hover:bg-[#F5F5F5] px-2.5 py-1 rounded-xl w-full`}
                    >
                      <a
                        href={item.href}
                        className={classNames(
                          item.current && " font-medium text-black",
                          "group flex items-center gap-x-3 text-sm leading-6 text-[#161616]"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current && "text-[#2B2B2B]",
                            "h-4 w-4 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                      <span className="text-[#636363] text-xs font-regular inline-block relative ">
                        {item?.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <ul className="-mx-2">
                  {navigation2.map((item) => (
                    <li
                      key={item.name}
                      className={`flex justify-between items-center ${
                        item.current && "bg-[#F5F5F5]"
                      } hover:bg-[#F5F5F5] px-2.5 py-1 rounded-xl w-full`}
                    >
                      <a
                        href={item.href}
                        className={classNames(
                          item.current && " font-medium text-black",
                          "group flex items-center gap-x-3 text-sm leading-6 text-[#161616]"
                        )}
                      >
                        <item.icon
                          className={classNames(
                            item.current && "text-[#2B2B2B]",
                            "h-4 w-4 shrink-0"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                      <span className="text-[#636363] text-xs font-regular inline-block relative">
                        {item?.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>

              {/* COLLECTIONS */}
              <li>
                <ul className="-mx-2">
                  <span className="text-sm text-[#656565] inline-block pl-2.5 mb-1">
                    Collections
                  </span>
                  {collections.map((item) => (
                    <li
                      key={item.name}
                      className={`flex justify-between items-center ${
                        item.current && "bg-[#F5F5F5]"
                      } hover:bg-[#F5F5F5] px-2.5 py-1 rounded-xl w-full`}
                    >
                      <a
                        href={item.href}
                        className={classNames(
                          item.current && " font-medium text-black",
                          "group flex items-center gap-x-3 text-sm leading-6 text-[#161616]"
                        )}
                      >
                        <img
                          src={item?.icon}
                          alt=""
                          className="h-4 w-4 shrink-0"
                        />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="mt-auto relative -bottom-[20px]">
                {/* Adding sample data */}
                <div className="border border-solid border-[#E8E8E8] px-2 py-1 rounded-lg mb-5">
                  <div className="flex gap-2 items-center">
                    <CircularProgressbar
                      value={percentage}
                      className="!w-4 h-4 fill-black"
                      strokeWidth={14}
                      styles={{
                        path: {
                          // Path color
                          stroke: `rgba(85, 56, 195, ${percentage / 100})`,
                        },
                      }}
                    />
                    <h6 className="text-black text-sm font-medium">
                      Adding sample data
                    </h6>
                  </div>
                  <span className="text-[#2F2F2F] text-xs">
                    28 of 50 created
                  </span>
                </div>
                <button className="text-[#212121] flex gap-1 items-center mb-4">
                  <PlusIcon width={20} height={20} /> Invite teammates
                </button>
                <div className="flex justify-between items-center">
                  <Cog6ToothIcon
                    className="h-5 w-5 shrink-0 text-[#292929]"
                    aria-hidden="true"
                  />
                  <SparklesIcon
                    className={`${
                      selectIcon
                        ? "h-7 w-7 bg-[#F3F3F3] p-1 rounded-lg"
                        : "h-5 w-5 "
                    } shrink-0 text-[#292929]`}
                    aria-hidden="true"
                  />
                  <QuestionMarkCircleIcon
                    className="h-5 w-5 shrink-0 text-[#292929]"
                    aria-hidden="true"
                  />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
