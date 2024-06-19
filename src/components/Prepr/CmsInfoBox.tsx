import Link from "next/link";

import Card from "../Card";
import CmsHtml from "./CmsHtml";

interface CmsInfoBoxProps {
  data: any;
}

function toHref(link: any) {
  switch (link.__typename) {
    case "Page":
      return `/${link._slug}`;
    case "Article":
      return `/articles/read/${link._slug}`;
    default:
      return "";
  }
}

export default function CmsInfoBox({ data }: CmsInfoBoxProps) {
  return (
    <Card kind={data.kind}>
      <CmsHtml
        html={data.text_content}
        listStyleImage={data.list_style_image}
      />
      {data.link_href.map((link: any, index: number) => (
        <Link
          key={link._slug || index}
          className="hover:text-pink-700 text-pink-900 mt-4 block"
          href={toHref(link)}
        >
          {data.link_text}
        </Link>
      ))}
    </Card>
  );
}
