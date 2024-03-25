import CmsHtml from "./CmsHtml";

export default function CmsNotificationBar({ model }: any) {
  return (
    <div className="bg-amber-300 p-2 w-full text-center">
      <CmsHtml html={model.text || "No data"} />
    </div>
  );
}
