"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import HeaderMenuMainItem from "./HeaderMenuItem";

export default function HeaderMenu(navigation: any) {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  function toggle() {
    setOpen(!open);
  }

  useEffect(() => setOpen(false), [path]);

  return (
    <div className="mx-auto max-w-screen-lg md:px-4 flex gap-2 md:gap-4 flex-col md:flex-row">
      <div className="md:hidden">
        <button
          onClick={toggle}
          className="p-4 w-full text-lg text-left font-bold border-b border-pink-950 hover:bg-pink-800 hover:text-pink-50"
        >
          ≡ Menu
        </button>
      </div>
      {navigation.menu_items.map((menuItem: any) => (
        <div key={menuItem.title} className={open ? "" : "hidden md:block"}>
          <HeaderMenuMainItem item={menuItem} />
        </div>
      ))}
    </div>
  );
}
