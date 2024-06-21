import { Menu, MenuButton, MenuItem, Transition } from "@headlessui/react";
import {
  ArrowsUpDownIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  FunnelIcon,
  GlobeAltIcon,
  PlusIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { useLayoutEffect, useRef, useState } from "react";

const people = [
  {
    title: "Fashion Magazine",
    companies: "Dropbox",
    tags: ['Crypto'],
    People: {
        icon: '',
        name: 'Sally Potter'
    },
    Stage: "Qualified",
    Close: "Mar 31",
  },
  // More people...
];
const table = ["Option 1", "Option 2", "Option 3"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Deals() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < people.length;
    setChecked(selectedPeople.length === people.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people);
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
                  <h6 className="text-[#111111] text-sm capitalize">Table</h6>
                  <ChevronDownIcon
                    className="h-3.5 w-3.5 text-[#111111]"
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
                <MenuItem className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 focus:outline-none">
                  {table.map((item) => (
                    <MenuItem key={item}>
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
                </MenuItem>
              </Transition>
            </Menu>

            <Menu as="div" className="relative">
              <MenuButton className="-m-1.5 flex items-center p-1.5">
                <div className="flex gap-2 items-center bg-[#F3F3F3] px-2 py-1 rounded-lg">
                  <FunnelIcon className="h-4 w-4 text-[#111111]" />
                  <h6 className="text-[#111111] text-sm capitalize">Filter</h6>
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
                <MenuItem className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 focus:outline-none">
                  {table.map((item) => (
                    <MenuItem key={item}>
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
                </MenuItem>
              </Transition>
            </Menu>

            <div className="flex gap-2 items-center ml-1">
              <ArrowsUpDownIcon className="h-5 w-5 text-[#111111]" />
              <h6 className="text-[#111111] text-sm capitalize">Sort</h6>
            </div>
            <div className="flex gap-2 items-center ml-3">
            <GlobeAltIcon className="h-5 w-5 text-[#0057D6]" />
            <h6 className="text-[#0057D6] text-sm capitalize">Shared</h6>
          </div>
          </div>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-3 items-center">
            <div>
            <button
            type="button"
            className="bg-transparent px-3 py-1.5 text-center text-sm text-[#111111] flex gap-2 items-center"
          >
            <PlusIcon className="w-4 h-4 text-[#111111]"/> Save as new view
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
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItem className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 focus:outline-none">
                  {table.map((item) => (
                    <MenuItem key={item}>
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
                </MenuItem>
              </Transition>
            </Menu>
            
        </div>
      </div>
      <div className=" flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative mt-3">
              {selectedPeople.length > 0 && (
                <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                  <button
                    type="button"
                    className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Bulk edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                  >
                    Delete all
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead className="border-t border-solid border-[#DBDBDB]">
                  <tr >
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        className="absolute left-0 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="tHead"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 tHead"
                    >
                        <div className="flex gap-1.5 items-center">
                        <img src="/assets/companies.svg" alt="" />
                      Companies
                        </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 tHead"
                    >
                        <div className="flex gap-1.5 items-center">
                        <img src="/assets/tags.svg" alt="" />
                      Tags
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 tHead"
                    >
                        <div className="flex gap-1.5 items-center">
                        <img src="/assets/people.svg" alt="" />
                      People
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 tHead"
                    >
                        <div className="flex gap-1.5 items-center">
                        <img src="/assets/stage.svg" alt="" />
                      Stage
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-3 tHead"
                    >

                        <div className="flex gap-1.5 items-center">
                        <img src="/assets/date.svg" alt="" />
                      Close Date
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person, index) => (
                    <tr
                      key={index}
                      className={
                    `${selectedPeople.includes(person)
                          ? "bg-gray-50"
                          : undefined}
                          border-b border-solid border-[#DBDBDB]`
                      }
                    >
                      <td className="relative">
                        {selectedPeople.includes(person) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-0 top-1/2 -mt-2 h-4 w-4 rounded-xl border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value={person.email}
                          checked={selectedPeople.includes(person)}
                          onChange={(e) =>
                            setSelectedPeople(
                              e.target.checked
                                ? [...selectedPeople, person]
                                : selectedPeople.filter((p) => p !== person)
                            )
                          }
                        />
                      </td>
                      <td
                        className={classNames(
                          "tData",
                          selectedPeople.includes(person)
                            ? "text-indigo-600"
                            : "text-gray-900"
                        )}
                      >
                        {person.title}
                      </td>
                      <td className="tData px-3 py-2.5">
                        {person.companies}
                      </td>
                      <td className="tData px-3 py-2.5">
                        {person.tags}
                      </td>
                      <td className="tData px-3 py-2.5">
                        {person.People?.name}
                      </td>
                      <td className="tData px-3 py-2.5">
                        {person.Stage}
                      </td>
                      <td className="tData px-3 py-2.5">
                        {person.Close}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
