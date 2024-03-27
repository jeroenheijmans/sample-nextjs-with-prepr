"use client";

import Link from "next/link";

import useExtractedLink from "@/hooks/useExtractedLink";

interface MenuMainItemProps {
  item: any;
}

export default function MenuMainItem({ item }: MenuMainItemProps) {
  const { href, title, isActive, isExternal } = useExtractedLink(item);

  return (
    <div className="flex flex-col grow">
      <Link
        className={`py-2 sm:py-4 hover:underline hover:text-pink-50 text-xl ${
          isActive ? "underline" : ""
        }`}
        target={isExternal ? "_blank" : "_self"}
        href={href}
      >
        {title} {isExternal && <sup className="text-xs">↗</sup>}
      </Link>
      {item.children.length > 0 && (
        <ul>
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
