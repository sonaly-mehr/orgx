import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DealNavbar from "./components/DealNavbar.jsx";

import Sidebar from "./components/Sidebar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="lg:pl-[14.5rem] xl:pl-[16.5rem] pl-5 pt-5">
        <DealNavbar setSidebarOpen={setSidebarOpen} />

        <main className="pt-4 w-full lg:overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
