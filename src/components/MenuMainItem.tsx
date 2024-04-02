import Link from "next/link";

import useExtractedLink from "@/hooks/useExtractedLink";

interface MenuMainItemProps {
  item: any;
}

export default function MenuMainItem({ item }: MenuMainItemProps) {
  const { href, title, isActive, isActiveExactly, isExternal } =
    useExtractedLink(item);

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
        {item.children.length > 0 && (
          <span className="text-xs opacity-50 ml-2 hidden md:inline-block">
            ▼
          </span>
        )}
      </Link>
      {item.children.length > 0 && (
        <ul
          className="
            text-sm md:text-base
            px-4 md:py-4 z-10
            transition-opacity duration-300
            md:opacity-0 md:invisible md:absolute md:min-w-80 md:group-hover:visible md:group-hover:opacity-100
            md:bg-pink-800 md:border md:border-pink-900 md:drop-shadow-xl
            "
        >
          {href && (
            <li className="hidden md:block">
              <Link
                className={`inline-block py-1 hover:underline hover:text-pink-50 text-lg ${
                  isActiveExactly ? "underline" : ""
                }`}
                target={isExternal ? "_blank" : "_self"}
                href={href}
              >
                {title} {isExternal && <sup className="text-xs">↗</sup>}
              </Link>
            </li>
          )}
          {href && (
            <li className="hidden md:block py-2">
              <hr className="opacity-25" />
            </li>
          )}
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
