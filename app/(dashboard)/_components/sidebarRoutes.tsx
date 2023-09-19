"use client";

import { Layout, Compass } from "lucide-react";
import React from "react";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];
const SideBarRoutes = () => {
  return <div className="flex flex-col w-full">SideBarRoutes</div>;
};

export default SideBarRoutes;
