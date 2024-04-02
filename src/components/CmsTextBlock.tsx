import CmsHtml from "./CmsHtml";

export default function CmsTextBlock({ data }: { data: any }) {
  return (
    <div className="page-content">
      <CmsHtml html={data.content} listStyleImage={data.list_style_image} />
    </div>
  );
}
