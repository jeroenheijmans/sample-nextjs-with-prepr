import Image from "next/image";

export default function DynamicContentPart(part: any) {
  switch (part.__typename) {
    case "Text":
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: part.html || "",
          }}
        ></div>
      );
    case "Assets":
      return (
        <>
          {part.items.map((item: any, index: number) => (
            <Image
              key={index}
              width={item.width}
              height={item.height}
              alt={item.description || ""}
              src={item.url}
            />
          ))}
        </>
      );
    default:
      return null;
  }
}
