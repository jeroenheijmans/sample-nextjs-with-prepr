"use client";

import Link from "next/link";

import useExtractedLink from "@/hooks/useExtractedLink";

interface MenuFooterItemProps {
  item: any;
}

export default function MenuFooterItem({ item }: MenuFooterItemProps) {
  const { href, title, isActiveExactly, isExternal } = useExtractedLink(item);

  if (!href) {
    return <p>{item.title}</p>;
  }

  return (
    <Link
      className={`inline-block py-1 hover:underline hover:text-pink-700 ${
        isActiveExactly ? "underline" : ""
      }`}
      href={href}
      target={isExternal ? "_blank" : "_self"}
    >
      {title} {isExternal && <sup className="text-xs">↗</sup>}
    </Link>
  );
}
