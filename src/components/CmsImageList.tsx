import Image from "next/image";

import CmsHtml from "./CmsHtml";

export default function CmsImageList({ data }: { data: any }) {
  return (
    <div className="w-full my-8 bg-neutral-100">
      <div className="mx-auto max-w-screen-lg py-8 px-4">
        <CmsHtml html={data.intro} />
        <div className="flex flex-wrap gap-4 md:gap-8 my-8">
          {data.images.map((item: any, index: number) => (
            <Image
              key={index}
              alt={item.title || ""}
              width={item.image.width}
              height={item.image.height}
              src={item.image.url}
              style={{ width: "auto", height: "15vh" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
