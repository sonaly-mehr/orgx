import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import {
  ArrowsUpDownIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  GlobeAltIcon,
  PlusIcon,
  Square3Stack3DIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useLayoutEffect, useRef, useState } from "react";
import Filter from "../components/Filter";
import TransitionContainer from "../components/Transition";

const deals = [
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ["Crypto", "AI"],
    people: {
      icon: "/assets/people1.svg",
      name: "Sally Potter",
    },
    stage: "qualified",
    close: "Mar 31",
  },
];
const table = ["Option 1", "Option 2", "Option 3"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Deals() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedDeal.length > 0 && setSelectedDeal.length < deals.length;
    setChecked(selectedDeal.length === deals.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedDeal]);

  function toggleAll() {
    setSelectedDeal(checked || indeterminate ? [] : deals);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="max-w-full">
      <div className="sm:flex items-center pr-5">
        <div className="sm:flex-auto">
          <div className="flex gap-3 items-center">
            <Menu as="div" className="relative">
              <MenuButton className="-m-1.5 flex items-center p-1.5">
                <div className="flex gap-2 items-center">
                  <img className="h-4 w-4" src="/assets/layout.svg" alt="" />
                  <h6 className="text-[#111111] text-xs lg:text-sm capitalize">
                    Table
                  </h6>
                  <ChevronDownIcon
                    className="h-3.5 w-3.5 text-[#111111]"
                    aria-hidden="true"
                  />
                </div>
              </MenuButton>
              <TransitionContainer>
                <MenuItems className="absolute left-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 focus:outline-none shadow-md">
                  {table.map((item) => (
                    <MenuItem key={item}>
                      {({ focus }) => (
                        <a
                          href={item.href}
                          className={classNames(
                            focus ? "bg-gray-50" : "",
                            "block px-3 py-1 text-xs lg:text-sm leading-6 text-gray-900"
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
            {/* FILTER */}
            <Filter table={table} classNames={classNames} />

            <div className="flex gap-2 items-center ml-1">
              <ArrowsUpDownIcon className="h-5 w-5 text-[#111111]" />
              <h6 className="text-[#111111] text-xs lg:text-sm capitalize">
                Sort
              </h6>
            </div>
            <div className="flex gap-2 items-center ml-3">
              <GlobeAltIcon className="h-5 w-5 text-[#0057D6]" />
              <h6 className="text-[#0057D6] text-xs lg:text-sm capitalize">
                Shared
              </h6>
            </div>
          </div>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-3 items-center">
          <div>
            <button
              type="button"
              className="bg-transparent text-xs lg:text-sm text-[#111111] flex gap-2 items-center"
            >
              <PlusIcon className="w-4 h-4 text-[#111111]" /> Save as new view
            </button>
          </div>
          <Menu as="div" className="relative">
            <MenuButton className="-m-1.5 flex items-center p-1.5">
              <div className="flex gap-3 items-center">
                <Square3Stack3DIcon className="h-4 w-4" alt="" />
                <EllipsisHorizontalIcon
                  className="h-4 w-4 text-[#111111]"
                  aria-hidden="true"
                />
              </div>
            </MenuButton>
            <TransitionContainer>
              <MenuItem className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 focus:outline-none">
                {table.map((item) => (
                  <MenuItem key={item}>
                    {({ focus }) => (
                      <a
                        href={item.href}
                        className={classNames(
                          focus ? "bg-gray-50" : "",
                          "block px-3 py-1 text-xs lg:text-sm leading-6 text-gray-900"
                        )}
                      >
                        {item}
                      </a>
                    )}
                  </MenuItem>
                ))}
              </MenuItem>
            </TransitionContainer>
          </Menu>
        </div>
      </div>
      <div className=" flow-root">
        <div className="-mx-4 -my-2 lg:overflow-x-auto sm:-mx-6 lg:-mx-8 lg:min-h-[85vh] relative lg:mb-5 ">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative mt-3">
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="border-t border-solid border-[#DBDBDB]">
                  <tr>
                    <th
                      scope="col"
                      className="relative sm:w-12 inline-block -mr-[30px]"
                    >
                      <div className="relative flex items-center p-1">
                        <input
                          type="checkbox"
                          className="peer appearance-none cursor-pointer absolute left-0 top-[6px] xl:top-1/2 -mt-2 w-3.5 h-3.5 lg:h-4 lg:w-4 bg-transparent transition-all border-[1.7px] border-solid border-[#868686] checked:bg-black rounded"
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
                        <div className="pointer-events-none absolute top-[10px] left-[7px] lg:top-1/2 lg:left-[17%] -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </th>
                    <th scope="col" className="tHead">
                      Title
                    </th>
                    <th scope="col" className="px-1 tHead">
                      <div className="flex gap-1.5 items-center">
                        <img src="/assets/companies.svg" alt="" />
                        Companies
                      </div>
                    </th>
                    <th scope="col" className="px-1 tHead">
                      <div className="flex gap-1.5 items-center">
                        <img src="/assets/tags.svg" alt="" />
                        Tags
                      </div>
                    </th>
                    <th scope="col" className="px-1 tHead">
                      <div className="flex gap-1.5 items-center">
                        <img src="/assets/people.svg" alt="" />
                        People
                      </div>
                    </th>
                    <th scope="col" className="px-1 tHead">
                      <div className="flex gap-1.5 items-center">
                        <img src="/assets/stage.svg" alt="" />
                        Stage
                      </div>
                    </th>
                    <th scope="col" className="px-1 tHead">
                      <div className="flex gap-1.5 items-center">
                        <img src="/assets/date.svg" alt="" />
                        <span className="w-[85px] lg:w-auto">Close Date</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {deals.map((deal, index) => (
                    <tr
                      key={index}
                      className={`${
                        selectedDeal.includes(deal) ? "bg-gray-50" : undefined
                      }
                          border-b border-solid border-[#DBDBDB]`}
                    >
                      <td className="relative">
                        <div className="relative flex items-center p-1 pr-[14px] lg:pr-0">
                          <input
                            type="checkbox"
                            className="peer appearance-none cursor-pointer absolute left-0  lg:top-1/2 lg:-mt-2 w-3.5 h-3.5 lg:h-4 lg:w-4 bg-transparent transition-all border-[1.7px] border-solid border-[#868686] checked:bg-black rounded"
                            value={deal.email}
                            checked={selectedDeal.includes(deal)}
                            onChange={(e) =>
                              setSelectedDeal(
                                e.target.checked
                                  ? [...selectedDeal, deal]
                                  : selectedDeal.filter((d) => d !== deal)
                              )
                            }
                          />
                          <div className="pointer-events-none absolute top-1/2 left-[7px] lg:left-[8px] -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-3 h-3"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="1"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </td>
                      <td
                        className={classNames(
                          "tData",
                          selectedDeal.includes(deal)
                            ? "text-indigo-600"
                            : "text-gray-900"
                        )}
                      >
                        {deal.title}
                      </td>
                      <td className="tData px-1 lg:px-3 py-2.5">
                        <span className="bg-[#F3F3F3] py-1 px-2 rounded-md inline-block mr-2 ">
                          D
                        </span>
                        {deal.companies}
                      </td>
                      <td className="tData px-1 lg:px-3 py-2.5">
                        {deal.tags?.map((tag) => (
                          <span className="bg-[#F3F3F3] py-1 px-2 rounded-md mr-2">
                            {tag}
                          </span>
                        ))}
                      </td>
                      <td className="tData px-1 lg:px-3 py-2.5 ">
                        <div className="flex items-center gap-2">
                          <img
                            src={deal.people?.icon}
                            alt=""
                            className="w-[25px] h-[25px] rounded-full hidden lg:block"
                          />
                          {deal.people?.name}
                        </div>
                      </td>
                      <td className="tData px-1 lg:px-3 py-2.5 underline capitalize">
                        <div className="flex gap-2 items-center">
                          <span
                            className={`${
                              deal.stage === "qualified" && "bg-[#33B9E3]"
                            } ${deal.stage === "proposal" && "bg-[#D1930D]"} ${
                              deal.stage === "won" && "bg-[#2FA56C]"
                            } ${
                              deal.stage === "negotiation" && "bg-[#DB7706]"
                            } ${
                              deal.stage === "contact made" && "bg-[#5F45C6]"
                            } ${
                              deal.stage === "lost" && "bg-[#E03636]"
                            } w-[6px] h-[6px] rounded-full`}
                          ></span>
                          {deal.stage}
                        </div>
                      </td>
                      <td className="tData px-1 lg:px-3 py-2.5">
                        {deal.close}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Row selection count */}
          {selectedDeal.length > 0 && (
            <div className="text-[11px] lg:text-sm fixed left-3 lg:left-[55%] bottom-[30rem] lg:bottom-4 lg:-translate-x-1/2 flex items-center justify-between bg-white border border-solid border-[#DDDDDD] rounded-2xl p-3 w-[350px] lg:w-[580px] shadow-md">
              <span className="flex it gap-2 text-[#101010]">
                {" "}
                <img src="/assets/select.svg" alt="" /> 1 Deal selected
              </span>
              <div className="flex items-center">
                <button
                  type="button"
                  className="bg-transparenttext-[#111111] flex gap-1 lg:gap-2 pr-3 items-center border-r border-solid border-[#E6E6E6]"
                >
                  <PlusIcon className="w-4 h-4 text-[#101010]" /> Add to
                  collection
                </button>
                <button
                  type="button"
                  className="bg-transparenttext-[#101010] flex gap-4 items-center pl-3"
                >
                  Delete
                  <XMarkIcon className="w-4 h-4 text-[#101010]" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
