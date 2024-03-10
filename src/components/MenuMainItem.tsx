import Link from "next/link";
import { ReactNode } from "react";

interface MenuMainItemProps {
  href: string;
  children?: ReactNode;
}

export default function MenuMainItem({ children, href }: MenuMainItemProps) {
  return (
    <Link
      className="py-2 sm:py-4 px-1 hover:underline hover:text-pink-50"
      href={href}
    >
      {children}
    </Link>
  );
}
