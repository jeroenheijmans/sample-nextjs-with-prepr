import Link from "next/link";

import useExtractedLink from "@/hooks/useExtractedLink";

interface MenuMainItemProps {
  item: any;
}

export default function MenuMainItem({ item }: MenuMainItemProps) {
  const { href, title, isActive, isExternal } = useExtractedLink(item);

  return (
    <div
      className={`
        relative group hover:bg-pink-800 md:hover:none
        ${isActive ? "bg-pink-800 md:bg-inherit" : ""}
      `}
    >
      <Link
        className={`
          block md:inline-block px-4 py-2 md:py-4
          group-hover:text-pink-50 group-hover:bg-pink-800 text-lg
          md:border-b-4 border-pink-900 group-hover:border-pink-800
          ${
            isActive
              ? "bg-pink-800 border-pink-50 group-hover:border-pink-50"
              : ""
          }
        `}
        target={isExternal ? "_blank" : "_self"}
        href={href}
      >
        {title} {isExternal && <sup className="text-xs">↗</sup>}
      </Link>
      {item.children.length > 0 && (
        <ul
          className="
            text-sm md:text-base
            px-4 md:py-4 z-10
            md:hidden md:absolute md:min-w-80 md:group-hover:block
            md:bg-pink-800 md:border md:border-pink-900 md:drop-shadow-xl
            "
        >
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
