"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface MenuMainItemProps {
  href: string;
  children?: ReactNode;
}

export default function MenuMainItem({ children, href }: MenuMainItemProps) {
  const path = usePathname();
  const isActive =
    href === "/" ? path === href || path === "/home" : path.startsWith(href);
  return (
    <Link
      className={`py-2 sm:py-4 px-1 hover:underline hover:text-pink-50 ${
        isActive ? "underline" : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
