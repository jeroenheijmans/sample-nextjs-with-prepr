import Link from "next/link";

import Card from "./Card";
import CmsHtml from "./CmsHtml";

interface CmsInfoBoxProps {
  data: any;
}

export default function CmsInfoBox({ data }: CmsInfoBoxProps) {
  return (
    <Card kind={data.kind}>
      <CmsHtml
        html={data.text_content}
        listStyleImage={data.list_style_image}
      />
      {data.link_href.map((link: any) => (
        <Link
          key={link._slug}
          className="hover:text-pink-700 text-pink-900 mt-4 block"
          href={link._slug}
        >
          {data.link_text}
        </Link>
      ))}
    </Card>
  );
}
