"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuMainItemProps {
  item: any;
}

function isExternalLink(menuItem: any) {
  return !!menuItem.link_external?.url;
}

function hrefFor(menuItem: any) {
  if (isExternalLink(menuItem)) return menuItem.link_external?.url;
  if (menuItem.link_to_page?.length === 1)
    return "/" + menuItem.link_to_page[0]._slug;
  return "/";
}

function titleFor(menuItem: any) {
  if (isExternalLink(menuItem)) return menuItem.link_external?.title;
  if (menuItem.link_to_page?.length === 1)
    return menuItem.link_to_page[0].title;
  return menuItem.title;
}

export default function MenuMainItem({ item }: MenuMainItemProps) {
  const path = usePathname();
  const href = hrefFor(item);
  const isActive = href === "/" ? path === href : path.startsWith(href);

  return (
    <div className="flex flex-col grow">
      <Link
        className={`py-2 sm:py-4 hover:underline hover:text-pink-50 text-xl ${
          isActive ? "underline" : ""
        }`}
        href={href}
      >
        {titleFor(item)}
      </Link>
      {item.children.length > 0 && (
        <ul>
          {item.children.map((child: any) => {
            const href = hrefFor(child);
            const isActive =
              href === "/" ? path === href : path.startsWith(href);
            return (
              <li key={child.title}>
                <Link
                  className={`inline-block py-1 hover:underline hover:text-pink-50 ${
                    isActive ? "underline" : ""
                  }`}
                  href={hrefFor(child)}
                  target={isExternalLink(child) ? "_blank" : "_self"}
                >
                  {titleFor(child)}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
