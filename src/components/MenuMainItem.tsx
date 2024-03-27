"use client";

import Link from "next/link";

import useExtractedLink from "@/hooks/useExtractedLink";

interface MenuMainItemProps {
  item: any;
}

export default function MenuMainItem({ item }: MenuMainItemProps) {
  const { href, title, isActive, isExternal } = useExtractedLink(item);

  return (
    <div className="relative group">
      <Link
        className={`inline-block z-0 py-2 px-4 group-hover:text-pink-50 group-hover:bg-pink-800 text-lg ${
          isActive ? "bg-pink-800" : ""
        }`}
        target={isExternal ? "_blank" : "_self"}
        href={href}
      >
        {title} {isExternal && <sup className="text-xs">↗</sup>}
      </Link>
      {item.children.length > 0 && (
        <ul className="hidden absolute z-10 min-w-64 p-4 bg-pink-800 border border-pink-900 border-t-0 drop-shadow-xl group-hover:block">
          {item.children.map((child: any, index: number) => (
            <MenuChildItem key={index} {...child} />
          ))}
        </ul>
      )}
    </div>
  );
}

function MenuChildItem(child: any) {
  const { href, title, isExternal, isActive } = useExtractedLink(child);

  return (
    <li>
      <Link
        className={`inline-block py-1 hover:underline hover:text-pink-50 ${
          isActive ? "underline" : ""
        }`}
        href={href}
        target={isExternal ? "_blank" : "_self"}
      >
        {title} {isExternal && <sup className="text-xs">↗</sup>}
      </Link>
    </li>
  );
}
