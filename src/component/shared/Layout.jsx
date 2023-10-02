import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen m-screen overflow-hidden">
      <div className="bg-sky-200"><Sidebar/></div>
      <div className="p-4">
      <div>header</div>
      <div>{<Outlet />}</div>
      </div>
    </div>
  );
}
