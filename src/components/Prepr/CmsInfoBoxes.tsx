import CmsHtml from "./CmsHtml";
import CmsInfoBox from "./CmsInfoBox";

export default function CmsInfoBoxes({ data }: { data: any }) {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto px-4">
        <CmsHtml html={data.intro} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {data.boxes.map((box: any, index: number) => (
            <CmsInfoBox key={index} data={box} />
          ))}
        </div>
        <CmsHtml html={data.outro} />
      </div>
    </div>
  );
}
