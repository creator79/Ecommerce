import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { CartButtons } from "./index";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Products",
      link: "/products",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} className="w-100vw h-[50px]" />
      <span className="flex flex-row justify-end text-end mt-10">
        <CartButtons />
      </span>
      {/* <DummyContent /> */}
    </div>
  );
}
