import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
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
  Bars3Icon,
  BellIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  PlusIcon,
  Square2StackIcon,
  Squares2X2Icon,
  UserCircleIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  BoltIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";

const navigation = [
  { name: "Search", href: "#", icon: MagnifyingGlassIcon, current: true },
  { name: "Inbox", href: "#", icon: InboxIcon, current: false, count: 46 },
  { name: "Tasks", href: "#", icon: FolderIcon, current: false },
];
const navigation2 = [
  { name: "Deals", href: "#", icon: BoltIcon, current: false },
  { name: "Companies", href: "#", icon: BuildingOffice2Icon, current: false, count: 18},
  { name: "People", href: "#", icon: UserCircleIcon, current: false, count: 12},
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="">
      <div>
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

            <div className="fixed inset-0 flex">
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
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-5">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current && "bg-[#F5F5F5]",
                                    "group flex gap-x-3 rounded-xl px-3 text-sm leading-6 text-[#161616]"
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
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs leading-6 text-[#161616]">
                            Your teams
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current && "bg-[#F5F5F5]",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 text-[#161616]"
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[0.625rem] font-medium text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm leading-6 text-[#161616]"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 text-[#161616]"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
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
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[240px] lg:flex-col p-5 border-r border-solid border-[#F3F3F3]">
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
              <ul role="list" className="flex flex-1 flex-col gap-y-4">
                <li>
                  <ul role="list" className="-mx-2">
                    {navigation.map((item) => (
                      <li key={item.name} className="flex justify-between items-center hover:bg-[#F5F5F5] rounded-xl">
                        <a
                          href={item.href}
                          className={classNames(
                            item.current && "bg-[#F5F5F5] font-medium text-black",
                            "group flex items-center gap-x-3 rounded-xl px-2.5 py-1 text-sm leading-6 text-[#161616] w-full"
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
                        <span className="text-[#636363] text-xs font-regular inline-block relative right-4">{item?.count}</span>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <ul role="list" className="-mx-2">
                    {navigation2.map((item) => (
                      <li key={item.name} className="flex justify-between items-center hover:bg-[#F5F5F5] rounded-xl">
                        <a
                          href={item.href}
                          className={classNames(
                            item.current && "bg-[#F5F5F5]",
                            "group flex items-center gap-x-3 rounded-xl px-2.5 py-1 text-sm leading-6 text-[#161616] w-full"
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
                        <span className="text-[#636363] text-xs font-regular inline-block relative right-4">{item?.count}</span>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm leading-6 text-blck"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 text-[#161616]"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-[16.5rem] pl-5 pt-5">
          <div className="sticky top-0 z-40 flex shrink-0 items-center gap-x-4 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-0 lg:pr-5">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-gray-900/10 lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <div className="relative flex flex-1">
                <h5 className="font-medium text-[#1A1A1A] text-lg">Deals</h5>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="flex gap-3">
                  <h5 className="text-sm text-[#0E0E0E]">Shared with timeless</h5>
                  <img src="/assets/icon.svg" alt="" />
                </div>

                {/* Users */}
                <div className="flex -ml-[10px]">
                  <img src="/assets/user1.png" alt="" className="relative -right-[16px] z-[5]"/>
                  <img src="/assets/user2.png" alt="" className="relative -right-[8px] z-[2]"/>
                  <img src="/assets/user3.png" alt="" className=""/>
                </div>

                {/* Buttons */}
                <button className="text-sm font-normal text-[#191919] flex gap-2 items-center p-1.5 rounded-lg border border-solid border-[#DBDBDB]"><Squares2X2Icon width={18} height={18}/>All apps</button>
                <button className="text-sm font-normal text-white flex gap-2 items-center px-2 py-1.5 rounded-lg  bg-[#171717]"><PlusIcon width={15} height={15}/>Add deal</button>
              </div>
            </div>
          </div>

          <main className="pt-4 w-full overflow-hidden">
              <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
