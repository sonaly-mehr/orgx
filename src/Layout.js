import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import {
  Bars3Icon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

import Sidebar from "./components/Sidebar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="lg:pl-[14.5rem] xl:pl-[16.5rem] pl-5 pt-5">
        <div className="sticky top-0 z-40 flex shrink-0 items-center gap-x-4 bg-white pr-4 sm:gap-x-6">
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

          <div className="flex flex-col lg:flex-row flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="relative flex flex-1">
              <h5 className="font-medium text-[#1A1A1A] text-lg">Deals</h5>
            </div>
            <div className="flex flex-wrap items-center gap-x-3">
              <div className="flex gap-3 basis-full lg:basis-auto mb-2 lg:mb-0">
                <h5 className="text-xs lg:text-sm text-[#0E0E0E]">
                  Shared with timeless
                </h5>
                <img src="/assets/icon.svg" alt="" />
              </div>

              {/* Users */}
              <div className="flex lg:-ml-[10px]">
                <img
                  src="/assets/user1.png"
                  alt=""
                  className="relative -right-[16px] z-[5]"
                />
                <img
                  src="/assets/user2.png"
                  alt=""
                  className="relative -right-[8px] z-[2]"
                />
                <img src="/assets/user3.png" alt="" className="" />
              </div>

              {/* Buttons */}
              <button className="text-xs lg:text-sm font-normal text-[#191919] flex gap-2 items-center p-1.5 rounded-lg border border-solid border-[#DBDBDB]">
                <Squares2X2Icon width={18} height={18} />
                All apps
              </button>
              <button className="text-xs lg:text-sm font-normal text-white flex gap-2 items-center px-2 py-1.5 rounded-lg  bg-[#171717]">
                <PlusIcon width={15} height={15} />
                Add deal
              </button>
            </div>
          </div>
        </div>

        <main className="pt-4 w-full lg:overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
