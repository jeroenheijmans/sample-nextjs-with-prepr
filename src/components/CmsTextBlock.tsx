import CmsHtml from "./CmsHtml";

export default function CmsTextBlock({ data }: { data: any }) {
  return (
    <div className={`my-8 mx-auto max-w-screen-lg px-4`}>
      <CmsHtml html={data.content} listStyleImage={data.list_style_image} />
    </div>
  );
}
